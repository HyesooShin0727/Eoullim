package user.member;

import com.opensymphony.xwork2.ActionSupport;
import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.io.IOException;
import java.io.Reader;

import user.member.MemberVO;

public class CheckIdAction extends ActionSupport {
	
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	
	private MemberVO resultClass;
	
	private String member_id;
	private int chkno;
	
	public CheckIdAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}
	
	public String execute() throws Exception{
		System.out.println("¾ÆÀÌµð " + member_id);
		
		resultClass = new MemberVO();
		
		if(getMember_id() != null) {
			resultClass = (MemberVO) sqlMapper.queryForObject("checkid", member_id);	
		}
		
		if(resultClass == null) {
			chkno = 0;
		}
		else {
			chkno = 1;
		}
		
		System.out.println(getMember_id());
		
		return SUCCESS;
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

	public int getChkno() {
		return chkno;
	}

	public void setChkno(int chkno) {
		this.chkno = chkno;
	}
}