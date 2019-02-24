package message;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.util.*;
import java.io.Reader;
import java.io.IOException;

import java.net.*;

public class ListAction extends ActionSupport{
	
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	
	private List<MessageVO> list = new ArrayList<MessageVO>();
	
	private String searchk = "";
	private String searcht = "";
	private Map<String,String> map = new HashMap();
	private String msgboxtype = "";
	private String member_id;
	
	private int currentPage = 1;
	private int totalCount;
	private int blockCount = 10;
	private int blockPage = 5;
	private String pagingHtml;
	private pagingAction page;
	private int num = 0;
	
	private int msg_no;
	
	public ListAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}
	
	public String execute() throws Exception{
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		if(getMsgboxtype() == null) {
			msgboxtype = "send";
		}else {
			msgboxtype = getMsgboxtype();
		}
		if (getSearchk() != "") {
			System.out.println(searcht + " + " + searchk);
			
			map.put("searcht", searcht);
			map.put("searchk", searchk);
			
			list = sqlMapper.queryForList("selectSearchMessage",map);
		}
		else {
			if(getMsgboxtype().equals("rev")) {
				list = sqlMapper.queryForList("selectRevMessage",member_id);
			}else if(getMsgboxtype().equals("send")){
				list = sqlMapper.queryForList("selectSendMessage",member_id);
			}else if(getMsgboxtype() == null) {
				list = sqlMapper.queryForList("selectRevMessage",member_id);
			}
		}
		
		totalCount = list.size();
		page = new pagingAction(currentPage, totalCount, blockCount, blockPage, searcht, searchk, msgboxtype);
		pagingHtml = page.getPagingHtml().toString();

		int lastCount = totalCount;

		if (page.getEndCount() < totalCount)
			lastCount = page.getEndCount() + 1;

		list = list.subList(page.getStartCount(), lastCount);
		return SUCCESS;
	}

	public List<MessageVO> getList() {
		return list;
	}

	public void setList(List<MessageVO> list) {
		this.list = list;
	}

	public String getSearchk() {
		return searchk;
	}

	public void setSearchk(String searchk) {
		this.searchk = searchk;
	}

	public String getSearcht() {
		return searcht;
	}

	public void setSearcht(String searcht) {
		this.searcht = searcht;
	}

	public Map<String, String> getMap() {
		return map;
	}

	public void setMap(Map<String, String> map) {
		this.map = map;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public int getBlockCount() {
		return blockCount;
	}

	public void setBlockCount(int blockCount) {
		this.blockCount = blockCount;
	}

	public int getBlockPage() {
		return blockPage;
	}

	public void setBlockPage(int blockPage) {
		this.blockPage = blockPage;
	}

	public String getPagingHtml() {
		return pagingHtml;
	}

	public void setPagingHtml(String pagingHtml) {
		this.pagingHtml = pagingHtml;
	}

	public pagingAction getPage() {
		return page;
	}

	public void setPage(pagingAction page) {
		this.page = page;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
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
