package admin.order;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.util.*;
import java.io.Reader;
import java.io.IOException;
import user.member.MemberVO;
import user.order.OrderVO;

import java.net.*;

public class listAction extends ActionSupport {

	public static Reader reader;
	public static SqlMapClient sqlMapper;

	private List<OrderVO> list = new ArrayList<OrderVO>();
	
	private MemberVO member;
	
	private String searchk = "";
	private String searcht = "";
	private Map<String,String> map = new HashMap();

	private int currentPage = 1;
	private int totalCount;
	private int blockCount = 10;
	private int blockPage = 5;
	private String pagingHtml;
	private pagingAction page;
	private int num = 0;

	private String member_id;
	private int notice_no;
	private String selectstate;

	public listAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	public String execute() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		
		if (getSearchk() != "") {
			System.out.println(searcht + " + " + searchk);
			
			map.put("searcht", searcht);
			map.put("searchk", searchk);
			
			list = sqlMapper.queryForList("selectSearchOrder",map);
		}
		else {
		list = sqlMapper.queryForList("selectAllOrder");
		}
		
		totalCount = list.size();
		page = new pagingAction(currentPage, totalCount, blockCount, blockPage, searcht, searchk);
		pagingHtml = page.getPagingHtml().toString();

		int lastCount = totalCount;

		if (page.getEndCount() < totalCount)
			lastCount = page.getEndCount() + 1;

		list = list.subList(page.getStartCount(), lastCount);
		return SUCCESS;
	}

	public int getNotice_no() {
		return notice_no;
	}

	public void setNotice_no(int notice_no) {
		this.notice_no = notice_no;
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

	public Map<String, String> getMap() {
		return map;
	}

	public void setMap(Map<String, String> map) {
		this.map = map;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public MemberVO getMember() {
		return member;
	}

	public void setMember(MemberVO member) {
		this.member = member;
	}

	public List<OrderVO> getList() {
		return list;
	}

	public void setList(List<OrderVO> list) {
		this.list = list;
	}

	public String getSelectstate() {
		return selectstate;
	}

	public void setSelectstate(String selectstate) {
		this.selectstate = selectstate;
	}
	
}
