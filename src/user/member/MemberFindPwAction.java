package user.member;

import java.io.IOException;
import java.io.Reader;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;
import com.opensymphony.xwork2.ActionSupport;

public class MemberFindPwAction extends ActionSupport implements SessionAware {
	
	private Map session;
	private String member_id;
	private String member_jumin1;
	private String member_jumin2;
	
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	
	private MemberVO paramClass = new MemberVO();
	private MemberVO resultClass = new MemberVO();
	
	public String execute() throws Exception{
		return SUCCESS;
	}
	
	public MemberFindPwAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	
	public String find() throws Exception {
		
		paramClass.setMember_id(getMember_id());
		paramClass.setMember_jumin1(getMember_jumin1());
		paramClass.setMember_jumin2(getMember_jumin2());
		

		resultClass = (MemberVO) sqlMapper.queryForObject("findPw", paramClass);
		System.out.println(resultClass.getMember_id());
		if(resultClass != null) {
			return SUCCESS;
		}else {
			return ERROR;
		}
		
	}
	
	public Map getSession() {
		return session;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
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

	public void setSession(Map session) {
		this.session = session;
	}
}