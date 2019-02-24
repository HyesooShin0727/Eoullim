package admin.goods;

import java.io.File;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.FileUtils;
import org.apache.struts2.interceptor.SessionAware;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import admin.goods.GoodsVO;
import user.member.MemberVO;

public class ModifyAction extends ActionSupport implements SessionAware {
	private Map session;

	public Map getSession() {
		return session;
	}

	public void setSession(Map session) {
		this.session = session;
	}

	public static Reader reader;
	public static SqlMapClient sqlMapper;

	private GoodsVO paramClass;
	private GoodsVO resultClass;
	private MemberVO member;
	
	private String member_id;

	private int currentPage;

	private int goods_no;
	private String goods_name;
	private String goods_bname;
	private String goods_content;

	private String goods_color;
	private int goods_price;
	private int goods_totalcnt;
	private String goods_type1;
	private String goods_type2;
	private String goods_img = "";

	private String goods_orgname = "";
	private String goods_savname = "";

	private String old_file;

	private List<File> uploads = new ArrayList<File>();
	private List<String> uploadsFileName = new ArrayList<String>();
	private String fileUploadPath = "C:\\Users\\hsp\\eclipse-workspace\\Eoullim\\WebContent\\upload\\";

	public ModifyAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();

	}

	public String execute() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		paramClass = new GoodsVO();
		resultClass = new GoodsVO();

		resultClass = (GoodsVO) sqlMapper.queryForObject("goodsSelectOne", getGoods_no());
		paramClass.setGoods_no(getGoods_no());

		paramClass.setGoods_name(getGoods_name());
		paramClass.setGoods_bname(getGoods_bname());
		paramClass.setGoods_content(getGoods_content());
		paramClass.setGoods_price(getGoods_price());
		paramClass.setGoods_totalcnt(getGoods_totalcnt());
		paramClass.setGoods_type1(getGoods_type1());
		paramClass.setGoods_type2(getGoods_type2());
		paramClass.setGoods_color(getGoods_color());

		sqlMapper.update("updateGoods", paramClass);

		for (int i = 0; i < uploads.size(); i++) {
			resultClass = (GoodsVO) sqlMapper.queryForObject("selectLastGoods");

			if (i > 0) {
				goods_orgname = goods_orgname + ",";
				goods_savname = goods_savname + ",";
			}

			goods_orgname = goods_orgname + getUploadsFileName().get(i);

			String file_name = "goods_" + resultClass.getGoods_no();
			String file_ext = getUploadsFileName().get(i).substring(getUploadsFileName().get(i).lastIndexOf('.') + 1,
					getUploadsFileName().get(i).length());
			goods_savname = goods_savname + file_name + "(" + (i + 1) + ")" + "." + file_ext;

			File destFile = new File(fileUploadPath + file_name + "(" + (i + 1) + ")" + "." + file_ext);
			FileUtils.copyFile(getUploads().get(i), destFile);
			paramClass.setGoods_no(resultClass.getGoods_no());
			paramClass.setGoods_orgname(goods_orgname);
			paramClass.setGoods_savname(goods_savname);
			
			System.out.println("�뿬湲곕떎�뿬湲�" + goods_savname);
			
			sqlMapper.update("updateFile", paramClass);
		} // for臾� �걹.

		return SUCCESS;
	}

	public String getOld_file() {
		return old_file;
	}

	public void setOld_file(String old_file) {
		this.old_file = old_file;
	}

	public GoodsVO getParamClass() {
		return paramClass;
	}

	public void setParamClass(GoodsVO paramClass) {
		this.paramClass = paramClass;
	}

	public GoodsVO getResultClass() {
		return resultClass;
	}

	public void setResultClass(GoodsVO resultClass) {
		this.resultClass = resultClass;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getGoods_no() {
		return goods_no;
	}

	public void setGoods_no(int goods_no) {
		this.goods_no = goods_no;
	}

	public String getGoods_name() {
		return goods_name;
	}

	public void setGoods_name(String goods_name) {
		this.goods_name = goods_name;
	}

	public String getGoods_content() {
		return goods_content;
	}

	public void setGoods_content(String goods_content) {
		this.goods_content = goods_content;
	}

	public String getGoods_color() {
		return goods_color;
	}

	public void setGoods_color(String goods_color) {
		this.goods_color = goods_color;
	}

	public int getGoods_price() {
		return goods_price;
	}

	public void setGoods_price(int goods_price) {
		this.goods_price = goods_price;
	}

	public String getGoods_bname() {
		return goods_bname;
	}

	public void setGoods_bname(String goods_bname) {
		this.goods_bname = goods_bname;
	}

	public int getGoods_totalcnt() {
		return goods_totalcnt;
	}

	public void setGoods_totalcnt(int goods_totalcnt) {
		this.goods_totalcnt = goods_totalcnt;
	}

	public String getGoods_type1() {
		return goods_type1;
	}

	public void setGoods_type1(String goods_type1) {
		this.goods_type1 = goods_type1;
	}

	public String getGoods_type2() {
		return goods_type2;
	}

	public void setGoods_type2(String goods_type2) {
		this.goods_type2 = goods_type2;
	}

	public String getGoods_img() {
		return goods_img;
	}

	public void setGoods_img(String goods_img) {
		this.goods_img = goods_img;
	}

	public String getGoods_orgname() {
		return goods_orgname;
	}

	public void setGoods_orgname(String goods_orgname) {
		this.goods_orgname = goods_orgname;
	}

	public String getGoods_savname() {
		return goods_savname;
	}

	public void setGoods_savname(String goods_savname) {
		this.goods_savname = goods_savname;
	}

	public List<File> getUploads() {
		return uploads;
	}

	public void setUploads(List<File> uploads) {
		this.uploads = uploads;
	}

	public List<String> getUploadsFileName() {
		return uploadsFileName;
	}

	public void setUploadsFileName(List<String> uploadsFileName) {
		this.uploadsFileName = uploadsFileName;
	}

	public String getFileUploadPath() {
		return fileUploadPath;
	}

	public void setFileUploadPath(String fileUploadPath) {
		this.fileUploadPath = fileUploadPath;
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
