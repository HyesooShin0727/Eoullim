package message;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.io.Reader;
import java.io.IOException;

public class ViewAction extends ActionSupport{
	
	public static Reader reader;
	public static SqlMapClient sqlMapper;

	private MessageVO paramClass = new MessageVO();
	private MessageVO resultClass = new MessageVO();

	private int currentPage;

	private int msg_no;
	
	private String member_id;
	
	private String msgboxtype;

	public ViewAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	public String execute() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		paramClass.setMsg_no(getMsg_no());
		resultClass = (MessageVO) sqlMapper.queryForObject("selectOneMessage", msg_no);

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

	public String getMsgboxtype() {
		return msgboxtype;
	}

	public void setMsgboxtype(String msgboxtype) {
		this.msgboxtype = msgboxtype;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}
	
}
