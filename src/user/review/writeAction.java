package user.review;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
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

import user.member.MemberVO;
import user.review.ReviewVO;

public class writeAction extends ActionSupport implements SessionAware {

	public static Reader reader;
	public static SqlMapClient sqlMapper;

	private ReviewVO paramClass;
	private ReviewVO resultClass;
	private MemberVO member;

	public Map session;

	private int currentPage;

	private int rboard_no;
	private String rboard_sub;
	private String rboard_name;
	private String rboard_passwd;
	private String rboard_content;
	private int rboard_goods;
	private int rboard_readhit;
	private int likes;
	private String img_file = "";
	private Date rboard_regdate;
	Calendar today = Calendar.getInstance();
	private String member_id;

	private String rboard_id;

	private static final long serivalVersionUID = -7744420104547018874L;
	private String video_file;

	private File upload;
	private String uploadContentType;
	private String uploadFileName;
	private String fileUploadPath = "C:\\workspace\\Eoullim\\WebContent\\upload\\";
	private String temp = "";

	private List<File> uploads = new ArrayList<File>();
	private List<String> uploadsFileName = new ArrayList<String>();


	public writeAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	public String form() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		resultClass = (ReviewVO) sqlMapper.queryForObject("reviewSelectOne", getRboard_no());
		if(member_id == null) {
			return ERROR;
		}
		return SUCCESS;
	}

	public String execute() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		
		System.out.println(getRboard_passwd());
		paramClass = new ReviewVO();
		resultClass = new ReviewVO();

		paramClass.setVideo_file(getVideo_file());
		paramClass.setRboard_sub(getRboard_sub());
		paramClass.setRboard_name(member.getMember_name());
		paramClass.setRboard_passwd(member.getMember_passwd1());
		paramClass.setRboard_content(getRboard_content());
		paramClass.setRboard_regdate(today.getTime());
		paramClass.setRboard_id(member.getMember_id());
		paramClass.setRboard_readhit(getRboard_readhit());
		paramClass.setLikes(getLikes());
		paramClass.setRboard_goods(getRboard_goods());
		paramClass.setRboard_no(getRboard_no());
		sqlMapper.insert("insertReview", paramClass);

		for (int i = 0; i < uploads.size(); i++) {
			resultClass = (ReviewVO) sqlMapper.queryForObject("selectLastNo");
			System.out.println("���ε� ������ : " + uploads.size());

			if (i > 0) {
				temp = temp + ",";
				/* img_file = img_file + ","; */
			}

			img_file = img_file + getUploadsFileName().get(i);
			System.out.println("�߰���� : " + img_file);

			String file_name = "rboard_" + resultClass.getRboard_no();
			String file_ext = getUploadsFileName().get(i).substring(getUploadsFileName().get(i).lastIndexOf('.') + 1,
					getUploadsFileName().get(i).length()); // .jpg�� ©�� ������ file_ext = .jpg

			temp = temp + file_name + "(" + (i + 1) + ")" + "." + file_ext;
			// ��ȣ

			/* img_file = img_file + file_name + "(" + (i + 1) + ")" + "." + file_ext; */

			img_file = temp;
			System.out.println("���߳� ���߳� : " + img_file);

			File destFile = new File(fileUploadPath + file_name + "(" + (i + 1) + ")" + "." + file_ext);
			FileUtils.copyFile(getUploads().get(i), destFile);
			System.out.println(getFileUploadPath() + "�� ����Ϸ�");

			paramClass.setRboard_no(resultClass.getRboard_no());
			paramClass.setImg_file(img_file);

			sqlMapper.update("updateImgFile", paramClass);
		}
		return SUCCESS;

		/*
		 * if (getUpload() != null) { resultClass = (ReviewVO)
		 * sqlMapper.queryForObject("selectLastNo");
		 * 
		 * String file_name = "file_" + resultClass.getRboard_no(); String file_ext =
		 * getUploadFileName().substring(getUploadFileName().lastIndexOf('.') + 1,
		 * getUploadFileName().length());
		 * 
		 * File destFile = new File(fileUploadPath + file_name + "." + file_ext);
		 * FileUtils.copyFile(getUpload(), destFile);
		 * 
		 * paramClass.setRboard_no(resultClass.getRboard_no());
		 * paramClass.setImg_file(getUploadFileName());
		 * paramClass.setVideo_file(file_name + "." + file_ext);
		 * 
		 * sqlMapper.update("updateImgFile", paramClass); }
		 */

	}

	public Date getRboard_regdate() {
		return rboard_regdate;
	}

	public void setRboard_regdate(Date rboard_regdate) {
		this.rboard_regdate = rboard_regdate;
	}

	public String getRboard_id() {
		return rboard_id;
	}

	public void setRboard_id(String rboard_id) {
		this.rboard_id = rboard_id;
	}

	public int getRboard_goods() {
		return rboard_goods;
	}

	public void setRboard_goods(int rboard_goods) {
		this.rboard_goods = rboard_goods;
	}

	public int getRboard_readhit() {
		return rboard_readhit;
	}

	public void setRboard_readhit(int rboard_readhit) {
		this.rboard_readhit = rboard_readhit;
	}

	public int getLikes() {
		return likes;
	}

	public void setLikes(int likes) {
		this.likes = likes;
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

	public String getVideo_file() {
		return video_file;
	}

	public void setVideo_file(String video_file) {
		this.video_file = video_file;
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

	public Map getSession() {
		return session;
	}

	public void setSession(Map session) {
		this.session = session;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

}
