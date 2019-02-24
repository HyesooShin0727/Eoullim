package user.mypage;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import admin.coupon.CouponVO;
import user.member.MemberVO;
import user.order.OrderVO;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.util.*;
import java.io.Reader;
import java.io.IOException;

public class MyPageAction extends ActionSupport{
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	
	private List<CouponVO> Clist = new ArrayList<CouponVO>();
	private List<OrderVO> Olist1 = new ArrayList<OrderVO>();
	private List<OrderVO> Olist2 = new ArrayList<OrderVO>();
	private List<OrderVO> Olist3 = new ArrayList<OrderVO>();
	private List<OrderVO> Olist4 = new ArrayList<OrderVO>();
	private List<OrderVO> Olist5 = new ArrayList<OrderVO>();
	private MemberVO member = new MemberVO();
	
	private Map<Integer,String> map = new HashMap();

	private int CtotalCount;
	private int OtotalCount1;
	private int OtotalCount2;
	private int OtotalCount3;
	private int OtotalCount4;
	private int OtotalCount5;
	
	private String member_id;
	private int member_no;
	
	public MyPageAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}
	
	public String execute() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		
		Clist = sqlMapper.queryForList("selectAllcBox",member.getMember_no());
		
		Olist1 = sqlMapper.queryForList("MyorderstateOne",member_id);
		Olist2 = sqlMapper.queryForList("MyorderstateTwo",member_id);
		Olist3 = sqlMapper.queryForList("MyorderstateThree",member_id);
		Olist4 = sqlMapper.queryForList("MyorderstateFour",member_id);
		Olist5 = sqlMapper.queryForList("MyorderstateFive",member_id);
		
		CtotalCount = Clist.size();
		
		OtotalCount1 = Olist1.size();
		OtotalCount2 = Olist2.size();
		OtotalCount3 = Olist3.size();
		OtotalCount4 = Olist4.size();
		OtotalCount5 = Olist5.size();
		
		return SUCCESS;
	}

	public List<CouponVO> getClist() {
		return Clist;
	}

	public void setClist(List<CouponVO> clist) {
		Clist = clist;
	}

	public MemberVO getMember() {
		return member;
	}

	public void setMember(MemberVO member) {
		this.member = member;
	}

	public int getCtotalCount() {
		return CtotalCount;
	}

	public void setCtotalCount(int ctotalCount) {
		CtotalCount = ctotalCount;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public int getMember_no() {
		return member_no;
	}

	public void setMember_no(int member_no) {
		this.member_no = member_no;
	}

	public List<OrderVO> getOlist1() {
		return Olist1;
	}

	public void setOlist1(List<OrderVO> olist1) {
		Olist1 = olist1;
	}

	public List<OrderVO> getOlist2() {
		return Olist2;
	}

	public void setOlist2(List<OrderVO> olist2) {
		Olist2 = olist2;
	}

	public List<OrderVO> getOlist3() {
		return Olist3;
	}

	public void setOlist3(List<OrderVO> olist3) {
		Olist3 = olist3;
	}

	public List<OrderVO> getOlist4() {
		return Olist4;
	}

	public void setOlist4(List<OrderVO> olist4) {
		Olist4 = olist4;
	}

	public List<OrderVO> getOlist5() {
		return Olist5;
	}

	public void setOlist5(List<OrderVO> olist5) {
		Olist5 = olist5;
	}

	public int getOtotalCount1() {
		return OtotalCount1;
	}

	public void setOtotalCount1(int ototalCount1) {
		OtotalCount1 = ototalCount1;
	}

	public int getOtotalCount2() {
		return OtotalCount2;
	}

	public void setOtotalCount2(int ototalCount2) {
		OtotalCount2 = ototalCount2;
	}

	public int getOtotalCount3() {
		return OtotalCount3;
	}

	public void setOtotalCount3(int ototalCount3) {
		OtotalCount3 = ototalCount3;
	}

	public int getOtotalCount4() {
		return OtotalCount4;
	}

	public void setOtotalCount4(int ototalCount4) {
		OtotalCount4 = ototalCount4;
	}

	public int getOtotalCount5() {
		return OtotalCount5;
	}

	public void setOtotalCount5(int ototalCount5) {
		OtotalCount5 = ototalCount5;
	}
}
