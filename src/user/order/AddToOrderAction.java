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
import user.coupon.CouponBoxVO;
import admin.coupon.CouponVO;
import admin.goods.GoodsVO;
import user.member.MemberVO;

public class AddToOrderAction extends ActionSupport implements SessionAware {

	public static Reader reader;
	public static SqlMapClient sqlMapper;
	public Map session;

	private CartVO cartParamClass = new CartVO();
	private CartVO cartResultClass = new CartVO();
	private MemberVO memberClass = new MemberVO();
	private GoodsVO goodsClass = new GoodsVO();
	private CouponVO coupon = new CouponVO();
	private CouponBoxVO couponClass = new CouponBoxVO();

	private List<CartVO> cart_List = new ArrayList<CartVO>();

	private int sgoods_cnt;
	private String member_id;
	private int goods_no;
	private int cart_no;
	private int coupon_no = 0;

	private int payTotal = 0;

	private String msg = ""; // 장바구니에서 주문으로 넘기는 카트넘버 리스트
	private String cart_msg = "";
	private String goods_msg = "";

	private List<Integer> cart_no_list = new ArrayList<Integer>();

	private int one_goods_no = 0; // jsp에서 장바구니에서 바로주문 눌렀을 때 카트넘버 받아올거임

	private int cnt = -1;
	private String color = "";
	private int colorIndex = 0;

	public AddToOrderAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	public String execute() throws Exception {
		member_id = (String) ActionContext.getContext().getSession().get("member_id");
		memberClass = (MemberVO) sqlMapper.queryForObject("checkid", getMember_id());
		
		if(getCoupon_no() != 0) {
			couponClass.setCoupon_no(getCoupon_no());
			couponClass.setMember_no(memberClass.getMember_no());
			
			coupon = (CouponVO) sqlMapper.queryForObject("selectCoupon",couponClass);
		}
		// 유저리스트에서 구매하기 눌렀을 때
		if (getOne_goods_no() != 0) {
			goodsClass = (GoodsVO) sqlMapper.queryForObject("goodsSelectOne", getOne_goods_no());
			
			String colorStr[] = goodsClass.getGoods_color().split("/");
			System.out.println("사이즈 테스트 : " + colorStr.length);
			System.out.println("칼라테스트 : " + color);
			
			cartParamClass.setCart_no(0); // 어차피 디비에 안넣을거니까 ㅋ
			cartParamClass.setCart_member_id(member_id);
			cartParamClass.setCart_goods_total(goodsClass.getGoods_price());
			cartParamClass.setCart_goods_price(goodsClass.getGoods_price());
			cartParamClass.setCart_goods_no(getOne_goods_no());
			cartParamClass.setCart_goods_name(goodsClass.getGoods_name());
			cartParamClass.setCart_goods_img(goodsClass.getGoods_savname());

			if (getColor().length() < 1)
				cartParamClass.setCart_goods_color(getColor());
			cartParamClass.setCart_goods_color(goodsClass.getGoods_color());
			
			if (getCnt() < 0)
				cartParamClass.setCart_goods_cnt(1);
			cartParamClass.setCart_goods_cnt(getCnt());

			cart_List.add(cartParamClass);
			cart_msg += Integer.toString(0) + ","; // 카트넘버 0
			goods_msg += Integer.toString(getOne_goods_no());
			
			if(coupon != null) {
				if(coupon.getCoupon_type() == 1) {
					payTotal = payTotal - coupon.getCoupon_discash();
				}
				else if(coupon.getCoupon_type() == 2){
					payTotal = payTotal * coupon.getCoupon_disrate() / 100;
				}
			}else {
				payTotal = goodsClass.getGoods_price();
			}

			return SUCCESS;
		}

		if (msg.length() > 0) {
			String strNo[] = msg.split(","); // ,를 기준으로 쪼개서 ArrayList에 넣어준다.
			for (int i = 0; i < strNo.length; i++) {
				cart_no_list.add(Integer.parseInt(strNo[i])); // Integer로 캐스팅해서 넣어줌.
			}

			for (int i = 0; i < cart_no_list.size(); i++) {
				cartParamClass.setCart_no(cart_no_list.get(i));
				cart_msg += Integer.toString(cart_no_list.get(i)) + ",";

				cartResultClass = (CartVO) sqlMapper.queryForObject("cart-select", cartParamClass);
				cart_List.add(cartResultClass);
				color = cartResultClass.getCart_goods_color();
				
				goodsClass = (GoodsVO) sqlMapper.queryForObject("goodsSelectOne", Integer.toString(cartResultClass.getCart_goods_no()));
				goods_msg += Integer.toString(goodsClass.getGoods_no()) + ",";

				payTotal += cartResultClass.getCart_goods_total(); // 이거 나중에 order_list.jsp 로 넘겨줘서 주문 전체 가격 구하게함
			}
			if(coupon != null) {
				if(coupon.getCoupon_type() == 1) {
					payTotal = payTotal - coupon.getCoupon_discash();
				}
				else if(coupon.getCoupon_type() == 2){
					payTotal = payTotal * coupon.getCoupon_disrate() / 100;
				}
			}else {
				payTotal = goodsClass.getGoods_price();
			}

		} // if문 끝.

		return SUCCESS;
	}

	public Map getSession() {
		return session;
	}

	public void setSession(Map session) {
		this.session = session;
	}

	public CartVO getCartParamClass() {
		return cartParamClass;
	}

	public void setCartParamClass(CartVO cartParamClass) {
		this.cartParamClass = cartParamClass;
	}

	public CartVO getCartResultClass() {
		return cartResultClass;
	}

	public void setCartResultClass(CartVO cartResultClass) {
		this.cartResultClass = cartResultClass;
	}

	public List<CartVO> getCart_List() {
		return cart_List;
	}

	public void setCart_List(List<CartVO> cart_List) {
		this.cart_List = cart_List;
	}

	public int getSgoods_cnt() {
		return sgoods_cnt;
	}

	public void setSgoods_cnt(int sgoods_cnt) {
		this.sgoods_cnt = sgoods_cnt;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public int getGoods_no() {
		return goods_no;
	}

	public void setGoods_no(int goods_no) {
		this.goods_no = goods_no;
	}

	public int getCart_no() {
		return cart_no;
	}

	public void setCart_no(int cart_no) {
		this.cart_no = cart_no;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public List<Integer> getCart_no_list() {
		return cart_no_list;
	}

	public void setCart_no_list(List<Integer> cart_no_list) {
		this.cart_no_list = cart_no_list;
	}

	public int getPayTotal() {
		return payTotal;
	}

	public void setPayTotal(int payTotal) {
		this.payTotal = payTotal;
	}

	public MemberVO getMemberClass() {
		return memberClass;
	}

	public void setMemberClass(MemberVO memberClass) {
		this.memberClass = memberClass;
	}

	public String getCart_msg() {
		return cart_msg;
	}

	public void setCart_msg(String cart_msg) {
		this.cart_msg = cart_msg;
	}

	public int getOne_goods_no() {
		return one_goods_no;
	}

	public void setOne_goods_no(int one_goods_no) {
		this.one_goods_no = one_goods_no;
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

	public int getCnt() {
		return cnt;
	}

	public void setCnt(int cnt) {
		this.cnt = cnt;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public int getColorIndex() {
		return colorIndex;
	}

	public void setColorIndex(int colorIndex) {
		this.colorIndex = colorIndex;
	}

	public CouponBoxVO getCouponClass() {
		return couponClass;
	}

	public void setCouponClass(CouponBoxVO couponClass) {
		this.couponClass = couponClass;
	}

	public int getCoupon_no() {
		return coupon_no;
	}

	public void setCoupon_no(int coupon_no) {
		this.coupon_no = coupon_no;
	}

	public CouponVO getCoupon() {
		return coupon;
	}

	public void setCoupon(CouponVO coupon) {
		this.coupon = coupon;
	}

}
