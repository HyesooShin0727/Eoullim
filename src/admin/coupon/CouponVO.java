package admin.coupon;

import java.util.Date;

public class CouponVO {
	
	private int coupon_no;
	private String coupon_name;
	private int coupon_price;
	private int coupon_type;
	private int coupon_discash;
	private int coupon_disrate;
	private String coupon_startdate;
	private String coupon_enddate;
	
	public int getCoupon_no() {
		return coupon_no;
	}
	public void setCoupon_no(int coupon_no) {
		this.coupon_no = coupon_no;
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
	public int getCoupon_type() {
		return coupon_type;
	}
	public void setCoupon_type(int coupon_type) {
		this.coupon_type = coupon_type;
	}
	public String getCoupon_startdate() {
		return coupon_startdate;
	}
	public void setCoupon_startdate(String coupon_startdate) {
		this.coupon_startdate = coupon_startdate;
	}
	public String getCoupon_enddate() {
		return coupon_enddate;
	}
	public void setCoupon_enddate(String coupon_enddate) {
		this.coupon_enddate = coupon_enddate;
	}
	
}
