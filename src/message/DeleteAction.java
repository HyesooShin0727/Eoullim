package message;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.io.Reader;

import org.apache.struts2.interceptor.SessionAware;

import java.io.IOException;

public class DeleteAction extends ActionSupport{
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	
	private MessageVO paramClass;
	private MessageVO resultClass;
	
	private int currentPage;
	private int msg_no;
	private String member_id;
	private String msgboxtype;
	

	public DeleteAction() throws IOException{
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}
	
	public String execute() throws Exception{
		paramClass = new MessageVO();
		resultClass = new MessageVO();
		
		resultClass = (MessageVO)sqlMapper.queryForObject("selectOneMessage",msg_no);
		
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		
		paramClass.setMsg_no(getMsg_no());
		
		if(member_id.equals(resultClass.getMsg_rev_id())){
			if(resultClass.getMsg_send_del() == 1) {
				sqlMapper.delete("deleteMessage",paramClass);
			}else {
				paramClass.setMsg_rev_del(1);
				sqlMapper.update("revMessagedel",paramClass);
			}
		}else if(member_id.equals(resultClass.getMsg_send_id())) {
			if(resultClass.getMsg_rev_del() == 1) {
				sqlMapper.delete("deleteMessage",paramClass);
			}else {
				paramClass.setMsg_send_del(1);
				sqlMapper.update("sendMessagedel",paramClass);
			}
		}
		
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
