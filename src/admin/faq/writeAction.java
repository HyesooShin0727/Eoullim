package admin.faq;
import com.opensymphony.xwork2.ActionContext;
//
import com.opensymphony.xwork2.ActionSupport;

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

	private FAQVO paramClass;
	private FAQVO resultClass;
	private MemberVO member;
	
	private String member_id;

	private int currentPage;

	private int faq_no;
	private String faq_sub;
	private String faq_content;
	private String faq_type;
	private Date faq_regdate;
	Calendar today = Calendar.getInstance();

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

	public String execute() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		paramClass = new FAQVO();
		resultClass = new FAQVO();

		paramClass.setFaq_no(faq_no);
		paramClass.setFaq_sub(faq_sub);
		paramClass.setFaq_content(faq_content);
		paramClass.setFaq_type(faq_type);
		paramClass.setFaq_regdate(today.getTime());

		sqlMapper.insert("insertFaq", paramClass);

		return SUCCESS;
	}

	public Calendar getToday() {
		return today;
	}

	public void setToday(Calendar today) {
		this.today = today;
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

	public FAQVO getParamClass() {
		return paramClass;
	}

	public void setParamClass(FAQVO paramClass) {
		this.paramClass = paramClass;
	}

	public FAQVO getResultClass() {
		return resultClass;
	}

	public void setResultClass(FAQVO resultClass) {
		this.resultClass = resultClass;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getFaq_no() {
		return faq_no;
	}

	public void setFaq_no(int faq_no) {
		this.faq_no = faq_no;
	}

	public String getFaq_sub() {
		return faq_sub;
	}

	public void setFaq_sub(String faq_sub) {
		this.faq_sub = faq_sub;
	}

	public String getFaq_content() {
		return faq_content;
	}

	public void setFaq_content(String faq_content) {
		this.faq_content = faq_content;
	}

	public String getFaq_type() {
		return faq_type;
	}

	public void setFaq_type(String faq_type) {
		this.faq_type = faq_type;
	}

	public Date getFaq_regdate() {
		return faq_regdate;
	}

	public void setFaq_regdate(Date faq_regdate) {
		this.faq_regdate = faq_regdate;
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
