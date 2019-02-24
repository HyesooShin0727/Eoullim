package user.order;

import java.util.Date;

public class OrderVO {

	private int order_no;
	private String order_member_id;
	private String order_name;	
	private String order_phone;
	private String order_email1;
	private String order_email2;
	private String order_goods_name;
	
	private String rec_name;
	private String rec_zipcode;
	private String rec_address1;
	private String rec_address2;
	private String rec_phone;
	
	private String order_payment;
	private Date order_regdate;
	private String order_state;
	private int order_total;
	private String order_goods_no;
	private int order_goods_amount;
	private String order_goods_color;

	public int getOrder_no() {
		return order_no;
	}

	public void setOrder_no(int order_no) {
		this.order_no = order_no;
	}

	public String getOrder_member_id() {
		return order_member_id;
	}

	public void setOrder_member_id(String order_member_id) {
		this.order_member_id = order_member_id;
	}

	public String getOrder_name() {
		return order_name;
	}

	public void setOrder_name(String order_name) {
		this.order_name = order_name;
	}

	public String getRec_address1() {
		return rec_address1;
	}

	public void setRec_address1(String rec_address1) {
		this.rec_address1 = rec_address1;
	}

	public String getRec_address2() {
		return rec_address2;
	}

	public void setRec_address2(String rec_address2) {
		this.rec_address2 = rec_address2;
	}

	public String getOrder_phone() {
		return order_phone;
	}

	public void setOrder_phone(String order_phone) {
		this.order_phone = order_phone;
	}

	public String getOrder_email1() {
		return order_email1;
	}

	public void setOrder_email1(String order_email1) {
		this.order_email1 = order_email1;
	}

	public String getOrder_email2() {
		return order_email2;
	}

	public void setOrder_email2(String order_email2) {
		this.order_email2 = order_email2;
	}

	public String getRec_name() {
		return rec_name;
	}

	public void setRec_name(String rec_name) {
		this.rec_name = rec_name;
	}

	public String getRec_zipcode() {
		return rec_zipcode;
	}

	public void setRec_zipcode(String rec_zipcode) {
		this.rec_zipcode = rec_zipcode;
	}

	public String getRec_phone() {
		return rec_phone;
	}

	public void setRec_phone(String rec_phone) {
		this.rec_phone = rec_phone;
	}

	public String getOrder_payment() {
		return order_payment;
	}

	public void setOrder_payment(String order_payment) {
		this.order_payment = order_payment;
	}

	public Date getOrder_regdate() {
		return order_regdate;
	}

	public void setOrder_regdate(Date order_regdate) {
		this.order_regdate = order_regdate;
	}

	public String getOrder_state() {
		return order_state;
	}

	public void setOrder_state(String order_state) {
		this.order_state = order_state;
	}

	public int getOrder_total() {
		return order_total;
	}

	public void setOrder_total(int order_total) {
		this.order_total = order_total;
	}

	public String getOrder_goods_no() {
		return order_goods_no;
	}

	public void setOrder_goods_no(String order_goods_no) {
		this.order_goods_no = order_goods_no;
	}

	public int getOrder_goods_amount() {
		return order_goods_amount;
	}

	public void setOrder_goods_amount(int order_goods_amount) {
		this.order_goods_amount = order_goods_amount;
	}

	public String getOrder_goods_name() {
		return order_goods_name;
	}

	public void setOrder_goods_name(String order_goods_name) {
		this.order_goods_name = order_goods_name;
	}

	public String getOrder_goods_color() {
		return order_goods_color;
	}

	public void setOrder_goods_color(String order_goods_color) {
		this.order_goods_color = order_goods_color;
	}
	
}
