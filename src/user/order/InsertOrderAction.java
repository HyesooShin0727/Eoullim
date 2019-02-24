package user.order;

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
import user.coupon.CouponBoxVO;
import admin.goods.GoodsVO;
import user.member.MemberVO;

public class InsertOrderAction extends ActionSupport implements SessionAware {

	public static Reader reader;
	public static SqlMapClient sqlMapper;
	public Map session;

	private OrderVO orderClass = new OrderVO();
	private MemberVO memberClass = new MemberVO();
	private GoodsVO goodsClass = new GoodsVO();
	private CouponBoxVO paramClass = new CouponBoxVO();
	private CouponBoxVO resultClass = new CouponBoxVO();;

	private CartVO cartClass = new CartVO();
	private List<Integer> cart_no_List = new ArrayList<Integer>();

	private List<CartVO> cart_List = new ArrayList<CartVO>();
	private List<OrderVO> orderList = new ArrayList<OrderVO>();
	private String member_id;
	private int coupon_no = 0;

	private String order_name;
	private String order_phone;
	private String order_email1;
	private String order_email2;
	private String rec_name;
	private String rec_zipcode;
	private String rec_address1;
	private String rec_address2;
	private String rec_phone;
	private String order_payment;
	private Calendar regdate = Calendar.getInstance();
	private String order_state;
	private int order_total;
	private String order_goods_no; // We have to receive it to String and have to split this from cartList.
	private int order_goods_amount; // Total price of one order
	private String color;

	private int payTotal;

	private int count = 0;
	private String cart_msg = "";
	private String goods_msg = "";

	public InsertOrderAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	public String execute() throws Exception {

		if (cart_msg.length() > 0) {
			String[] str = cart_msg.split(",");
			for (int i = 0; i < str.length; i++) {
				cart_no_List.add(Integer.parseInt(str[i]));
			}
		}

		member_id = (String) ActionContext.getContext().getSession().get("member_id");
		memberClass = (MemberVO) sqlMapper.queryForObject("checkid", getMember_id());
		if(getCoupon_no() != 0) {
			paramClass.setMember_no(memberClass.getMember_no());
			paramClass.setCoupon_no(getCoupon_no());
			
			resultClass = (CouponBoxVO) sqlMapper.queryForObject("selectOnecBox",paramClass);
			
			sqlMapper.update("usedCoupon",resultClass);
		}

		if (cart_no_List.get(0) != 0) {

			for (int i = 0; i < cart_no_List.size(); i++) {
				cartClass = (CartVO) sqlMapper.queryForObject("cart-select", cart_no_List.get(i));
				count += cartClass.getCart_goods_cnt(); // 총 몇개사는지 확인하려고
				cart_List.add(cartClass);
			} // for end
		} // if end
		else {
			count = 1;
		}
		if (getGoods_msg().length() > 1) {
			String temp[] = getGoods_msg().split(",");
			int temp_no = Integer.parseInt(temp[0]);

			goodsClass = (GoodsVO) sqlMapper.queryForObject("goodsSelectOne", temp_no);
		}

		orderClass.setOrder_member_id(member_id);
		orderClass.setOrder_name(getOrder_name());
		orderClass.setOrder_phone(getOrder_phone());
		orderClass.setOrder_email1(getOrder_email1());
		orderClass.setOrder_email2(getOrder_email2());
		orderClass.setRec_name(getRec_name());
		orderClass.setRec_zipcode(getRec_zipcode());
		orderClass.setRec_address1(getRec_address1());
		orderClass.setRec_address2(getRec_address2());

		orderClass.setRec_phone(getRec_phone());
		orderClass.setOrder_payment("Card");
		orderClass.setOrder_regdate(regdate.getTime());
		orderClass.setOrder_state("1");
		orderClass.setOrder_total(getPayTotal());
		orderClass.setOrder_goods_no(getGoods_msg()); // put like cart_no, cart_no, // cart_no is String here

		orderClass.setOrder_goods_name(goodsClass.getGoods_name());

		orderClass.setOrder_goods_amount(count);
		orderClass.setOrder_goods_color(getColor());

		sqlMapper.update("insertOrders", orderClass);
		
		for (int i = 0; i < cart_no_List.size(); i++) {
			sqlMapper.delete("delete-cart", cart_no_List.get(i));
		}

		return SUCCESS;
	}

	public Map getSession() {
		return session;
	}

	public void setSession(Map session) {
		this.session = session;
	}

	public OrderVO getOrderClass() {
		return orderClass;
	}

	public void setOrderClass(OrderVO orderClass) {
		this.orderClass = orderClass;
	}

	public MemberVO getMemberClass() {
		return memberClass;
	}

	public void setMemberClass(MemberVO memberClass) {
		this.memberClass = memberClass;
	}

	public List<CartVO> getCart_List() {
		return cart_List;
	}

	public void setCart_List(List<CartVO> cart_List) {
		this.cart_List = cart_List;
	}

	public List<OrderVO> getOrderList() {
		return orderList;
	}

	public void setOrderList(List<OrderVO> orderList) {
		this.orderList = orderList;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public String getOrder_name() {
		return order_name;
	}

	public void setOrder_name(String order_name) {
		this.order_name = order_name;
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

	public Calendar getRegdate() {
		return regdate;
	}

	public void setRegdate(Calendar regdate) {
		this.regdate = regdate;
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

	public int getPayTotal() {
		return payTotal;
	}

	public void setPayTotal(int payTotal) {
		this.payTotal = payTotal;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public String getCart_msg() {
		return cart_msg;
	}

	public void setCart_msg(String cart_msg) {
		this.cart_msg = cart_msg;
	}

	public CartVO getCartClass() {
		return cartClass;
	}

	public void setCartClass(CartVO cartClass) {
		this.cartClass = cartClass;
	}

	public List<Integer> getCart_no_List() {
		return cart_no_List;
	}

	public void setCart_no_List(List<Integer> cart_no_List) {
		this.cart_no_List = cart_no_List;
	}

	public GoodsVO getGoodsClass() {
		return goodsClass;
	}

	public void setGoodsClass(GoodsVO goodsClass) {
		this.goodsClass = goodsClass;
	}

	public String getGoods_msg() {
		return goods_msg;
	}

	public void setGoods_msg(String goods_msg) {
		this.goods_msg = goods_msg;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public int getCoupon_no() {
		return coupon_no;
	}

	public void setCoupon_no(int coupon_no) {
		this.coupon_no = coupon_no;
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
}
