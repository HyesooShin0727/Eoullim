package user.used;

import java.util.Date;

public class UsedVO {
	
	private int uboard_no;
	private String uboard_sub;
	private String uboard_member_id;
	private String uboard_member_name;
	private String uboard_passwd;
	private String uboard_content;
	private int uboard_readhit;
	private Date uboard_regdate;
	private String uboard_file_orgname;
	private String uboard_file_savname;
	
	private int ref;
	private int re_step;
	private int re_level;
	
	
	public int getUboard_no() {
		return uboard_no;
	}
	public void setUboard_no(int uboard_no) {
		this.uboard_no = uboard_no;
	}
	public String getUboard_sub() {
		return uboard_sub;
	}
	public void setUboard_sub(String uboard_sub) {
		this.uboard_sub = uboard_sub;
	}
	public String getUboard_member_id() {
		return uboard_member_id;
	}
	public void setUboard_member_id(String uboard_member_id) {
		this.uboard_member_id = uboard_member_id;
	}
	public String getUboard_member_name() {
		return uboard_member_name;
	}
	public void setUboard_member_name(String uboard_member_name) {
		this.uboard_member_name = uboard_member_name;
	}
	public String getUboard_passwd() {
		return uboard_passwd;
	}
	public void setUboard_passwd(String uboard_passwd) {
		this.uboard_passwd = uboard_passwd;
	}
	public String getUboard_content() {
		return uboard_content;
	}
	public void setUboard_content(String uboard_content) {
		this.uboard_content = uboard_content;
	}
	public int getUboard_readhit() {
		return uboard_readhit;
	}
	public void setUboard_readhit(int uboard_readhit) {
		this.uboard_readhit = uboard_readhit;
	}
	public Date getUboard_regdate() {
		return uboard_regdate;
	}
	public void setUboard_regdate(Date uboard_regdate) {
		this.uboard_regdate = uboard_regdate;
	}
	public String getUboard_file_orgname() {
		return uboard_file_orgname;
	}
	public void setUboard_file_orgname(String uboard_file_orgname) {
		this.uboard_file_orgname = uboard_file_orgname;
	}
	public String getUboard_file_savname() {
		return uboard_file_savname;
	}
	public void setUboard_file_savname(String uboard_file_savname) {
		this.uboard_file_savname = uboard_file_savname;
	}
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
}
