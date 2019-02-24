package user.goods;

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

	
	private List<GoodsVO> list = new ArrayList<GoodsVO>();

	private int currentPage = 1;
	private int totalCount;
	private int blockCount = 12;
	private int blockPage = 5;
	private String pagingHtml;
	private PagingAction page;
	private int num = 0;
	
	private String member_id;
	private String listtype = "";
	private String brandtype = "";


	public ListAction() throws IOException
	{
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();		
		
	}
	
	public String execute() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		
		if(getListtype() != "") {
			list = sqlMapper.queryForList("selectTypeGoods",getListtype());
			
		}else if(getBrandtype() != ""){
			list = sqlMapper.queryForList("selectBrandGoods",getBrandtype());
		}else {
			list = sqlMapper.queryForList("selectAllGoods");
		}
		totalCount = list.size();
		page = new PagingAction(currentPage, totalCount, blockCount, blockPage, listtype, brandtype);
		pagingHtml = page.getPagingHtml().toString();
		
		int lastCount = totalCount;
		
		if(page.getEndCount() < totalCount)
			lastCount = page.getEndCount() + 1;
		
		list = list.subList(page.getStartCount(), lastCount);
		return SUCCESS;
	}
	

	public List<GoodsVO> getList() {
		return list;
	}

	public void setList(List<GoodsVO> list) {
		this.list = list;
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

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public String getListtype() {
		return listtype;
	}

	public void setListtype(String listtype) {
		this.listtype = listtype;
	}

	public String getBrandtype() {
		return brandtype;
	}

	public void setBrandtype(String brandtype) {
		this.brandtype = brandtype;
	}
}

