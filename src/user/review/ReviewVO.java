package user.review;

import java.util.Date;

public class ReviewVO {
	
	private int rboard_no;
	private String rboard_sub;
	private String rboard_id;
	private String rboard_name;
	private String rboard_passwd;
	private int rboard_goods;
	private String rboard_content;
	private int rboard_readhit;
	private Date rboard_regdate;
	private String img_file;
	private String video_file;
	private int likes;
	
	public int getRboard_no() {
		return rboard_no;
	}
	public void setRboard_no(int rboard_no) {
		this.rboard_no = rboard_no;
	}
	public String getRboard_sub() {
		return rboard_sub;
	}
	public void setRboard_sub(String rboard_sub) {
		this.rboard_sub = rboard_sub;
	}
	public String getRboard_id() {
		return rboard_id;
	}
	public void setRboard_id(String rboard_id) {
		this.rboard_id = rboard_id;
	}
	public String getRboard_name() {
		return rboard_name;
	}
	public void setRboard_name(String rboard_name) {
		this.rboard_name = rboard_name;
	}
	public String getRboard_passwd() {
		return rboard_passwd;
	}
	public void setRboard_passwd(String rboard_passwd) {
		this.rboard_passwd = rboard_passwd;
	}
	public String getRboard_content() {
		return rboard_content;
	}
	public void setRboard_content(String rboard_content) {
		this.rboard_content = rboard_content;
	}
	public int getRboard_readhit() {
		return rboard_readhit;
	}
	public void setRboard_readhit(int rboard_readhit) {
		this.rboard_readhit = rboard_readhit;
	}
	public Date getRboard_regdate() {
		return rboard_regdate;
	}
	public void setRboard_regdate(Date rboard_regdate) {
		this.rboard_regdate = rboard_regdate;
	}
	public String getImg_file() {
		return img_file;
	}
	public void setImg_file(String img_file) {
		this.img_file = img_file;
	}
	public String getVideo_file() {
		return video_file;
	}
	public void setVideo_file(String video_file) {
		this.video_file = video_file;
	}
	public int getLikes() {
		return likes;
	}
	public void setLikes(int likes) {
		this.likes = likes;
	}
	public int getRboard_goods() {
		return rboard_goods;
	}
	public void setRboard_goods(int rboard_goods) {
		this.rboard_goods = rboard_goods;
	}

}
