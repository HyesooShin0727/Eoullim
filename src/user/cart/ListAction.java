package user.cart;

import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import user.goods.GoodsVO;



public class ListAction extends ActionSupport implements SessionAware {

	private CartVO paramClass = new CartVO();
	private GoodsVO goodsClass = new GoodsVO();
	
	public static Reader reader; 
	public static SqlMapClient sqlMapper;

	public Map session;
	
	private String member_id;
	
	private Integer goods_price;
	
	private List<CartVO> cartList = new ArrayList<CartVO>();
	private Integer pay_List ;
	private Integer totalPay;
	
	// �깮�꽦�옄
	public ListAction() throws IOException {

		reader = Resources.getResourceAsReader("sqlMapConfig.xml"); 
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader); 
		reader.close();
	}


	public String execute() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		paramClass.setCart_member_id(member_id);
		
		cartList = sqlMapper.queryForList("cart-selectM",paramClass);
		totalPay = (Integer) sqlMapper.queryForObject("cart-paytotal",paramClass);

		return SUCCESS;
	}
	
	
	public List<CartVO> getCartList() {
		return cartList;
	}

	public void setCartList(List<CartVO> cartList) {
		this.cartList = cartList;
	}

	public Integer getTotalPay() {
		return totalPay;
	}

	public void setTotalPay(Integer totalPay) {
		this.totalPay = totalPay;
	}

	public Integer getPay_List() {
		return pay_List;
	}

	public void setPay_List(Integer pay_List) {
		this.pay_List = pay_List;
	}

	public CartVO getParamClass() {
		return paramClass;
	}

	public void setParamClass(CartVO paramClass) {
		this.paramClass = paramClass;
	}

	public static Reader getReader() {
		return reader;
	}

	public static void setReader(Reader reader) {
		ListAction.reader = reader;
	}

	public static SqlMapClient getSqlMapper() {
		return sqlMapper;
	}

	public static void setSqlMapper(SqlMapClient sqlMapper) {
		ListAction.sqlMapper = sqlMapper;
	}

	public Map getSession() {
		return session;
	}

	public void setSession(Map session) {
		this.session = session;
	}

	public List<CartVO> getB_List() {
		return cartList;
	}

	public void setB_List(List<CartVO> b_List) {
		cartList = b_List;
	}

	public Integer getGoods_price() {
		return goods_price;
	}

	public void setGoods_price(Integer goods_price) {
		this.goods_price = goods_price;
	}

	public GoodsVO getGoodsClass() {
		return goodsClass;
	}

	public void setGoodsClass(GoodsVO goodsClass) {
		this.goodsClass = goodsClass;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}
}