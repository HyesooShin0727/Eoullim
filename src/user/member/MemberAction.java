package user.member;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.util.Date;
import java.util.Calendar;
import java.io.Reader;
import java.io.IOException;

public class MemberAction extends ActionSupport{
	
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	
	private MemberVO paramClass;
	private MemberVO resultClass;
	private MemberVO member;
	
	
	private int member_no;
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
	private Date member_regdate;
	private String member_depositor;
	private String member_bankname;
	private String member_accountno;
	private int isadmin;
	
	private int chkno;
	
	Calendar today = Calendar.getInstance();
	
	public MemberAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}
	
	public String execute() throws Exception{
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		if(member != null) {
			if(member.getIsadmin() == 1) {
				return LOGIN;
			}
			return SUCCESS;
		}
		return SUCCESS;
	}
	
	public String join() throws Exception {
		paramClass = new MemberVO();
		paramClass.setMember_no(getMember_no());
		paramClass.setMember_id(getMember_id());
		paramClass.setMember_kakaoid(getMember_kakaoid());
		paramClass.setMember_passwd1(getMember_passwd1());
		paramClass.setMember_passwd2(getMember_passwd2());
		paramClass.setMember_age(getMember_age());
		paramClass.setMember_name(getMember_name());
		paramClass.setMember_sex(getMember_sex());
		paramClass.setMember_jumin1(getMember_jumin1());
		paramClass.setMember_jumin2(getMember_jumin2());
		paramClass.setMember_phone(getMember_phone());
		paramClass.setMember_email1(getMember_email1());
		paramClass.setMember_email2(getMember_email2());
		paramClass.setMember_zipcode(getMember_zipcode());
		paramClass.setMember_address1(getMember_address1());
		paramClass.setMember_address2(getMember_address2());
		paramClass.setMember_regdate(today.getTime());
		paramClass.setMember_depositor(getMember_depositor());
		paramClass.setMember_bankname(getMember_bankname());
		paramClass.setMember_accountno(getMember_accountno());
		
		sqlMapper.insert("memberJoin", paramClass);
			return SUCCESS;
	}

	public String findId() throws Exception {
		paramClass = new MemberVO();
		resultClass = new MemberVO();
		
		paramClass.setMember_name(getMember_name());
		paramClass.setMember_jumin1(getMember_jumin1());
		paramClass.setMember_jumin2(getMember_jumin2());
		
		resultClass = (MemberVO) sqlMapper.queryForObject("findId", paramClass);
		
		if(resultClass == null)
			chkno = 0;
		else
			chkno = 1;
		
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

	public int getMember_no() {
		return member_no;
	}

	public void setMember_no(int member_no) {
		this.member_no = member_no;
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

	public Date getMember_regdate() {
		return member_regdate;
	}

	public void setMember_regdate(Date member_regdate) {
		this.member_regdate = member_regdate;
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

	public int getIsadmin() {
		return isadmin;
	}

	public void setIsadmin(int isadmin) {
		this.isadmin = isadmin;
	}

	public int getChkno() {
		return chkno;
	}

	public void setChkno(int chkno) {
		this.chkno = chkno;
	}

	public Calendar getToday() {
		return today;
	}

	public void setToday(Calendar today) {
		this.today = today;
	}

	public MemberVO getMember() {
		return member;
	}

	public void setMember(MemberVO member) {
		this.member = member;
	}
}