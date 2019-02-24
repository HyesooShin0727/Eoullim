package user.QnA;

import com.opensymphony.xwork2.ActionSupport;
import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.io.Reader;
import java.io.File;
import java.io.IOException;
import java.util.Calendar;
import java.util.Date;

import org.apache.commons.io.FileUtils;

public class modifyAction extends ActionSupport{
	public static Reader reader;
	public static SqlMapClient sqlMapper;

	private QnAVO paramClass; //파라미터를 저장할 객체
	private QnAVO resultClass; //쿼리 결과 값을 저장할 객체

	private int currentPage;	//현재 페이지
	
	private int qna_no;
	private String qna_sub;
	private String qna_name;
	private String qna_passwd;
	private String qna_content;
	private int qna_readhit;
	private Date qna_regdate;
	private int ref;
	private int re_step;
	private int re_level;
	private String img_file;
	private int qna_status;
	Calendar today = Calendar.getInstance();
	
	private File upload;
	private String uploadContentType;
	private String uploadFileName;
	private String fileUploadPath="C:\\Users\\hsp\\eclipse-workspace\\Eoullim\\WebContent\\upload\\";


	// 생성자
	public modifyAction() throws IOException {
		
		reader = Resources.getResourceAsReader("sqlMapConfig.xml"); // sqlMapConfig.xml 파일의 설정내용을 가져온다.
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader); // sqlMapConfig.xml의 내용을 적용한 sqlMapper 객체 생성.
		reader.close();
	}

	// 게시글 수정//
	public String execute() throws Exception {
		
		//파라미터와 리절트 객체 생성.
		paramClass = new QnAVO();
		resultClass = new QnAVO();

		// 수정할 항목 설정.
		paramClass.setQna_no(getQna_no());
		paramClass.setQna_sub(qna_sub);
		paramClass.setQna_name("test");
		paramClass.setQna_content(qna_content);
		paramClass.setQna_readhit(qna_readhit);
		paramClass.setQna_regdate(today.getTime());
		paramClass.setRef(0);
		paramClass.setRe_level(0);
		paramClass.setRe_step(0);
		paramClass.setImg_file(img_file);
		paramClass.setQna_status(0);
		
		if(getUpload() != null) {
			resultClass = (QnAVO) sqlMapper.queryForObject("selectLastNoQnA");
			System.out.println(resultClass.getQna_no());
			System.out.println(resultClass.getImg_file());
			String file_name = "file_" + resultClass.getQna_no();
			String file_ext = getUploadFileName().substring(getUploadFileName().lastIndexOf('.')+1, getUploadFileName().length());
			
			File destFile = new File(fileUploadPath + file_name + "." + file_ext);
			FileUtils.copyFile(getUpload(), destFile);
			
			paramClass.setQna_no(resultClass.getQna_no());
			paramClass.setImg_file(file_name + "." + file_ext);

		// 일단 항목만 수정한다.
		sqlMapper.update("updateQnA", paramClass);

		// 수정이 끝나면 view 페이지로 이동.
		resultClass = (QnAVO) sqlMapper.queryForObject("selectOneQnA", qna_no);
		}

		return SUCCESS;
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

	public String getQna_passwd() {
		return qna_passwd;
	}

	public void setQna_passwd(String qna_passwd) {
		this.qna_passwd = qna_passwd;
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


}
