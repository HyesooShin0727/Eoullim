package user.review;

import java.util.Date;

public class Review_CommentVO {
	
	private int rcomment_no;
	private int rcomment_orgno;
	private String rcomment_id;
	private String rcomment_passwd;
	private String rcomment_content;
	private Date rcomment_regdate;
	/*
	private int ref;
	private int re_step;
	private int re_level;
	*/
	public int getRcomment_no() {
		return rcomment_no;
	}
	public void setRcomment_no(int rcomment_no) {
		this.rcomment_no = rcomment_no;
	}
	public int getRcomment_orgno() {
		return rcomment_orgno;
	}
	public void setRcomment_orgno(int rcomment_orgno) {
		this.rcomment_orgno = rcomment_orgno;
	}
	public String getRcomment_id() {
		return rcomment_id;
	}
	public void setRcomment_id(String rcomment_id) {
		this.rcomment_id = rcomment_id;
	}
	public String getRcomment_passwd() {
		return rcomment_passwd;
	}
	public void setRcomment_passwd(String rcomment_passwd) {
		this.rcomment_passwd = rcomment_passwd;
	}
	public String getRcomment_content() {
		return rcomment_content;
	}
	public void setRcomment_content(String rcomment_content) {
		this.rcomment_content = rcomment_content;
	}
	public Date getRcomment_regdate() {
		return rcomment_regdate;
	}
	public void setRcomment_regdate(Date rcomment_regdate) {
		this.rcomment_regdate = rcomment_regdate;
	}
	/*
	public int getRef() {
		return ref;
	}
	public void setRef(int ref) {
		this.ref = ref;
	}
	public int getRe_step() {
		return re_step;
	}
	public void setRe_step(int re_step) {
		this.re_step = re_step;
	}
	public int getRe_level() {
		return re_level;
	}
	public void setRe_level(int re_level) {
		this.re_level = re_level;
	}
*/
}
