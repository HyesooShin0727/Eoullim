package user.used;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import user.member.MemberVO;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.io.Reader;
import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;

public class modifyAction extends ActionSupport {
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	
	private UsedVO paramClass; // 파라미터를 저장할 객체
	private UsedVO resultClass; // 쿼리 결과 값을 저장 할 객체
	private MemberVO member;
	
	private int currentPage;
	
	private int uboard_no;
	private String uboard_sub;
	private String uboard_member_name;
	private String uboard_passwd;
	private String uboard_content;
	private String old_file;
	private String member_id;
	
	
	private File upload; // 파일 객체
	private String uploadContentType; // 컨텐츠타입
	private String uploadFileName; // 파일 이름
	private String fileUploadPath = "C:\\Users\\hsp\\eclipse-workspace\\Eoullim\\WebContent\\upload\\"; // 업로드경로
	
	// 생성자
	public modifyAction() throws IOException {
		
		reader = Resources.getResourceAsReader("sqlMapConfig.xml"); // sqlMapConfig.xml 파일의 설정내용을 가져온다.
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader); // sqlMapConfig.xml의 내용을 적용한 sqlMapper 객체 생성.
		reader.close();
	}
	
	// 게시글 수정
	public String execute() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		// 파라미터를 저정할 객체와 쿼리결과값을 저장할 리절트 객체 생성
		paramClass = new UsedVO();
		resultClass = new UsedVO();
		
		// 수정할 항목 설정
		paramClass.setUboard_no(getUboard_no());
		paramClass.setUboard_sub(getUboard_sub());
		paramClass.setUboard_member_name(member.getMember_name());
		paramClass.setUboard_passwd(member.getMember_passwd1());
		paramClass.setUboard_content(getUboard_content());
		
		// 일단 위의 5개의 항목부터 우선 수정한다
		sqlMapper.update("updateUboard", paramClass);
		
		// 수정할 파일이 업로드 되었다면 파일을 업로드하고 DB의 file항목을 수정
		if(getUpload() != null) {
			
			// 실제 서버에 저장될 파일 이름과 확장자 설정
			String file_name = "file_" + getUboard_no();
			String file_ext = getUploadFileName().substring(getUploadFileName().lastIndexOf('.') + 1,
					getUploadFileName().length());
			
			// 이전 파일 삭제
			File deleteFile = new File(fileUploadPath + getOld_file());
			deleteFile.delete();
			
			// 새 파일 업로드
			File destFile = new File(fileUploadPath + file_name + "." + file_ext);
			FileUtils.copyFile(getUpload(), destFile);
			
			// 파일 정보 파라미터 설정.
			paramClass.setUboard_file_orgname(getUploadFileName());
			paramClass.setUboard_file_savname(file_name + "." + file_ext);
			
			// 파일 정보 업데이트 
			sqlMapper.update("updateFileUboard", paramClass);
		}
		
		// 수정이 끝나면 view 페이지로 이동(3팀 주석)
		// 왜 이렇게 하는건지 확인해볼것??
		// 글 번호에 해당하는 1줄의 데이터를 꺼내와서 resultClass 에 저장
		resultClass = (UsedVO) sqlMapper.queryForObject("selectOneUboard", getUboard_no());
		
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

	public String getOld_file() {
		return old_file;
	}

	public void setOld_file(String old_file) {
		this.old_file = old_file;
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