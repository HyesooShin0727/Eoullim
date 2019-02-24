package user.cart;

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

import admin.goods.GoodsVO;

public class CartDeleteAction extends ActionSupport implements SessionAware {

	private static Reader reader;
	private static SqlMapClient sqlMapper;

	private GoodsVO goodsClass = new GoodsVO();
	private CartVO cartClass = new CartVO();
	private List<CartVO> cartList = new ArrayList<CartVO>();

	public Map session;

	private int cart_no;
	private int goods_no;
	private String member_id;

	private List<Integer> cart_no_list = new ArrayList<Integer>();
	private String msg = "";

	public CartDeleteAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	@Override
	public String execute() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		if (msg.length() > 0) {
			String strNo[] = msg.split(",");
			for (int i = 0; i < strNo.length; i++) {
				cart_no_list.add(Integer.parseInt(strNo[i])); 
			} 
			for (int i = 0; i < cart_no_list.size(); i++) {
				cartClass = (CartVO) sqlMapper.queryForObject("cart-select", cart_no_list.get(i));
				sqlMapper.delete("delete-cart", cartClass);
			}
		} // if臾� �걹
		else {
			cartClass = (CartVO) sqlMapper.queryForObject("cart-select", getCart_no());

			sqlMapper.delete("delete-cart", cartClass);
		} // else 臾� �걹

		return SUCCESS;
	}

	public GoodsVO getGoodsClass() {
		return goodsClass;
	}

	public void setGoodsClass(GoodsVO goodsClass) {
		this.goodsClass = goodsClass;
	}

	public CartVO getCartClass() {
		return cartClass;
	}

	public void setCartClass(CartVO cartClass) {
		this.cartClass = cartClass;
	}

	public Map getSession() {
		return session;
	}

	public void setSession(Map session) {
		this.session = session;
	}

	public int getCart_no() {
		return cart_no;
	}

	public void setCart_no(int cart_no) {
		this.cart_no = cart_no;
	}

	public int getGoods_no() {
		return goods_no;
	}

	public void setGoods_no(int goods_no) {
		this.goods_no = goods_no;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public List<CartVO> getCartList() {
		return cartList;
	}

	public void setCartList(List<CartVO> cartList) {
		this.cartList = cartList;
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

}
