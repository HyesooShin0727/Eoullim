package admin.goods;

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

	private GoodsVO paramClass = new GoodsVO();
	private GoodsVO resultClass = new GoodsVO();
	private MemberVO member;
	
	private String member_id;

	private int currentPage;

	private int goods_no;
	
	private String fileUploadPath="C:\\upload\\";
	private InputStream inputStream;
	private String contentDisposition;
	private long contentLength;
	
	File fileInfo = new File(fileUploadPath + resultClass.getGoods_savname());
	
	public ViewAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	public String execute() throws Exception {
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
		resultClass = (GoodsVO) sqlMapper.queryForObject("goodsSelectOne", getGoods_no());
		
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