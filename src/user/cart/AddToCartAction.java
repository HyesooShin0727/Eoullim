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

import user.cart.CartVO;
import admin.goods.GoodsVO;
import user.member.MemberVO;

public class AddToCartAction extends ActionSupport implements SessionAware {

	public static Reader reader;
	public static SqlMapClient sqlMapper;
	public Map session;

	private GoodsVO goodParamClass = new GoodsVO();
	private GoodsVO goodResultClass = new GoodsVO();

	private CartVO cartParamClass = new CartVO();

	private List<CartVO> cart_List = new ArrayList<CartVO>();

	private int sgoods_cnt;
	private String m_id;
	private int goods_no;
	private int cart_no;

	private String member_id;
	private String color;
	private int colorIndex;

	String msg = ""; //
	private List<Integer> goods_no_list = new ArrayList<Integer>();

	public AddToCartAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	public String execute() throws Exception {
		member_id = (String) ActionContext.getContext().getSession().get("member_id");
		if (member_id == null) {
			return ERROR;
		}

		if (msg.length() > 0) {
			String strNo[] = msg.split(",");
			for (int i = 0; i < strNo.length; i++) {
				goods_no_list.add(Integer.parseInt(strNo[i]));
			}

			for (int i = 0; i < goods_no_list.size(); i++) {
				goodResultClass = (GoodsVO) sqlMapper.queryForObject("goodsSelectOne", goods_no_list.get(i));

				cartParamClass.setCart_goods_no(goodResultClass.getGoods_no());
				cartParamClass.setCart_member_id(getMember_id());
				
				String colorStr[] = goodResultClass.getGoods_color().split("/");
				
				if (getColorIndex() != 0) {
					color = colorStr[getColorIndex() - 1];
					cartParamClass.setCart_goods_color(colorStr[getColorIndex() - 1]);
				}
				if (getColorIndex() == 0) {
					color = colorStr[0];
					cartParamClass.setCart_goods_color(goodResultClass.getGoods_color());
				}


				cartParamClass.setCart_goods_cnt(1);
				cartParamClass.setCart_goods_img(goodResultClass.getGoods_savname());
				cartParamClass.setCart_goods_name(goodResultClass.getGoods_name());
				cartParamClass.setCart_goods_price(goodResultClass.getGoods_price());

				sqlMapper.insert("insertCart", cartParamClass);
				cartParamClass.setCart_no(getCart_no());

				sqlMapper.update("updateTotal", cartParamClass);
			}

		} 
		else {
			goodResultClass = (GoodsVO) sqlMapper.queryForObject("goodsSelectOne", getGoods_no());
			cartParamClass.setCart_goods_no(goodResultClass.getGoods_no());
			cartParamClass.setCart_member_id(getMember_id());

			// added
			String colorStr[] = goodResultClass.getGoods_color().split("/");

			if (getColorIndex() != 0) {
				color = colorStr[getColorIndex() - 1];
				cartParamClass.setCart_goods_color(colorStr[getColorIndex() - 1]);
			}

			if (getColorIndex() == 0) { // if user don't use goods_color, we put the first value of goods_color.
				cartParamClass.setCart_goods_color(colorStr[0]);
			}
			// added

			cartParamClass.setCart_goods_cnt(1);
			cartParamClass.setCart_goods_img(goodResultClass.getGoods_savname());
			cartParamClass.setCart_goods_name(goodResultClass.getGoods_name());
			cartParamClass.setCart_goods_price(goodResultClass.getGoods_price());

			sqlMapper.insert("insertCart", cartParamClass);
			cartParamClass.setCart_no(getCart_no());

			sqlMapper.update("updateTotal", cartParamClass);
		} // else end

		cart_List = sqlMapper.queryForList("cart-selectM", cartParamClass);

		return SUCCESS;
	}

	public Map getSession() {
		return session;
	}

	public void setSession(Map session) {
		this.session = session;
	}

	public GoodsVO getGoodParamClass() {
		return goodParamClass;
	}

	public void setGoodParamClass(GoodsVO goodParamClass) {
		this.goodParamClass = goodParamClass;
	}

	public GoodsVO getGoodResultClass() {
		return goodResultClass;
	}

	public void setGoodResultClass(GoodsVO goodResultClass) {
		this.goodResultClass = goodResultClass;
	}

	public CartVO getCartParamClass() {
		return cartParamClass;
	}

	public void setCartParamClass(CartVO cartParamClass) {
		this.cartParamClass = cartParamClass;
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

	public String getM_id() {
		return m_id;
	}

	public void setM_id(String m_id) {
		this.m_id = m_id;
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

	public List<Integer> getGoods_no_list() {
		return goods_no_list;
	}

	public void setGoods_no_list(List<Integer> goods_no_list) {
		this.goods_no_list = goods_no_list;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
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
}
