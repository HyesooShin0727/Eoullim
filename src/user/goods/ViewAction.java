package user.goods;

import java.io.Reader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.IOException;

import java.net.URLEncoder;

import java.util.*;

import org.apache.struts2.interceptor.SessionAware;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import admin.goods.GoodsVO;
import user.member.MemberVO;

public class ViewAction extends ActionSupport implements SessionAware {

	private Map session;

	public Map getSession() {
		return session;
	}

	public void setSession(Map session) {
		this.session = session;
	}

	public static Reader reader;
	public static SqlMapClient sqlMapper;

	private String member_id;
	private MemberVO memberClass = new MemberVO();

	private GoodsVO paramClass = new GoodsVO();
	private GoodsVO resultClass = new GoodsVO();

	private int currentPage;

	private int goods_no;

	private String fileUploadPath = "C:\\upload\\";
	private InputStream inputStream;
	private String contentDisposition;
	private long contentLength;

	private List<String> colorList = new ArrayList<String>(); // I will split goods_color column to this colorList.

	private List<String> imageList = new ArrayList<String>();

	File fileInfo = new File(fileUploadPath + resultClass.getGoods_savname());

	public ViewAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	public String execute() throws Exception {
		member_id = (String) ActionContext.getContext().getSession().get("member_id");
		memberClass = (MemberVO) sqlMapper.queryForObject("checkid", getMember_id());

		resultClass = (GoodsVO) sqlMapper.queryForObject("goodsSelectOne", getGoods_no());
		String str[] = resultClass.getGoods_color().split("/");

		for (int i = 0; i < str.length; i++) {
			colorList.add(str[i]);
		}

		String str2[] = resultClass.getGoods_savname().split(",");
		for (int i = 0; i < str2.length; i++) {
			imageList.add(str2[i]);
		}

		return SUCCESS;
	}

	public int getGoods_no() {
		return goods_no;
	}

	public void setGoods_no(int goods_no) {
		this.goods_no = goods_no;
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

	public String getFileUploadPath() {
		return fileUploadPath;
	}

	public void setFileUploadPath(String fileUploadPath) {
		this.fileUploadPath = fileUploadPath;
	}

	public InputStream getInputStream() {
		return inputStream;
	}

	public void setInputStream(InputStream inputStream) {
		this.inputStream = inputStream;
	}

	public String getContentDisposition() {
		return contentDisposition;
	}

	public void setContentDisposition(String contentDisposition) {
		this.contentDisposition = contentDisposition;
	}

	public long getContentLength() {
		return contentLength;
	}

	public void setContentLength(long contentLength) {
		this.contentLength = contentLength;
	}

	public File getFileInfo() {
		return fileInfo;
	}

	public void setFileInfo(File fileInfo) {
		this.fileInfo = fileInfo;
	}

	public List<String> getColorList() {
		return colorList;
	}

	public void setColorList(List<String> colorList) {
		this.colorList = colorList;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public MemberVO getMemberClass() {
		return memberClass;
	}

	public void setMemberClass(MemberVO memberClass) {
		this.memberClass = memberClass;
	}

	public List<String> getImageList() {
		return imageList;
	}

	public void setImageList(List<String> imageList) {
		this.imageList = imageList;
	}

}