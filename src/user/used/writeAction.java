package user.used;

import java.io.Reader;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import user.member.MemberVO;
import user.used.UsedVO;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.util.*;
import java.io.Reader;
import java.io.IOException;

import java.io.File;
import org.apache.commons.io.FileUtils;
import org.apache.struts2.interceptor.SessionAware;

import java.util.Map;

public class writeAction extends ActionSupport{
	
	public Map session;
	
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	
	private UsedVO paramClass; 
	private UsedVO resultClass;
	private MemberVO member;
	
	private int currentPage;
	
	private int uboard_no;
	private String uboard_sub;
	private String uboard_member_name;
	private String uboard_passwd;
	private String uboard_content;
	private String uboard_file_orgname;
	private String uboard_file_savname;
	Calendar today = Calendar.getInstance();
	
	private String member_id;
	private String uboard_id;
	
	private File upload;
	private String uploadContentType;
	private String uploadFileName;
	private String fileUploadPath="C:\\Users\\hsp\\eclipse-workspace\\Eoullim\\WebContent\\upload\\";
	
	private int ref;
	private int re_step;
	private int re_level;
	
	boolean reply = false;
	
	// 생성자
	public writeAction() throws IOException
	{
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}
	
	public String form() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		resultClass = (UsedVO) sqlMapper.queryForObject("selectOneUboard", getUboard_no());
		
		if(member_id == null) {
			return ERROR;
		}
		return SUCCESS;
	}
	
	public String reply() throws Exception
	{
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		
		reply = true;
		resultClass = new UsedVO();
		
		resultClass = (UsedVO) sqlMapper.queryForObject("selectOneUboard", getUboard_no());
		// resultClass.setUboard_sub(resultClass.getUboard_sub());
		resultClass.setUboard_sub("[답변] " + resultClass.getUboard_sub());
		resultClass.setUboard_passwd("");
		resultClass.setUboard_member_name("");
		resultClass.setUboard_content("");
		resultClass.setUboard_file_orgname(null);
		resultClass.setUboard_file_savname(null);
		
		
		return SUCCESS;	
	}
	
	public String execute() throws Exception {
		
		paramClass = new UsedVO(); // 파라미터를 저장할 객체 생성
		resultClass = new UsedVO(); // 쿼리 결과 값을 저장할 객체 생성
		
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
	
		if(ref == 0)
		{
			paramClass.setRe_step(0);
			paramClass.setRe_level(0);
		}
		else 
		{
			paramClass.setRef(getRef());
			paramClass.setRe_step(getRe_step());
			sqlMapper.update("updateReplyStepUboard", paramClass);
			
			paramClass.setRe_step(getRe_step() + 1);
			paramClass.setRe_level(getRe_level() + 1);
			paramClass.setRef(getRef());
		}
		
		paramClass.setUboard_sub(getUboard_sub());
		paramClass.setUboard_member_id(member.getMember_id());
		// 세션 처리할경우 member_id 값 세팅
		// paramClass.setUboard_member_id((String)session.get("member_id")); 
		paramClass.setUboard_passwd(member.getMember_passwd1());
		paramClass.setUboard_member_name(member.getMember_name());
		paramClass.setUboard_content(getUboard_content());
		paramClass.setUboard_regdate(today.getTime());
		
		
		if(ref == 0)
			sqlMapper.insert("insertUboard", paramClass);
		else
			sqlMapper.insert("insertReplyUboard", paramClass);
		
		if(getUpload() != null)
		{
			resultClass = (UsedVO) sqlMapper.queryForObject("selectLastNoUboard");
			
			String file_name = "file_" + resultClass.getUboard_no();
			String file_ext = getUploadFileName().substring(
					getUploadFileName().lastIndexOf('.') + 1,
					getUploadFileName().length()
					);
			
			File destFile = new File(fileUploadPath + file_name + "." + file_ext);
			FileUtils.copyFile(getUpload(), destFile);
			
			paramClass.setUboard_no(resultClass.getUboard_no());
			
			paramClass.setUboard_file_orgname(getUploadFileName());
			paramClass.setUboard_file_savname(file_name + "." +file_ext);
			
			sqlMapper.update("updateFileUboard", paramClass);
		}

		return SUCCESS;
	}
	
	public Map getSession() {
		return session;
	}

	public void setSession(Map session) {
		this.session = session;
	}

	public UsedVO getParamClass() {
		return paramClass;
	}

	public void setParamClass(UsedVO paramClass) {
		this.paramClass = paramClass;
	}

	public UsedVO getResultClass() {
		return resultClass;
	}

	public void setResultClass(UsedVO resultClass) {
		this.resultClass = resultClass;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getUboard_no() {
		return uboard_no;
	}

	public void setUboard_no(int uboard_no) {
		this.uboard_no = uboard_no;
	}

	public String getUboard_sub() {
		return uboard_sub;
	}

	public void setUboard_sub(String uboard_sub) {
		this.uboard_sub = uboard_sub;
	}

	public String getUboard_member_name() {
		return uboard_member_name;
	}

	public void setUboard_member_name(String uboard_member_name) {
		this.uboard_member_name = uboard_member_name;
	}

	public String getUboard_passwd() {
		return uboard_passwd;
	}

	public void setUboard_passwd(String uboard_passwd) {
		this.uboard_passwd = uboard_passwd;
	}

	public String getUboard_content() {
		return uboard_content;
	}

	public void setUboard_content(String uboard_content) {
		this.uboard_content = uboard_content;
	}

	public String getUboard_file_orgname() {
		return uboard_file_orgname;
	}

	public void setUboard_file_orgname(String uboard_file_orgname) {
		this.uboard_file_orgname = uboard_file_orgname;
	}

	public String getUboard_file_savname() {
		return uboard_file_savname;
	}

	public void setUboard_file_savname(String uboard_file_savname) {
		this.uboard_file_savname = uboard_file_savname;
	}

	public Calendar getToday() {
		return today;
	}

	public void setToday(Calendar today) {
		this.today = today;
	}

	public File getUpload() {
		return upload;
	}

	public void setUpload(File upload) {
		this.upload = upload;
	}

	public String getUploadContentType() {
		return uploadContentType;
	}

	public void setUploadContentType(String uploadContentType) {
		this.uploadContentType = uploadContentType;
	}

	public String getUploadFileName() {
		return uploadFileName;
	}

	public void setUploadFileName(String uploadFileName) {
		this.uploadFileName = uploadFileName;
	}

	public String getFileUploadPath() {
		return fileUploadPath;
	}

	public void setFileUploadPath(String fileUploadPath) {
		this.fileUploadPath = fileUploadPath;
	}

	public int getRef() {
		return ref;
	}

	public void setRef(int ref) {
		this.ref = ref;
	}

	public int getRe_step() {
		return re_step;
	}

	public void setRe_step(int re_step) {
		this.re_step = re_step;
	}

	public int getRe_level() {
		return re_level;
	}

	public void setRe_level(int re_level) {
		this.re_level = re_level;
	}

	public boolean isReply() {
		return reply;
	}

	public void setReply(boolean reply) {
		this.reply = reply;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public MemberVO getMember() {
		return member;
	}

	public void setMember(MemberVO member) {
		this.member = member;
	}

	public String getUboard_id() {
		return uboard_id;
	}

	public void setUboard_id(String uboard_id) {
		this.uboard_id = uboard_id;
	}
	
}
