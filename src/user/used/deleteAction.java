package user.used;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import user.member.MemberVO;
import user.used.UsedVO;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.io.File;
import java.io.Reader;
import java.io.IOException;

public class deleteAction extends ActionSupport {
	
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	
	private UsedVO paramClass; // 파라미터를 저장할 객체
	private UsedVO resultClass; // 쿼리 결과 값을 저장할 객체
	
	private Used_CommentVO cparamClass = new Used_CommentVO();
	private Used_CommentVO cresultClass = new Used_CommentVO();
	private MemberVO member;
	
	private int currentPage; // 현재 페이지
	private String fileUploadPath = "C:\\Real\\Eoullim\\WebContent\\upload\\";
	private int uboard_no;
	private int ucomment_no;
	private String member_id;
	
	public deleteAction() throws IOException{
		
		reader = Resources.getResourceAsReader("sqlMapConfig.xml"); // sqlMapConfig.xml 파일의 설정내용을 가져온다.
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader); // sqlMapConfig.xml의 내용을 적용한 sqlMapper 객체 생성.
		reader.close();
	}
	
	// 게시글 삭제
	public String execute() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		
		// 파라미터를 저장할 객체와 쿼리 결과값을 저장할 객체 생성
		paramClass = new UsedVO();
		resultClass = new UsedVO();
		
		// 해당 번호의 글을 가져온다
		resultClass = (UsedVO) sqlMapper.queryForObject("selectOneUboard", getUboard_no());
		
		// 서버에 저장된 파일 삭제
		File deleteFile = new File(fileUploadPath + resultClass.getUboard_file_savname());
		deleteFile.delete();
		
		// 삭제 할 항목 설정
		paramClass.setUboard_no(getUboard_no());
		
		// 게시글 삭제 쿼리 수행
		sqlMapper.update("deleteUboard", paramClass);
		
		return SUCCESS;
	}
	
	// 댓글(Comment)삭제
	public String execute2() throws Exception {
		
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		
		// 파라미터를 저장할 객체와 쿼리 결과값을 저장할 객체 생성
		cparamClass = new Used_CommentVO();
		cresultClass = new Used_CommentVO();
		
		// 삭제 할 항목 설정
		cparamClass.setUcomment_no(getUcomment_no());
					
		// 댓글 삭제 쿼리 수행
		sqlMapper.update("deleteUcomment", cparamClass);
		
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

	public String getFileUploadPath() {
		return fileUploadPath;
	}

	public void setFileUploadPath(String fileUploadPath) {
		this.fileUploadPath = fileUploadPath;
	}

	public int getUboard_no() {
		return uboard_no;
	}

	public void setUboard_no(int uboard_no) {
		this.uboard_no = uboard_no;
	}

	public int getUcomment_no() {
		return ucomment_no;
	}

	public void setUcomment_no(int ucomment_no) {
		this.ucomment_no = ucomment_no;
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