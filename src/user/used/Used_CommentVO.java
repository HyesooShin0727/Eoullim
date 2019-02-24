package user.used;

import java.util.Date;

public class Used_CommentVO {
	
	private int ucomment_no;
	private int ucomment_orgno;
	private String ucomment_id;
	private String ucomment_passwd;
	private String ucomment_content;
	private Date ucomment_regdate;
	
	/*댓글의 댓글은 프로젝트중 시간이 남으면 구현하기*/ 
	/*
	private int ref;
	private int re_step;
	private int re_level;
	*/	
	public int getUcomment_no() {
		return ucomment_no;
	}
	public void setUcomment_no(int ucomment_no) {
		this.ucomment_no = ucomment_no;
	}
	public int getUcomment_orgno() {
		return ucomment_orgno;
	}
	public void setUcomment_orgno(int ucomment_orgno) {
		this.ucomment_orgno = ucomment_orgno;
	}
	public String getUcomment_id() {
		return ucomment_id;
	}
	public void setUcomment_id(String ucomment_id) {
		this.ucomment_id = ucomment_id;
	}
	public String getUcomment_passwd() {
		return ucomment_passwd;
	}
	public void setUcomment_passwd(String ucomment_passwd) {
		this.ucomment_passwd = ucomment_passwd;
	}
	public String getUcomment_content() {
		return ucomment_content;
	}
	public void setUcomment_content(String ucomment_content) {
		this.ucomment_content = ucomment_content;
	}
	public Date getUcomment_regdate() {
		return ucomment_regdate;
	}
	public void setUcomment_regdate(Date ucomment_regdate) {
		this.ucomment_regdate = ucomment_regdate;
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
