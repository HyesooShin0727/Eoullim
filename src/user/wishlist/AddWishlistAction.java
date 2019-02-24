package user.wishlist;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import admin.goods.GoodsVO;
import user.cart.CartVO;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.text.*;
import java.util.*;
import java.io.Reader;
import java.io.IOException;

public class AddWishlistAction extends ActionSupport {
	public static Reader reader;
	public static SqlMapClient sqlMapper;

	private List<WishlistVO> wishList = new ArrayList<WishlistVO>();
	private GoodsVO goods = new GoodsVO();

	private WishlistVO paramClass;

	private int currentPage;

	private int wish_no;
	private String wish_member_id;
	private int wish_goods_no;
	private String wish_goods_color;
	private int wish_goods_cnt;
	
	private String member_id;

	private int goods_no;

	public AddWishlistAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	public String execute() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		if(member_id == null) {
			return ERROR;
		}
		paramClass = new WishlistVO();
		goods = (GoodsVO) sqlMapper.queryForObject("goodsSelectOne", getGoods_no());
		wish_goods_no = getGoods_no();
		sqlMapper.update("updateGoodsLike",goods); // Like + 1 !!

		paramClass.setWish_member_id(getMember_id());
		paramClass.setWish_goods_no(getWish_goods_no());
		paramClass.setWish_goods_color(goods.getGoods_color());
		paramClass.setWish_goods_cnt(1);

		sqlMapper.insert("insertWish", paramClass);

		return SUCCESS;

	}

	public List<WishlistVO> getWishList() {
		return wishList;
	}

	public void setWishList(List<WishlistVO> wishList) {
		this.wishList = wishList;
	}

	public WishlistVO getParamClass() {
		return paramClass;
	}

	public void setParamClass(WishlistVO paramClass) {
		this.paramClass = paramClass;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getWish_no() {
		return wish_no;
	}

	public void setWish_no(int wish_no) {
		this.wish_no = wish_no;
	}

	public String getWish_member_id() {
		return wish_member_id;
	}

	public void setWish_member_id(String wish_member_id) {
		this.wish_member_id = wish_member_id;
	}

	public int getWish_goods_no() {
		return wish_goods_no;
	}

	public void setWish_goods_no(int wish_goods_no) {
		this.wish_goods_no = wish_goods_no;
	}

	public String getWish_goods_color() {
		return wish_goods_color;
	}

	public void setWish_goods_color(String wish_goods_color) {
		this.wish_goods_color = wish_goods_color;
	}

	public int getWish_goods_cnt() {
		return wish_goods_cnt;
	}

	public void setWish_goods_cnt(int wish_goods_cnt) {
		this.wish_goods_cnt = wish_goods_cnt;
	}

	public int getGoods_no() {
		return goods_no;
	}

	public void setGoods_no(int goods_no) {
		this.goods_no = goods_no;
	}

	public GoodsVO getGoods() {
		return goods;
	}

	public void setGoods(GoodsVO goods) {
		this.goods = goods;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}
}
