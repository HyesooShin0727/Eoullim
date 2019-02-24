package user.wishlist;

import java.util.Date;

public class WishlistVO {
	
	private int wish_no;
	private String wish_member_id;
	private int wish_goods_no;
	private String wish_goods_color;
	private int wish_goods_cnt;
	
	
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

	
}
