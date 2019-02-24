package main;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import admin.goods.GoodsVO;
import user.member.MemberVO;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import java.io.Reader;
import java.io.IOException;

public class MainAction extends ActionSupport{
	
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	
	private List<GoodsVO> list2 = new ArrayList<GoodsVO>();
	private List<GoodsVO> list = new ArrayList<GoodsVO>();
	private int totalCount;

	private GoodsVO firstGoods = new GoodsVO();
	private GoodsVO secondGoods = new GoodsVO();
	private GoodsVO thirdGoods = new GoodsVO();
	
	private MemberVO member;
	private String member_id;
	
	public MainAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}
	
	public String execute() throws Exception{
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		//member_id 는 session으로 가져옴
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		//member = sql문으로 #member_id# 입력받은값으로 id 찾아냄. 
		list2 = sqlMapper.queryForList("selectBestTen");//list2 = top10 

		firstGoods = list2.get(0); // rank1
		secondGoods = list2.get(1); // rank2
		thirdGoods = list2.get(2); // rank3

		for (int i = 3; i < 10; i++) {
			list.add(list2.get(i));
		}
		totalCount = list.size();
		
		if(member != null) {
			if(member.getIsadmin() == 1) {
				return LOGIN;//Login -> redirect-action 으로 adminmemverlist 보여줌. admin용 main창.
			}
			return SUCCESS;//success member != null 이 아니고... 즉 로그인했고 getIsadmin() == 0 즉 회원이면
			//tiles로 main 보여줌. 일반 회원 main창.
		}
		return SUCCESS;
	}

	public List<GoodsVO> getList2() {
		return list2;
	}

	public void setList2(List<GoodsVO> list2) {
		this.list2 = list2;
	}

	public List<GoodsVO> getList() {
		return list;
	}

	public void setList(List<GoodsVO> list) {
		this.list = list;
	}

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public GoodsVO getFirstGoods() {
		return firstGoods;
	}

	public void setFirstGoods(GoodsVO firstGoods) {
		this.firstGoods = firstGoods;
	}

	public GoodsVO getSecondGoods() {
		return secondGoods;
	}

	public void setSecondGoods(GoodsVO secondGoods) {
		this.secondGoods = secondGoods;
	}

	public GoodsVO getThirdGoods() {
		return thirdGoods;
	}

	public void setThirdGoods(GoodsVO thirdGoods) {
		this.thirdGoods = thirdGoods;
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
}