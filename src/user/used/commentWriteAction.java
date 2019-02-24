package user.used;

import java.io.IOException;
import java.io.Reader;
import java.util.Calendar;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;
import com.opensymphony.xwork2.ActionSupport;

import user.member.MemberVO;

import com.opensymphony.xwork2.ActionContext;

/*import user.member.login.LoginAction;*/

public class commentWriteAction extends ActionSupport implements SessionAware{
	
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	
	private Used_CommentVO paramClass;
	private Used_CommentVO resultClass;
	private MemberVO member;
	
	private int uboard_no;
	private int ucomment_no;
	private int ucomment_orgno;
	
	private String ucomment_id;
	private String ucomment_passwd;
	private String ucomment_content;
	private String member_id;
	
	private int currentPage;
	
	private Map session;
	/*
	private int ref;
	private int re_step;
	private int re_level;
	*/
	
	boolean reply = false;
		
	Calendar today = Calendar.getInstance();
	
	public commentWriteAction() throws IOException{
		// sqlMapConfig.xml 파일의 설정내용을 가져온다.
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		// sqlMapConfig.xml의 내용을 적용한 sqlMapper 객체 생성
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}
	
	public String form() throws Exception{
		return SUCCESS;
	}
	
	public String replyComment() throws Exception
	{
		reply = true;
		resultClass = new Used_CommentVO();
		
		resultClass = (Used_CommentVO) sqlMapper.queryForObject("selectOneUcomment", getUcomment_no());
		
		resultClass.setUcomment_id("[댓글]" + resultClass.getUcomment_id());
		resultClass.setUcomment_passwd("");
		resultClass.setUcomment_content("");
		
		return SUCCESS;
	}
	
	public String execute() throws Exception{
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		//session.get("member_id");
	
		paramClass = new Used_CommentVO(); // 파라미터를 저장할 객체 생성
		resultClass = new Used_CommentVO(); // 쿼리 결과 값을 저장할 객체 생성
	
			
		/*댓댓글을 구현*/
		/*
		if(ref == 0)
		{
			paramClass.setRe_step(0);
			paramClass.setRe_level(0);
		}
		else
		{
			paramClass.setRef(getRef());
			paramClass.setRe_step(getRe_step());
			sqlMapper.update("updateReplyStepUcomment", paramClass);
		
			paramClass.setRe_step(getRe_step() + 1);
			paramClass.setRe_level(getRe_level() + 1);
			paramClass.setRef(getRef());
		}
			*/				
			// 댓글 번호는 시퀀스로 가져온다
			// 세션을 구현할 경우
			// session Map객체에 member_id라는 키로 저장한 값을 
			// String 타입으로 변환하고 Ucomment_id변수에 넣어준다 
			// paramClass.setUcomment_id((String)session.get("member_id"));
			paramClass.setUcomment_orgno(getUboard_no());
			System.out.println(ucomment_orgno);
			paramClass.setUcomment_id(member.getMember_id());
			paramClass.setUcomment_passwd(member.getMember_passwd1());
			paramClass.setUcomment_content(getUcomment_content());
			paramClass.setUcomment_regdate(today.getTime());
			
			// 대댓글을 구현하지 않을경우 아래 주석을 풀고 if문 이하 내용을 주석처리 //
			sqlMapper.insert("insertUcomment", paramClass); //
			
			// 댓댓글을 구현할 경우 쿼리문을 조건문으로 처리 //
			/*
			if(ref == 0)
				sqlMapper.insert("insertUcomment", paramClass);
			else
				sqlMapper.insert("insertReplyUcomment", paramClass);
			*/
			return SUCCESS;
	}
	public int getUboard_no() {
		return uboard_no;
	}

	public void setUboard_no(int uboard_no) {
		this.uboard_no = uboard_no;
	}

	public Used_CommentVO getParamClass() {
		return paramClass;
	}

	public void setParamClass(Used_CommentVO paramClass) {
		this.paramClass = paramClass;
	}

	public Used_CommentVO getResultClass() {
		return resultClass;
	}

	public void setResultClass(Used_CommentVO resultClass) {
		this.resultClass = resultClass;
	}

	public int getUcomment_no() {
		return ucomment_no;
	}

	public void setUcomment_no(int ucomment_no) {
		this.ucomment_no = ucomment_no;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public String getUcomment_id() {
		return ucomment_id;
	}

	public void setUcomment_id(String ucomment_id) {
		this.ucomment_id = ucomment_id;
	}

	public String getUcomment_passwd() {
		return ucomment_passwd;
	}

	public void setUcomment_passwd(String ucomment_passwd) {
		this.ucomment_passwd = ucomment_passwd;
	}

	public String getUcomment_content() {
		return ucomment_content;
	}

	public void setUcomment_content(String ucomment_content) {
		this.ucomment_content = ucomment_content;
	}

	public int getUcomment_orgno() {
		return ucomment_orgno;
	}

	public void setUcomment_orgno(int ucomment_orgno) {
		this.ucomment_orgno = ucomment_orgno;
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
	
	public boolean isReply() {
		return reply;
	}

	public void setReply(boolean reply) {
		this.reply = reply;
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
