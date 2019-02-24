package message;

import java.util.Date;

public class MessageVO {
	
	private int msg_no;
	private String msg_send_id;
	private String msg_rev_id;
	private String msg_sub;
	private String msg_content;
	private Date msg_regdate;
	private int msg_send_del;
	private int msg_rev_del;
	
	public int getMsg_no() {
		return msg_no;
	}
	public void setMsg_no(int msg_no) {
		this.msg_no = msg_no;
	}
	public String getMsg_sub() {
		return msg_sub;
	}
	public void setMsg_sub(String msg_sub) {
		this.msg_sub = msg_sub;
	}
	public String getMsg_content() {
		return msg_content;
	}
	public void setMsg_content(String msg_content) {
		this.msg_content = msg_content;
	}
	public Date getMsg_regdate() {
		return msg_regdate;
	}
	public void setMsg_regdate(Date msg_regdate) {
		this.msg_regdate = msg_regdate;
	}
	public String getMsg_send_id() {
		return msg_send_id;
	}
	public void setMsg_send_id(String msg_send_id) {
		this.msg_send_id = msg_send_id;
	}
	public String getMsg_rev_id() {
		return msg_rev_id;
	}
	public void setMsg_rev_id(String msg_rev_id) {
		this.msg_rev_id = msg_rev_id;
	}
	public int getMsg_send_del() {
		return msg_send_del;
	}
	public void setMsg_send_del(int msg_send_del) {
		this.msg_send_del = msg_send_del;
	}
	public int getMsg_rev_del() {
		return msg_rev_del;
	}
	public void setMsg_rev_del(int msg_rev_del) {
		this.msg_rev_del = msg_rev_del;
	}
}
