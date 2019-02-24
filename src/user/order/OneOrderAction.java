package user.order;

import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import user.cart.CartVO;
import admin.goods.GoodsVO;
import user.member.MemberVO;

// 한개 상품 주문할 때
public class OneOrderAction extends ActionSupport implements SessionAware {
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	public Map session;
	
	private String member_id;
	private MemberVO memberClass = new MemberVO();
	
	
	public OneOrderAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}
	
	public String execute() throws Exception {
		member_id = (String) ActionContext.getContext().getSession().get("member_id");
		memberClass = (MemberVO) sqlMapper.queryForObject("checkid", getMember_id());
		
		
		return SUCCESS;
	}
	
	public Map getSession() {
		return session;
	}

	public void setSession(Map session) {
		this.session = session;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public MemberVO getMemberClass() {
		return memberClass;
	}

	public void setMemberClass(MemberVO memberClass) {
		this.memberClass = memberClass;
	}
	
}
