package user.member;

import java.io.IOException;
import java.io.Reader;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware; // ??

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;
import com.opensymphony.xwork2.ActionSupport;

public class MemberFindIdAction extends ActionSupport implements SessionAware {
	
	private Map session;
	private String member_name;
	private String member_jumin1;
	private String member_jumin2;
	
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	
	private MemberVO paramClass = new MemberVO();
	private MemberVO resultClass = new MemberVO();
	
	public MemberFindIdAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();	
	}
	
	public String execute() throws Exception{
		return SUCCESS;
	}
	
	public String find() throws Exception {
		
		paramClass.setMember_name(getMember_name());
		paramClass.setMember_jumin1(getMember_jumin1());
		paramClass.setMember_jumin2(getMember_jumin2());
		
		resultClass = (MemberVO)sqlMapper.queryForObject("findId", paramClass);
		
		if(resultClass != null) {
			return SUCCESS;
		} else {
			return ERROR;
		}
	}

	public Map getSession() {
		return session;
	}

	public void setSession(Map session) {
		this.session = session;
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

	public String getMember_name() {
		return member_name;
	}

	public void setMember_name(String member_name) {
		this.member_name = member_name;
	}
}	