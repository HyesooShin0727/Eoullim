package message;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import message.MessageVO;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.util.*;
import java.io.Reader;
import java.io.IOException;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

public class WriteAction extends ActionSupport{
	
	public static Reader reader;
	public static SqlMapClient sqlMapper;

	private MessageVO paramClass;
	private MessageVO resultClass;
	private int currentPage;
	
	private int msg_no;
	private String msg_send_id;
	private String msg_rev_id;
	private String msg_sub;
	private String msg_content;
	private Date notice_regdate;
	private int msg_send_del;
	private int msg_rev_del;
	Calendar today = Calendar.getInstance();
	
	private String member_id;
	private String msgboxtype;
	
	public WriteAction() throws IOException{
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}
	
	public String form() throws Exception{
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		return SUCCESS;
	}
	
	public String execute() throws Exception{
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		paramClass = new MessageVO();
		resultClass = new MessageVO();
		
		/*msg_send_id = (String)ActionContext.getContext().getSession().get("member_id");
		if(msg_send_id == null) {
			return LOGIN;
		}*/
		
		paramClass.setMsg_send_id(getMember_id());
		paramClass.setMsg_rev_id(getMsg_rev_id());
		paramClass.setMsg_sub(getMsg_sub());
		paramClass.setMsg_content(getMsg_content());
		paramClass.setMsg_regdate(today.getTime());
		paramClass.setMsg_send_del(getMsg_send_del());
		paramClass.setMsg_rev_del(getMsg_rev_del());
		
		sqlMapper.insert("insertMessage",paramClass);
		
		return SUCCESS;
	}

	public MessageVO getParamClass() {
		return paramClass;
	}

	public void setParamClass(MessageVO paramClass) {
		this.paramClass = paramClass;
	}

	public MessageVO getResultClass() {
		return resultClass;
	}

	public void setResultClass(MessageVO resultClass) {
		this.resultClass = resultClass;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getMsg_no() {
		return msg_no;
	}

	public void setMsg_no(int msg_no) {
		this.msg_no = msg_no;
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

	public Date getNotice_regdate() {
		return notice_regdate;
	}

	public void setNotice_regdate(Date notice_regdate) {
		this.notice_regdate = notice_regdate;
	}

	public Calendar getToday() {
		return today;
	}

	public void setToday(Calendar today) {
		this.today = today;
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

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public String getMsgboxtype() {
		return msgboxtype;
	}

	public void setMsgboxtype(String msgboxtype) {
		this.msgboxtype = msgboxtype;
	}
}
