package user.QnA;
//
import com.opensymphony.xwork2.ActionSupport;
import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.util.*;
import java.io.Reader;
import java.io.IOException;

import java.io.File;
import org.apache.commons.io.FileUtils;

public class replyAction extends ActionSupport {
	
	public static Reader reader;
	public static SqlMapClient sqlMapper;

	private QnAVO paramClass;
	private QnAVO resultClass;

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

	public replyAction() throws IOException {

		reader = Resources.getResourceAsReader("sqlMapConfig.xml");

		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	public String form() throws Exception {
		return SUCCESS;
	}

	public String execute() throws Exception {
		paramClass = new QnAVO();
		resultClass = new QnAVO();

		paramClass.setQna_no(getQna_no());
		paramClass.setQna_sub(qna_sub);
		paramClass.setQna_name("test");
		paramClass.setQna_content(qna_content);
		paramClass.setQna_readhit(1);
		paramClass.setQna_regdate(today.getTime());
		paramClass.setRef(0);
		paramClass.setRe_step(getRe_step()+1);
		paramClass.setRe_level(0);
		paramClass.setImg_file("");
		paramClass.setQna_status(0);

		sqlMapper.insert("insertQnA", paramClass);

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

	
}
