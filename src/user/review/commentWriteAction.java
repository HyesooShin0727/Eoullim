package user.review;

import java.io.IOException;
import java.io.Reader;
import java.util.Calendar;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;
import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import user.member.MemberVO;

public class commentWriteAction extends ActionSupport implements SessionAware {

	public static Reader reader;
	public static SqlMapClient sqlMapper;

	private Review_CommentVO paramClass;
	private Review_CommentVO resultClass;
	private MemberVO member;

	private int rcomment_no;
	private int currentPage;
/*
	private int ref;
	private int re_step;
	private int re_level;
*/
	private String rcomment_id;
	private int rboard_no;
	private String rcomment_passwd;
	private String rcomment_content;
	private int rcomment_orgno;
	public Map session;
	
	private String member_id;

	Calendar today = Calendar.getInstance();

	public commentWriteAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	public String form() throws Exception {
		paramClass = (Review_CommentVO) sqlMapper.queryForObject("rcommentSelectOne"  ,getRcomment_no());
		return SUCCESS;
	}

	public String execute() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);

		paramClass = new Review_CommentVO();
		resultClass = new Review_CommentVO();

		paramClass.setRcomment_orgno(getRcomment_orgno());
		paramClass.setRcomment_id(member.getMember_id());
		paramClass.setRcomment_passwd(member.getMember_passwd1());
		paramClass.setRcomment_content(getRcomment_content());
		paramClass.setRcomment_regdate(today.getTime());
		/*
		paramClass.setRef(getRef());
		paramClass.setRe_level(getRe_level());
		paramClass.setRe_step(getRe_step());
		*/
		setRboard_no(getRcomment_orgno());

		sqlMapper.insert("insertRcomment", paramClass);

		return SUCCESS;
	}

	public static Reader getReader() {
		return reader;
	}

	public static void setReader(Reader reader) {
		commentWriteAction.reader = reader;
	}

	public static SqlMapClient getSqlMapper() {
		return sqlMapper;
	}

	public static void setSqlMapper(SqlMapClient sqlMapper) {
		commentWriteAction.sqlMapper = sqlMapper;
	}

	public Review_CommentVO getParamClass() {
		return paramClass;
	}

	public void setParamClass(Review_CommentVO paramClass) {
		this.paramClass = paramClass;
	}

	public Review_CommentVO getResultClass() {
		return resultClass;
	}

	public void setResultClass(Review_CommentVO resultClass) {
		this.resultClass = resultClass;
	}

	public int getRcomment_no() {
		return rcomment_no;
	}

	public void setRcomment_no(int rcomment_no) {
		this.rcomment_no = rcomment_no;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
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

	public Map getSession() {
		return session;
	}

	public void setSession(Map session) {
		this.session = session;
	}

	public Calendar getToday() {
		return today;
	}

	public void setToday(Calendar today) {
		this.today = today;
	}
	public int getRboard_no() {
		return rboard_no;
	}

	public void setRboard_no(int rboard_no) {
		this.rboard_no = rboard_no;
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
	/*
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
*/	

