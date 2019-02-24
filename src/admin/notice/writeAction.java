package admin.notice;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.util.*;
import java.io.Reader;
import java.io.IOException;
import user.member.MemberVO;

import admin.notice.NoticeVO;

public class writeAction extends ActionSupport {

	public static Reader reader;
	public static SqlMapClient sqlMapper;

	private NoticeVO paramClass;
	private NoticeVO resultClass;
	private MemberVO member;
	
	private int currentPage;

	private String member_id;
	
	private int notice_no;
	private String notice_sub;
	private String notice_id;
	private String notice_content;
	private String notice_regdate;
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
		
		paramClass = new NoticeVO();
		resultClass = new NoticeVO();

		paramClass.setNotice_id(getMember_id());
		paramClass.setNotice_sub(getNotice_sub());
		paramClass.setNotice_content(getNotice_content());
		paramClass.setNotice_regdate(today.getTime());

		sqlMapper.insert("insertNotice", paramClass);

		return SUCCESS;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getNotice_no() {
		return notice_no;
	}

	public void setNotice_no(int notice_no) {
		this.notice_no = notice_no;
	}

	public String getNotice_sub() {
		return notice_sub;
	}

	public void setNotice_sub(String notice_sub) {
		this.notice_sub = notice_sub;
	}

	public String getNotice_id() {
		return notice_id;
	}

	public void setNotice_id(String notice_id) {
		this.notice_id = notice_id;
	}

	public String getNotice_content() {
		return notice_content;
	}

	public void setNotice_content(String notice_content) {
		this.notice_content = notice_content;
	}

	public String getNotice_regdate() {
		return notice_regdate;
	}

	public void setNotice_regdate(String notice_regdate) {
		this.notice_regdate = notice_regdate;
	}

	public Calendar getToday() {
		return today;
	}

	public void setToday(Calendar today) {
		this.today = today;
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
