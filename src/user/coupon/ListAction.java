package user.coupon;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import admin.coupon.CouponVO;
import user.member.MemberVO;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.util.*;
import java.io.Reader;
import java.io.IOException;

public class ListAction extends ActionSupport {
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	
	private List<CouponVO> list = new ArrayList<CouponVO>();
	private MemberVO member = new MemberVO();
	
	private String searchk = "";
	private String searcht = "";
	private String msg = "";
	private Map<String,String> map = new HashMap();
	private Map<String,Integer> smap = new HashMap();
	private int payTotal;
	
	private int currentPage = 1;
	private int totalCount;
	private int blockCount = 10;
	private int blockPage = 5;
	private String pagingHtml;
	private pagingAction page;
	private String member_id;
	private int member_no;
	
	private int coupon_no;
	
	public ListAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}
	
	public String select() throws Exception{
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		
		System.out.println("페이토탈 : " + getPayTotal());
		
		smap.put("member_no", member.getMember_no());
		smap.put("coupon_price", getPayTotal());
		
		list = sqlMapper.queryForList("selectCouponUse",smap);
		
		totalCount = list.size();
		page = new pagingAction(currentPage, totalCount, blockCount, blockPage, searcht, searchk);
		pagingHtml = page.getPagingHtml().toString();

		int lastCount = totalCount;

		if (page.getEndCount() < totalCount)
			lastCount = page.getEndCount() + 1;

		list = list.subList(page.getStartCount(), lastCount);
		
		
		return SUCCESS;
		
	}
	
	public String used() throws Exception{
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		
		list = sqlMapper.queryForList("selectAllUsedcBox",member.getMember_no());
		
		totalCount = list.size();
		page = new pagingAction(currentPage, totalCount, blockCount, blockPage, searcht, searchk);
		pagingHtml = page.getPagingHtml().toString();

		int lastCount = totalCount;

		if (page.getEndCount() < totalCount)
			lastCount = page.getEndCount() + 1;

		list = list.subList(page.getStartCount(), lastCount);
		
		return SUCCESS;
	}
	
	public String execute() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		
		list = sqlMapper.queryForList("selectAllcBox",member.getMember_no());
		
		totalCount = list.size();
		page = new pagingAction(currentPage, totalCount, blockCount, blockPage, searcht, searchk);
		pagingHtml = page.getPagingHtml().toString();

		int lastCount = totalCount;

		if (page.getEndCount() < totalCount)
			lastCount = page.getEndCount() + 1;

		list = list.subList(page.getStartCount(), lastCount);
		return SUCCESS;
	}

	public List<CouponVO> getList() {
		return list;
	}

	public void setList(List<CouponVO> list) {
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

	public int getCoupon_no() {
		return coupon_no;
	}

	public void setCoupon_no(int coupon_no) {
		this.coupon_no = coupon_no;
	}
	public MemberVO getMember() {
		return member;
	}

	public void setMember(MemberVO member) {
		this.member = member;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public int getMember_no() {
		return member_no;
	}

	public void setMember_no(int member_no) {
		this.member_no = member_no;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public int getPayTotal() {
		return payTotal;
	}

	public void setPayTotal(int payTotal) {
		this.payTotal = payTotal;
	}
}
