package user.used;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.io.Reader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.IOException;

import java.net.URLEncoder;

import java.util.ArrayList;
import java.util.List;
import org.apache.struts2.interceptor.SessionAware;

import user.member.MemberVO;
import java.util.Map;

public class viewAction extends ActionSupport implements SessionAware {
	
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	
	private UsedVO paramClass = new UsedVO(); //파라미터를 저장할 객체 생성
	private UsedVO resultClass = new UsedVO(); // 쿼리 결과 값을 저장할 객체 생성
	private MemberVO member;
	
	private List<Used_CommentVO> commentlist = new ArrayList<Used_CommentVO>();
	
	private Used_CommentVO cparamClass = new Used_CommentVO();
	private Used_CommentVO cresultClass = new Used_CommentVO();
	
	
	private int currentPage;
	
	private int uboard_no;
	private String uboard_passwd;
	private String uboard_file_savname;
	private String uboard_file_orgname;
	private String member_id;
	
	private int ucomment_no;
	private int ucomment_id;
	private int ucomment_orgno;
	private int ucomment_content;
	private String ucomment_passwd;
	
	private String fileUploadPath = "C:\\Real\\Eoullim\\WebContent\\upload\\";
	
	private InputStream inputStream;
	private String contentDisposition;
	private long contentLength;
	
	public Map session;

	// 생성자
	public viewAction() throws IOException
	{	
		// sqlMapConfig.xml 파일의 설정내용을 가져온다.	
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		// sqlMapConfig.xml의 내용을 적용한 sqlMapper 객체 생성
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();	
	}
	
	
	public String execute() throws Exception {
		
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid", member_id);
		System.out.println("member_id");
		
		paramClass = new UsedVO();
		
		paramClass.setUboard_no(getUboard_no());
		System.out.println(getUcomment_orgno());
		
		if(getUcomment_orgno() != 0) {
			paramClass.setUboard_no(getUcomment_orgno());
		} else {
			paramClass.setUboard_no(getUboard_no());
		}
		
		sqlMapper.update("updateReadHitUboard", paramClass);
		
		resultClass =(UsedVO) sqlMapper.queryForObject("selectOneUboard", getUboard_no());
		System.out.println("uboard_id");
		commentlist = sqlMapper.queryForList("selectAllUcomment", getUboard_no());
		
		return SUCCESS;
	}
	
	public String download() throws Exception
	{
		resultClass = (UsedVO) sqlMapper.queryForObject("selectOneUboard", getUboard_no());
		
		File fileInfo = new File(fileUploadPath + resultClass.getUboard_file_savname());
		
		System.out.println(resultClass.getUboard_file_savname());
	
		setContentLength(fileInfo.length());
		setContentDisposition("attachment; filename=" + URLEncoder.encode(resultClass.getUboard_file_orgname(), "UTF-8"));
		setInputStream(new FileInputStream(new File(fileUploadPath + resultClass.getUboard_file_savname())));
		
		/*		
		File fileInfo = new File(fileUploadPath + fileDownloadName);
		setContentLength(fileInfo.length());
		setContentDisposition("attachment; filename="+URLEncoder.encode(fileDownloadName, "UTF-8"));
		setInputStream(new FileInputStream(fileUploadPath + fileDownloadName));
		*/
		
		return SUCCESS;
	}
	
	// 비밀번호 체크 폼
	public String checkForm() throws Exception{
		return SUCCESS;
	}
	
	// 비밀번호 체크 액션
	public String checkAction() throws Exception
	{
		// 비밀번호 입력값 파라미터 설정
		paramClass.setUboard_no(getUboard_no());
		paramClass.setUboard_passwd(getUboard_passwd());
		
		// 글번호와 비밀번호 출력해서 확인
		System.out.println("getUboarD_no" + getUboard_no());
		System.out.println("getUboard_passwd" + getUboard_passwd());
		
		//현재 글의 비밀번호 가져오기
		resultClass = (UsedVO) sqlMapper.queryForObject("selectPasswdUboard", paramClass);
		
		if(resultClass == null)
			return ERROR;
		
		return SUCCESS;
	}
	
	public String checkAction2() throws Exception
	{

		//System.out.println("getUcomment_no" + getUcomment_no());
		//System.out.println("getUcomment_passwd" + getUcomment_passwd());
		//System.out.print("getUcomment_orgno" + getUcomment_orgno());
		
		// 댓글의 글번호 패스워드 원글번호  입력값 파라미터 설정 
		cparamClass.setUcomment_no(getUcomment_no());
		cparamClass.setUcomment_passwd(getUcomment_passwd());
		cparamClass.setUcomment_orgno(getUcomment_orgno());
		
		// 현재 댓글의 비밀번호 가져오기
		cresultClass = (Used_CommentVO) sqlMapper.queryForObject("selectPasswdUcomment", cparamClass);
		
		if(cresultClass == null)
			return ERROR;
		
		return SUCCESS;
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

	public List<Used_CommentVO> getCommentlist() {
		return commentlist;
	}

	public void setCommentlist(List<Used_CommentVO> commentlist) {
		this.commentlist = commentlist;
	}

	public Used_CommentVO getCparamClass() {
		return cparamClass;
	}

	public void setCparamClass(Used_CommentVO cparamClass) {
		this.cparamClass = cparamClass;
	}

	public Used_CommentVO getCresultClass() {
		return cresultClass;
	}

	public void setCresultClass(Used_CommentVO cresultClass) {
		this.cresultClass = cresultClass;
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

	public String getUboard_passwd() {
		return uboard_passwd;
	}

	public void setUboard_passwd(String uboard_passwd) {
		this.uboard_passwd = uboard_passwd;
	}

	public int getUcomment_no() {
		return ucomment_no;
	}

	public void setUcomment_no(int ucomment_no) {
		this.ucomment_no = ucomment_no;
	}

	public int getUcomment_orgno() {
		return ucomment_orgno;
	}

	public void setUcomment_orgno(int ucomment_orgno) {
		this.ucomment_orgno = ucomment_orgno;
	}

	public String getUcomment_passwd() {
		return ucomment_passwd;
	}

	public void setUcomment_passwd(String ucomment_passwd) {
		this.ucomment_passwd = ucomment_passwd;
	}

	public String getFileUploadPath() {
		return fileUploadPath;
	}

	public void setFileUploadPath(String fileUploadPath) {
		this.fileUploadPath = fileUploadPath;
	}

	public InputStream getInputStream() {
		return inputStream;
	}

	public void setInputStream(InputStream inputStream) {
		this.inputStream = inputStream;
	}

	public String getContentDisposition() {
		return contentDisposition;
	}

	public void setContentDisposition(String contentDisposition) {
		this.contentDisposition = contentDisposition;
	}

	public long getContentLength() {
		return contentLength;
	}

	public void setContentLength(long contentLength) {
		this.contentLength = contentLength;
	}

	public Map getSession() {
		return session;
	}

	public void setSession(Map session) {
		this.session = session;
	}


	public String getUboard_file_savname() {
		return uboard_file_savname;
	}


	public void setUboard_file_savname(String uboard_file_savname) {
		this.uboard_file_savname = uboard_file_savname;
	}


	public String getUboard_file_orgname() {
		return uboard_file_orgname;
	}


	public void setUboard_file_orgname(String uboard_file_orgname) {
		this.uboard_file_orgname = uboard_file_orgname;
	}


	public int getUcomment_id() {
		return ucomment_id;
	}


	public void setUcomment_id(int ucomment_id) {
		this.ucomment_id = ucomment_id;
	}


	public int getUcomment_content() {
		return ucomment_content;
	}


	public void setUcomment_content(int ucomment_content) {
		this.ucomment_content = ucomment_content;
	}


	public MemberVO getMember() {
		return member;
	}


	public void setMember(MemberVO member) {
		this.member = member;
	}


	public String getMember_id() {
		return member_id;
	}


	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}
	
	
	
}
		