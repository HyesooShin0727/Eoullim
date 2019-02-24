package admin.order;

import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.Calendar;
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
import user.order.OrderVO;

public class modifystateAction extends ActionSupport{

	public static Reader reader;
	public static SqlMapClient sqlMapper;

	private OrderVO paramClass = new OrderVO();
	private OrderVO resultClass = new OrderVO();
	private MemberVO member;

	private int order_no;
	private String selectstate;
	private String member_id;


	public modifystateAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	public String execute() throws Exception {
		member_id = (String) ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid", getMember_id());
		System.out.println("실행");
		System.out.println("오더넘 : " + getOrder_no());
		paramClass.setOrder_no(getOrder_no());
		paramClass.setOrder_state(getSelectstate());
		
		sqlMapper.update("updateorderstate",paramClass);
		
		return SUCCESS;
	}

	public MemberVO getMember() {
		return member;
	}

	public void setMember(MemberVO member) {
		this.member = member;
	}

	public int getOrder_no() {
		return order_no;
	}

	public void setOrder_no(int order_no) {
		this.order_no = order_no;
	}

	public String getSelectstate() {
		return selectstate;
	}

	public void setSelectstate(String selectstate) {
		this.selectstate = selectstate;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public OrderVO getParamClass() {
		return paramClass;
	}

	public void setParamClass(OrderVO paramClass) {
		this.paramClass = paramClass;
	}

	public OrderVO getResultClass() {
		return resultClass;
	}

	public void setResultClass(OrderVO resultClass) {
		this.resultClass = resultClass;
	}
}
