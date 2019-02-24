package user.review;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import user.member.MemberVO;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.io.Reader;
import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.apache.struts2.interceptor.SessionAware;

public class modifyAction extends ActionSupport implements SessionAware {

	private Map session;

	public Map getSession() {
		return session;
	}

	public void setSession(Map session) {
		this.session = session;
	}

	public static Reader reader;
	public static SqlMapClient sqlMapper;

	private ReviewVO paramClass;
	private ReviewVO resultClass;
	private MemberVO member;

	private Review_CommentVO cClass;
	private Review_CommentVO cResult;
	private int currentPage;

	private int rboard_no;
	private String rboard_sub;
	private String rboard_name;
	private String rboard_passwd;
	private String rboard_content;
	private String img_file;
	private String video_file;
	private int rcomment_no;
	private String rcomment_id;
	private String rcomment_passwd;
	private String rcomment_content;
	private int rcomment_orgno;
	private String temp = "";

	private String member_id;

	private List<File> uploads = new ArrayList<File>();
	private List<String> uploadsFileName = new ArrayList<String>();
	private String fileUploadPath = "C:\\workspace\\Eoullim\\WebContent\\upload\\";

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

	public int getRcomment_no() {
		return rcomment_no;
	}

	public void setRcomment_no(int rcomment_no) {
		this.rcomment_no = rcomment_no;
	}

	public String getRcomment_id() {
		return rcomment_id;
	}

	public void setRcomment_id(String rcomment_id) {
		this.rcomment_id = rcomment_id;
	}

	public String getRcomment_passwd() {
		return rcomment_passwd;
	}

	public void setRcomment_passwd(String rcomment_passwd) {
		this.rcomment_passwd = rcomment_passwd;
	}

	public String getRcomment_content() {
		return rcomment_content;
	}

	public void setRcomment_content(String rcomment_content) {
		this.rcomment_content = rcomment_content;
	}

	public int getRcomment_orgno() {
		return rcomment_orgno;
	}

	public void setRcomment_orgno(int rcomment_orgno) {
		this.rcomment_orgno = rcomment_orgno;
	}

	private File upload;
	private String uploadContentType;
	private String uploadFileName;

	public modifyAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	public String form() throws Exception {
		member_id = (String) ActionContext.getContext().getSession().get("member_id");
		return SUCCESS;
	}

	public String execute() throws Exception {
		member_id = (String) ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid", member_id);
		paramClass = new ReviewVO();
		resultClass = new ReviewVO();

		// �߰���
		resultClass = (ReviewVO) sqlMapper.queryForObject("reviewSelectOne", getRboard_no());
		paramClass.setRboard_no(getRboard_no());
		paramClass.setRboard_sub(getRboard_sub());
		paramClass.setRboard_name(member.getMember_name());
		paramClass.setRboard_passwd(member.getMember_passwd1());
		paramClass.setRboard_content(getRboard_content());
		paramClass.setVideo_file(getVideo_file());

		sqlMapper.update("updateReview", paramClass);

		for (int i = 0; i < uploads.size(); i++) {
			if (i > 0) {
				temp = temp + ",";
			}

			img_file = img_file + getUploadsFileName().get(i);
			System.out.println("middel��� : " + img_file);

			String file_name = "rboard_" + resultClass.getRboard_no();
			String file_ext = getUploadsFileName().get(i).substring(getUploadsFileName().get(i).lastIndexOf('.') + 1,
					getUploadsFileName().get(i).length());
			temp = temp + file_name + "(" + (i + 1) + ")" + "." + file_ext;
			img_file = temp;
			System.out.println("���̾� ���̾� : " + img_file);
			File destFile = new File(fileUploadPath + file_name + "(" + (i + 1) + ")" + "." + file_ext);
			FileUtils.copyFile(getUploads().get(i), destFile);
			System.out.println(getFileUploadPath() + "�� �����Ϸ�");
			paramClass.setRboard_no(resultClass.getRboard_no());
			paramClass.setImg_file(img_file);
			sqlMapper.update("updateImgFile", paramClass);

		}

		resultClass = (ReviewVO) sqlMapper.queryForObject("reviewSelectOne", getRboard_no());

		return SUCCESS;
	}

	public static Reader getReader() {
		return reader;
	}

	public static void setReader(Reader reader) {
		modifyAction.reader = reader;
	}

	public static SqlMapClient getSqlMapper() {
		return sqlMapper;
	}

	public static void setSqlMapper(SqlMapClient sqlMapper) {
		modifyAction.sqlMapper = sqlMapper;
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

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getRboard_no() {
		return rboard_no;
	}

	public void setRboard_no(int rboard_no) {
		this.rboard_no = rboard_no;
	}

	public String getRboard_sub() {
		return rboard_sub;
	}

	public void setRboard_sub(String rboard_sub) {
		this.rboard_sub = rboard_sub;
	}

	public String getRboard_name() {
		return rboard_name;
	}

	public void setRboard_name(String rboard_name) {
		this.rboard_name = rboard_name;
	}

	public String getRboard_passwd() {
		return rboard_passwd;
	}

	public void setRboard_passwd(String rboard_passwd) {
		this.rboard_passwd = rboard_passwd;
	}

	public String getRboard_content() {
		return rboard_content;
	}

	public void setRboard_content(String rboard_content) {
		this.rboard_content = rboard_content;
	}

	public String getImg_file() {
		return img_file;
	}

	public void setImg_file(String img_file) {
		this.img_file = img_file;
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

	public List<File> getUploads() {
		return uploads;
	}

	public void setUploads(List<File> uploads) {
		this.uploads = uploads;
	}

	public List<String> getUploadsFileName() {
		return uploadsFileName;
	}

	public void setUploadsFileName(List<String> uploadsFileName) {
		this.uploadsFileName = uploadsFileName;
	}

	public String getVideo_file() {
		return video_file;
	}

	public void setVideo_file(String video_file) {
		this.video_file = video_file;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

}
