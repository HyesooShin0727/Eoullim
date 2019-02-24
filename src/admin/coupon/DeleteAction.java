package admin.coupon;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import user.member.MemberVO;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.io.Reader;
import org.apache.struts2.interceptor.SessionAware;
import java.io.IOException;

public class DeleteAction extends ActionSupport{
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	
	private CouponVO paramClass;
	private CouponVO resultClass;
	private MemberVO member;
	
	private String member_id;
	
	private int currentPage;
	private int coupon_no;
	
	public DeleteAction() throws IOException{
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}
	
	public String execute() throws Exception{
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		paramClass = new CouponVO();
		resultClass = new CouponVO();
		
		resultClass = (CouponVO)sqlMapper.queryForObject("selectOneCoupon",coupon_no);
		
		paramClass.setCoupon_no(getCoupon_no());
		
		sqlMapper.update("deleteCoupon",paramClass);
		
		return SUCCESS;
		
	}

	public CouponVO getParamClass() {
		return paramClass;
	}

	public void setParamClass(CouponVO paramClass) {
		this.paramClass = paramClass;
	}

	public CouponVO getResultClass() {
		return resultClass;
	}

	public void setResultClass(CouponVO resultClass) {
		this.resultClass = resultClass;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
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
}
