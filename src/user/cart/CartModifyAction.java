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

public class CartModifyAction extends ActionSupport implements SessionAware {

	private static Reader reader;
	private static SqlMapClient sqlMapper;

	private CartVO cartClass = new CartVO();

	public Map session;
	private int cart_no;
	private int cart_goods_cnt;
	private String member_id;
	private int temp_price = 0;

	public CartModifyAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	@Override
	public String execute() throws Exception {
		cartClass = (CartVO) sqlMapper.queryForObject("cart-select",getCart_no());
		cartClass.setCart_goods_cnt(getCart_goods_cnt());
		sqlMapper.update("updateCnt",cartClass);
		
		temp_price = cartClass.getCart_goods_cnt() * cartClass.getCart_goods_price();
		cartClass.setCart_goods_total(temp_price);
		sqlMapper.update("updateTotal",cartClass);
	
		return SUCCESS;
	}

	public Map getSession() {
		return session;
	}

	public void setSession(Map session) {
		this.session = session;
	}

	public CartVO getCartClass() {
		return cartClass;
	}

	public void setCartClass(CartVO cartClass) {
		this.cartClass = cartClass;
	}

	public int getCart_no() {
		return cart_no;
	}

	public void setCart_no(int cart_no) {
		this.cart_no = cart_no;
	}

	public int getCart_goods_cnt() {
		return cart_goods_cnt;
	}

	public void setCart_goods_cnt(int cart_goods_cnt) {
		this.cart_goods_cnt = cart_goods_cnt;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public int getTemp_price() {
		return temp_price;
	}

	public void setTemp_price(int temp_price) {
		this.temp_price = temp_price;
	}

}
