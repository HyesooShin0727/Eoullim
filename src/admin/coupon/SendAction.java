package admin.coupon;

import com.opensymphony.xwork2.ActionSupport;

import user.coupon.CouponBoxVO;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.io.Reader;
import java.io.IOException;

public class SendAction extends ActionSupport{
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	
	private CouponBoxVO paramClass;
	private CouponBoxVO resultClass;
	
	private int currentPage;
	
	private int coupon_no;
	private int member_no;
	private int coupon_chk;
	
	public SendAction() throws IOException{
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}
	
	public String form() throws Exception {
		return SUCCESS;
	}
	
	public String execute() throws Exception{
		paramClass = new CouponBoxVO();
		resultClass = new CouponBoxVO();
		
		paramClass.setCoupon_no(getCoupon_no());
		paramClass.setMember_no(getMember_no());
		paramClass.setCoupon_chk(getCoupon_chk());
		
		System.out.println("ÄíÆù : " + getCoupon_no() + getMember_no() + getCoupon_chk());
		
		sqlMapper.insert("insertCouponBox",paramClass);
		
		return SUCCESS;
	}

	public CouponBoxVO getParamClass() {
		return paramClass;
	}

	public void setParamClass(CouponBoxVO paramClass) {
		this.paramClass = paramClass;
	}

	public CouponBoxVO getResultClass() {
		return resultClass;
	}

	public void setResultClass(CouponBoxVO resultClass) {
		this.resultClass = resultClass;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getCoupon_no() {
		return coupon_no;
	}

	public void setCoupon_no(int coupon_no) {
		this.coupon_no = coupon_no;
	}

	public int getMember_no() {
		return member_no;
	}

	public void setMember_no(int member_no) {
		this.member_no = member_no;
	}

	public int getCoupon_chk() {
		return coupon_chk;
	}

	public void setCoupon_chk(int coupon_chk) {
		this.coupon_chk = coupon_chk;
	}

}
