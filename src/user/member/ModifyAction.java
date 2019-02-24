package user.member;

import java.io.IOException;
import java.io.Reader;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;


public class ModifyAction extends ActionSupport implements SessionAware {
	public static SqlMapClient sqlMapper;
	public static Reader reader;
	
	private MemberVO paramClass = new MemberVO();
	private MemberVO resultClass = new MemberVO();
	
	private Map session;
	
	private String member_id;
	private String member_kakaoid;
	private String member_passwd1;
	private String member_passwd2;
	private int member_age;
	private String member_name;
	private String member_sex;
	private String member_jumin1;
	private String member_jumin2;
	private String member_phone;
	private String member_email1;
	private String member_email2;
	private String member_zipcode;
	private String member_address1;
	private String member_address2;
	private String member_depositor;
	private String member_bankname;
	private String member_accountno;
	
	private String chk_passwd;
	
	public ModifyAction() throws IOException{
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	public String execute() throws Exception{
		resultClass = (MemberVO) sqlMapper.queryForObject("selectOneMember", session.get("member_no"));
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		
		return SUCCESS;
	}
	
	public String passUpdate() throws Exception{
		resultClass = (MemberVO) sqlMapper.queryForObject("selectOneMember", session.get("member_no"));
		if(resultClass.getMember_passwd1().equals(getChk_passwd())) {
			paramClass.setMember_no((int)session.get("member_no"));
			paramClass.setMember_passwd1(getMember_passwd1());
			paramClass.setMember_passwd2(getChk_passwd());
			
			sqlMapper.update("passUpdate",paramClass);
			
			return SUCCESS;
		}else {
			return ERROR;
		}
	}
	
	public String informUpdate() throws Exception{
		paramClass.setMember_no((int)session.get("member_no"));
		paramClass.setMember_phone(getMember_phone());
		paramClass.setMember_email1(getMember_email1());
		paramClass.setMember_email2(getMember_email2());
		paramClass.setMember_zipcode(getMember_zipcode());
		paramClass.setMember_address1(getMember_address1());
		paramClass.setMember_address2(getMember_address2());
		
		sqlMapper.update("informUpdate",paramClass);
		
		return SUCCESS;
	}

	public MemberVO getParamClass() {
		return paramClass;
	}

	public void setParamClass(MemberVO paramClass) {
		this.paramClass = paramClass;
	}

	public MemberVO getResultClass() {
		return resultClass;
	}

	public void setResultClass(MemberVO resultClass) {
		this.resultClass = resultClass;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public String getMember_kakaoid() {
		return member_kakaoid;
	}

	public void setMember_kakaoid(String member_kakaoid) {
		this.member_kakaoid = member_kakaoid;
	}

	public String getMember_passwd1() {
		return member_passwd1;
	}

	public void setMember_passwd1(String member_passwd1) {
		this.member_passwd1 = member_passwd1;
	}

	public String getMember_passwd2() {
		return member_passwd2;
	}

	public void setMember_passwd2(String member_passwd2) {
		this.member_passwd2 = member_passwd2;
	}

	public int getMember_age() {
		return member_age;
	}

	public void setMember_age(int member_age) {
		this.member_age = member_age;
	}

	public String getMember_name() {
		return member_name;
	}

	public void setMember_name(String member_name) {
		this.member_name = member_name;
	}

	public String getMember_sex() {
		return member_sex;
	}

	public void setMember_sex(String member_sex) {
		this.member_sex = member_sex;
	}

	public String getMember_jumin1() {
		return member_jumin1;
	}

	public void setMember_jumin1(String member_jumin1) {
		this.member_jumin1 = member_jumin1;
	}

	public String getMember_jumin2() {
		return member_jumin2;
	}

	public void setMember_jumin2(String member_jumin2) {
		this.member_jumin2 = member_jumin2;
	}

	public String getMember_phone() {
		return member_phone;
	}

	public void setMember_phone(String member_phone) {
		this.member_phone = member_phone;
	}

	public String getMember_email1() {
		return member_email1;
	}

	public void setMember_email1(String member_email1) {
		this.member_email1 = member_email1;
	}

	public String getMember_email2() {
		return member_email2;
	}

	public void setMember_email2(String member_email2) {
		this.member_email2 = member_email2;
	}

	public String getMember_zipcode() {
		return member_zipcode;
	}

	public void setMember_zipcode(String member_zipcode) {
		this.member_zipcode = member_zipcode;
	}

	public String getMember_address1() {
		return member_address1;
	}

	public void setMember_address1(String member_address1) {
		this.member_address1 = member_address1;
	}

	public String getMember_address2() {
		return member_address2;
	}

	public void setMember_address2(String member_address2) {
		this.member_address2 = member_address2;
	}

	public String getMember_depositor() {
		return member_depositor;
	}

	public void setMember_depositor(String member_depositor) {
		this.member_depositor = member_depositor;
	}

	public String getMember_bankname() {
		return member_bankname;
	}

	public void setMember_bankname(String member_bankname) {
		this.member_bankname = member_bankname;
	}

	public String getMember_accountno() {
		return member_accountno;
	}

	public void setMember_accountno(String member_accountno) {
		this.member_accountno = member_accountno;
	}

	public Map getSession() {
		return session;
	}

	public void setSession(Map session) {
		this.session = session;
	}

	public String getChk_passwd() {
		return chk_passwd;
	}

	public void setChk_passwd(String chk_passwd) {
		this.chk_passwd = chk_passwd;
	}
	
}
	
	
