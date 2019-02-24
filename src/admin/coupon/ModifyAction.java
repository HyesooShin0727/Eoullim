package admin.coupon;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import user.member.MemberVO;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.io.Reader;
import java.io.IOException;

public class ModifyAction extends ActionSupport{
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	
	private CouponVO paramClass;
	private CouponVO resultClass;
	private MemberVO member;
	
	private String member_id;
	
	private int currentPage;
	
	private int coupon_no;
	private String coupon_name;
	private int coupon_price;
	private int coupon_type;
	private int coupon_discash;
	private int coupon_disrate;
	private String coupon_enddate;
	
	public ModifyAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml"); 
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}
	
	public String execute() throws Exception{
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		paramClass = new CouponVO();
		resultClass= new CouponVO();
		
		paramClass.setCoupon_no(getCoupon_no());
		paramClass.setCoupon_name(getCoupon_name());
		paramClass.setCoupon_price(getCoupon_price());
		paramClass.setCoupon_type(getCoupon_type());
		paramClass.setCoupon_discash(getCoupon_discash());
		paramClass.setCoupon_disrate(getCoupon_disrate());
		paramClass.setCoupon_enddate(getCoupon_enddate());
		
		sqlMapper.update("updateCoupon",paramClass);
		
		resultClass = (CouponVO) sqlMapper.queryForObject("selectOneCoupon",coupon_no);
		
		return SUCCESS;
	}

	public CouponVO getParamClass() {
		return paramClass;
	}

	public void setParamClass(CouponVO paramClass) {
		this.paramClass = paramClass;
	}

	public CouponVO getResultClass() {
		return resultClass;
	}

	public void setResultClass(CouponVO resultClass) {
		this.resultClass = resultClass;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public String getCoupon_name() {
		return coupon_name;
	}

	public void setCoupon_name(String coupon_name) {
		this.coupon_name = coupon_name;
	}

	public int getCoupon_price() {
		return coupon_price;
	}

	public void setCoupon_price(int coupon_price) {
		this.coupon_price = coupon_price;
	}

	public int getCoupon_type() {
		return coupon_type;
	}

	public void setCoupon_type(int coupon_type) {
		this.coupon_type = coupon_type;
	}

	public int getCoupon_discash() {
		return coupon_discash;
	}

	public void setCoupon_discash(int coupon_discash) {
		this.coupon_discash = coupon_discash;
	}

	public int getCoupon_disrate() {
		return coupon_disrate;
	}

	public void setCoupon_disrate(int coupon_disrate) {
		this.coupon_disrate = coupon_disrate;
	}

	public String getCoupon_enddate() {
		return coupon_enddate;
	}

	public void setCoupon_enddate(String coupon_enddate) {
		this.coupon_enddate = coupon_enddate;
	}

	public int getCoupon_no() {
		return coupon_no;
	}

	public void setCoupon_no(int coupon_no) {
		this.coupon_no = coupon_no;
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
