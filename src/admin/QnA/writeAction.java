package admin.QnA;
import com.opensymphony.xwork2.ActionContext;
//
import com.opensymphony.xwork2.ActionSupport;

import admin.goods.GoodsVO;
import user.QnA.QnAVO;
import user.member.MemberVO;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.util.*;
import java.io.Reader;
import java.io.IOException;

import java.io.File;
import org.apache.commons.io.FileUtils;

public class writeAction extends ActionSupport {
	
	public static Reader reader;
	public static SqlMapClient sqlMapper;

	private QnAVO paramClass;
	private QnAVO resultClass;
	private MemberVO member;

	private int currentPage;

	private int qna_no;
	private String qna_sub;
	private String qna_name;
	private String qna_content;
	private int qna_readhit;
	private Date qna_regdate;
	private int ref;
	private int re_step;
	private int re_level;
	private String img_file;
	private int qna_status;
	Calendar today = Calendar.getInstance();
	
	private String member_id;
	
	private File upload;
	private String uploadContentType;
	private String uploadFileName;
	private String fileUploadPath = "C:\\Users\\hsp\\eclipse-workspace\\Eoullim\\WebContent\\upload\\";
	
	boolean reply = false;

	public writeAction() throws IOException {

		reader = Resources.getResourceAsReader("sqlMapConfig.xml");

		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	public String form() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		return SUCCESS;
	}
	
	public String reply() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		System.out.println("답변달기 엑션 메소드 실행");
		reply=true;
		resultClass = new QnAVO();
		
		resultClass = (QnAVO) sqlMapper.queryForObject("selectOneQnA", getQna_no());
		resultClass.setQna_sub("[답변] " + resultClass.getQna_sub());
		resultClass.setQna_name("");
		resultClass.setQna_content("");
		
		return SUCCESS;
	}

	public String execute() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		paramClass = new QnAVO();
		resultClass = new QnAVO();
		if(ref == 0 ) {
			paramClass.setRe_step(0);
			paramClass.setRe_level(0);
		}else {
			paramClass.setRef(getRef());
			paramClass.setRe_step(getRe_step());
			sqlMapper.update("updateReplyQnA", paramClass);
			
			paramClass.setRe_step(getRe_step()+1);
			paramClass.setRe_level(getRe_level()+1);
			paramClass.setRef(getRef());
		}
		paramClass.setQna_sub(getQna_sub());
		paramClass.setQna_name(getMember_id());
		paramClass.setQna_content(getQna_content());
		paramClass.setQna_readhit(0);
		paramClass.setQna_regdate(today.getTime());
		paramClass.setQna_status(0);
		
		if(ref == 0 ) {
			sqlMapper.insert("insertQnA", paramClass);
		}else {
			sqlMapper.insert("insertReplyQnA", paramClass);
			sqlMapper.update("updateQnAstatus",getRef());
		}
		if(getUpload() != null) {
			resultClass = (QnAVO) sqlMapper.queryForObject("selectLastNoQnA");
			
			String file_name = "file_"+resultClass.getQna_no();
			String file_ext = getUploadFileName().substring(
					getUploadFileName().lastIndexOf('.') + 1, getUploadFileName().length());
			
			File destFile = new File(fileUploadPath + file_name + "." + file_ext);
			FileUtils.copyFile(getUpload(), destFile);
			
			paramClass.setQna_no(resultClass.getQna_no());
			paramClass.setImg_file(file_name + "." + file_ext);
			
			
			sqlMapper.update("updateFileQnA",paramClass);
		}

		return SUCCESS;
	}

	public static Reader getReader() {
		return reader;
	}

	public static void setReader(Reader reader) {
		writeAction.reader = reader;
	}

	public static SqlMapClient getSqlMapper() {
		return sqlMapper;
	}

	public static void setSqlMapper(SqlMapClient sqlMapper) {
		writeAction.sqlMapper = sqlMapper;
	}

	public QnAVO getParamClass() {
		return paramClass;
	}

	public void setParamClass(QnAVO paramClass) {
		this.paramClass = paramClass;
	}

	public QnAVO getResultClass() {
		return resultClass;
	}

	public void setResultClass(QnAVO resultClass) {
		this.resultClass = resultClass;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getQna_no() {
		return qna_no;
	}

	public void setQna_no(int qna_no) {
		this.qna_no = qna_no;
	}

	public String getQna_sub() {
		return qna_sub;
	}

	public void setQna_sub(String qna_sub) {
		this.qna_sub = qna_sub;
	}

	public String getQna_name() {
		return qna_name;
	}

	public void setQna_name(String qna_name) {
		this.qna_name = qna_name;
	}

	public String getQna_content() {
		return qna_content;
	}

	public void setQna_content(String qna_content) {
		this.qna_content = qna_content;
	}

	public int getQna_readhit() {
		return qna_readhit;
	}

	public void setQna_readhit(int qna_readhit) {
		this.qna_readhit = qna_readhit;
	}

	public Date getQna_regdate() {
		return qna_regdate;
	}

	public void setQna_regdate(Date qna_regdate) {
		this.qna_regdate = qna_regdate;
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

	public String getImg_file() {
		return img_file;
	}

	public void setImg_file(String img_file) {
		this.img_file = img_file;
	}

	public int getQna_status() {
		return qna_status;
	}

	public void setQna_status(int qna_status) {
		this.qna_status = qna_status;
	}

	public Calendar getToday() {
		return today;
	}

	public void setToday(Calendar today) {
		this.today = today;
	}

	public boolean isReply() {
		return reply;
	}

	public void setReply(boolean reply) {
		this.reply = reply;
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
}
