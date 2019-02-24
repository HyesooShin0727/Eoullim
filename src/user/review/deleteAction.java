package user.review;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.io.File;
import java.io.Reader;
import java.io.IOException;

public class deleteAction extends ActionSupport {
	public static Reader reader;
	public static SqlMapClient sqlMapper;

	private ReviewVO paramClass;
	private ReviewVO resultClass;

	private Review_CommentVO cClass = new Review_CommentVO();
	private Review_CommentVO cResult = new Review_CommentVO();

	private int rcomment_orgno;
	private int currentPage;
	private String fileUploadPath = "C://Real//Eoullim//WebContent//upload//";
	private int rboard_no;
	private int rcomment_no;
	private String member_id;

	public deleteAction() throws IOException {

		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	public String execute() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		paramClass = new ReviewVO();
		resultClass = new ReviewVO();

		resultClass = (ReviewVO) sqlMapper.queryForObject("reviewSelectOne" ,getRboard_no());

		File deleteFile = new File(fileUploadPath + resultClass.getImg_file());
		File deleteFile2 = new File(fileUploadPath + resultClass.getVideo_file());
		deleteFile.delete();
		deleteFile2.delete();

		paramClass.setRboard_no(getRboard_no());

		sqlMapper.update("deleteReview", paramClass);

		return SUCCESS;

	}

	public String execute2() throws Exception {
		cClass = new Review_CommentVO();
		cResult = new Review_CommentVO();
		
		System.out.println("dfdfd : " + getRboard_no());

		cClass.setRcomment_no(getRcomment_no());
		sqlMapper.update("deleteRcomment", cClass);
		
		return SUCCESS;
	}

	public static Reader getReader() {
		return reader;
	}

	public static void setReader(Reader reader) {
		deleteAction.reader = reader;
	}

	public static SqlMapClient getSqlMapper() {
		return sqlMapper;
	}

	public static void setSqlMapper(SqlMapClient sqlMapper) {
		deleteAction.sqlMapper = sqlMapper;
	}

	public ReviewVO getParamClass() {
		return paramClass;
	}

	public void setParamClass(ReviewVO paramClass) {
		this.paramClass = paramClass;
	}

	public ReviewVO getResultClass() {
		return resultClass;
	}

	public void setResultClass(ReviewVO resultClass) {
		this.resultClass = resultClass;
	}

	public Review_CommentVO getcClass() {
		return cClass;
	}

	public void setcClass(Review_CommentVO cClass) {
		this.cClass = cClass;
	}

	public Review_CommentVO getcResult() {
		return cResult;
	}

	public void setcResult(Review_CommentVO cResult) {
		this.cResult = cResult;
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

	public int getRboard_no() {
		return rboard_no;
	}

	public void setRboard_no(int rboard_no) {
		this.rboard_no = rboard_no;
	}
	public int getRcomment_no() {
		return rcomment_no;
	}

	public void setRcomment_no(int rcomment_no) {
		this.rcomment_no = rcomment_no;
	}

	public int getRcomment_orgno() {
		return rcomment_orgno;
	}

	public void setRcomment_orgno(int rcomment_orgno) {
		this.rcomment_orgno = rcomment_orgno;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

}
