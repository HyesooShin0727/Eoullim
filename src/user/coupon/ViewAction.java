package user.coupon;

import com.opensymphony.xwork2.ActionSupport;

import admin.coupon.CouponVO;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.io.Reader;
import java.io.IOException;

public class ViewAction extends ActionSupport {
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	
	private CouponVO paramClass = new CouponVO();
	private CouponVO resultClass = new CouponVO();
	
	private int currentPage;
	
	private int coupon_no;
	
	public ViewAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}
	
	public String execute() throws Exception{
		resultClass = (CouponVO) sqlMapper.queryForObject("selectOneCoupon",getCoupon_no());
		
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

	public int getCoupon_no() {
		return coupon_no;
	}

	public void setCoupon_no(int coupon_no) {
		this.coupon_no = coupon_no;
	}
}
