package user.wishlist;

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

public class WishDeleteAction extends ActionSupport implements SessionAware {

	private static Reader reader;
	private static SqlMapClient sqlMapper;

	private GoodsVO goodsClass = new GoodsVO();
	private WishlistVO wishClass = new WishlistVO();
	private List<WishlistVO> wishList = new ArrayList<WishlistVO>();

	public Map session;

	private int wish_no;
	private int goods_no;
	private String member_id;

	private List<Integer> goods_no_list = new ArrayList<Integer>();
	private String msg = ""; // // �꽑�깮�븳 �쐞�떆由ъ뒪�듃�뱾 �궘�젣

	public WishDeleteAction() throws IOException {
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
				goods_no_list.add(Integer.parseInt(strNo[i])); // Integer濡� 罹먯뒪�똿�빐�꽌 �꽔�뼱以�.

				// member_id = (String)
				// ActionContext.getContext().getSession().get("member_id");
			} // str for臾� �걹

			for (int i = 0; i < goods_no_list.size(); i++) {
				wishClass.setWish_member_id(getMember_id());
				wishClass.setWish_goods_no( goods_no_list.get(i) );
				wishClass = (WishlistVO) sqlMapper.queryForObject("selectOneWishG", wishClass);
				sqlMapper.delete("deleteWish", wishClass.getWish_no());
			} // for臾� �걹

		} // if臾� �걹
		else {

			System.out.println("援우쫰�꽆踰� �뀒�뒪�듃 : " + getGoods_no()); // 異쒕젰�뀒�뒪�듃

			wishClass.setWish_member_id(getMember_id());
			wishClass.setWish_goods_no(getGoods_no());

			wishClass = (WishlistVO) sqlMapper.queryForObject("selectOneWishG", wishClass);
			System.out.println("�쐞�떆�꽆踰� �뀒�뒪�듃 : " + wishClass.getWish_no());

			sqlMapper.delete("deleteWish", wishClass.getWish_no());
		} // else 臾� �걹

		return SUCCESS;
	}

	public GoodsVO getGoodsClass() {
		return goodsClass;
	}

	public void setGoodsClass(GoodsVO goodsClass) {
		this.goodsClass = goodsClass;
	}

	public WishlistVO getWishClass() {
		return wishClass;
	}

	public void setWishClass(WishlistVO wishClass) {
		this.wishClass = wishClass;
	}

	public List<WishlistVO> getWishList() {
		return wishList;
	}

	public void setWishList(List<WishlistVO> wishList) {
		this.wishList = wishList;
	}

	public Map getSession() {
		return session;
	}

	public void setSession(Map session) {
		this.session = session;
	}

	public int getWish_no() {
		return wish_no;
	}

	public void setWish_no(int wish_no) {
		this.wish_no = wish_no;
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

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

}
