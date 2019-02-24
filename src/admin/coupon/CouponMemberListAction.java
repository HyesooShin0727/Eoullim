package admin.coupon;

import com.opensymphony.xwork2.ActionSupport;

import admin.notice.pagingAction;
import user.member.MemberVO;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.util.*;
import java.io.Reader;
import java.io.IOException;

import java.net.*;

public class CouponMemberListAction extends ActionSupport{
	public static Reader reader;
	public static SqlMapClient sqlMapper;

	private List<MemberVO> list = new ArrayList<MemberVO>();

	private String searchk = "";
	private String searcht = "";
	private Map<String,String> map = new HashMap();

	private int currentPage = 1;
	private int totalCount;
	private int blockCount = 10;
	private int blockPage = 5;
	private String pagingHtml;
	private CpagingAction page;
	private int num = 0;

	private int member_no;
	private int coupon_no;
	
	public CouponMemberListAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}
	
	public String execute() throws Exception {
		if (getSearchk() != "") {
			System.out.println(searcht + " + " + searchk);
			
			map.put("searcht", searcht);
			map.put("searchk", searchk);
			
			list = sqlMapper.queryForList("selectSearchMember",map);
		}
		else {
		list = sqlMapper.queryForList("selectAllMember");
		}
		
		totalCount = list.size();
		page = new CpagingAction(currentPage, totalCount, blockCount, blockPage, searcht,searchk);
		pagingHtml = page.getPagingHtml().toString();

		int lastCount = totalCount;

		if (page.getEndCount() < totalCount)
			lastCount = page.getEndCount() + 1;

		list = list.subList(page.getStartCount(), lastCount);
		return SUCCESS;
	}

	public List<MemberVO> getList() {
		return list;
	}

	public void setList(List<MemberVO> list) {
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

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public int getMember_no() {
		return member_no;
	}

	public void setMember_no(int member_no) {
		this.member_no = member_no;
	}

	public int getCoupon_no() {
		return coupon_no;
	}

	public void setCoupon_no(int coupon_no) {
		this.coupon_no = coupon_no;
	}

	public CpagingAction getPage() {
		return page;
	}

	public void setPage(CpagingAction page) {
		this.page = page;
	}
}
