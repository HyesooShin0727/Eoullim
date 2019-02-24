package user.review;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.io.Reader;
import java.io.IOException;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.IOException;

import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import org.apache.struts2.interceptor.SessionAware;

import java.util.Map;

/*import admin.goods.VO.GoodsVO;*/


import user.review.ReviewVO;
public class viewAction extends ActionSupport implements SessionAware{
	
	public Map getSession() {
		return session;
	}
	
	public void setSession(Map session) {
		this.session = session;
	} 
	
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	
	private ReviewVO paramClass = new ReviewVO();
	private ReviewVO resultClass = new ReviewVO();
	
	private List<Review_CommentVO> commentlist = new ArrayList<Review_CommentVO>();
	
	private Review_CommentVO cClass = new Review_CommentVO();
	private Review_CommentVO cResult = new Review_CommentVO();
	
	private int currentPage;	
	private int rboard_no;
	private String rboard_passwd;
	
	private int rcomment_no;
	private int rcomment_orgno;
	private String rcomment_passwd;
	private String member_id;
	
	private String fileUploadPath = "C://Real//Eoullim0108//WebContent//upload//";
	
	private InputStream inputStream;
	private String contentDisposition;
	private long contentLength;
	private Map session;
	
/*	private GoodsVO goods_paramClass =new GoodsVO();
	private GoodsVO goods_resultClass=new GoodsVO();
	private int goods_no;*/
	
	public viewAction() throws IOException{
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}
	
	public String execute() throws Exception{
		 member_id = (String)ActionContext.getContext().getSession().get("member_id");
         paramClass = new ReviewVO();
	     System.out.println(getRcomment_orgno());
	     
	     if(getRcomment_orgno() != 0) {
	    	 paramClass.setRboard_no(getRcomment_orgno());
	     }else {
	    	 paramClass.setRboard_no(getRboard_no());
	     }
	     
	     sqlMapper.update("updateReadHit", paramClass);
	     
	     resultClass = (ReviewVO) sqlMapper.queryForObject("reviewSelectOne" ,getRboard_no());
		
	     commentlist = sqlMapper.queryForList("rcommentSelectAll",getRboard_no());
	     
	     return SUCCESS;

	}
	
	public String download() throws Exception{
		resultClass = (ReviewVO) sqlMapper.queryForObject("reviewSelectOne",getRboard_no());
		
		File fileInfo = new File(fileUploadPath + resultClass.getImg_file());
		File fileInfo2 = new File(fileUploadPath + resultClass.getVideo_file());
		
		setContentLength(fileInfo.length());
		setContentDisposition("attachment;filename=" + URLEncoder.encode(resultClass.getImg_file(),"UTF-8"));
		setContentDisposition("attachment;filename=" + URLEncoder.encode(resultClass.getVideo_file(),"UTF-8"));
		
	
		return SUCCESS;
		
	}
	
	//비밀번호 체크하는 폼(글) ->글삭제할때필요...
	
	public String checkForm() throws Exception{
		return SUCCESS;
		
	}
	
	//비밀번호 체크하는 액션
	
	public String checkAction() throws Exception{
		paramClass.setRboard_no(getRboard_no());
		paramClass.setRboard_passwd(getRboard_passwd());
		//직접 친 비밀번호
		System.out.println("getRboard_passwd " + getRboard_passwd());
		//DB에 있는 현재글의 비밀번호
		resultClass = (ReviewVO) sqlMapper.queryForObject("selectPassword",paramClass);
		
		if(resultClass == null)
			return ERROR;
		
		return SUCCESS;
	}
	//댓글비밀번호.. 
	public String checkAction2() throws Exception{
		cClass.setRcomment_no(getRcomment_no());
		cClass.setRcomment_passwd(getRcomment_passwd());
		cClass.setRcomment_orgno(getRcomment_orgno());
		cResult = (Review_CommentVO) sqlMapper.queryForObject("selectCommentPassword",cClass);
		
		if(cResult == null)
			return ERROR;
	
		return SUCCESS;
		
	}

	public static Reader getReader() {
		return reader;
	}

	public static void setReader(Reader reader) {
		viewAction.reader = reader;
	}

	public static SqlMapClient getSqlMapper() {
		return sqlMapper;
	}

	public static void setSqlMapper(SqlMapClient sqlMapper) {
		viewAction.sqlMapper = sqlMapper;
	}

	public ReviewVO getParamClass() {
		return paramClass;
	}

	public void setParamClass(ReviewVO paramClass) {
		this.paramClass = paramClass;
	}

	public ReviewVO getResultClass() {
		return resultClass;
	}

	public void setResultClass(ReviewVO resultClass) {
		this.resultClass = resultClass;
	}

	public List<Review_CommentVO> getCommentlist() {
		return commentlist;
	}

	public void setCommentlist(List<Review_CommentVO> commentlist) {
		this.commentlist = commentlist;
	}

	public Review_CommentVO getcClass() {
		return cClass;
	}

	public void setcClass(Review_CommentVO cClass) {
		this.cClass = cClass;
	}

	public Review_CommentVO getcResult() {
		return cResult;
	}

	public void setcResult(Review_CommentVO cResult) {
		this.cResult = cResult;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getRboard_no() {
		return rboard_no;
	}

	public void setRboard_no(int rboard_no) {
		this.rboard_no = rboard_no;
	}

	public String getRboard_passwd() {
		return rboard_passwd;
	}

	public void setRboard_passwd(String rboard_passwd) {
		this.rboard_passwd = rboard_passwd;
	}

	public int getRcomment_no() {
		return rcomment_no;
	}

	public void setRcomment_no(int rcomment_no) {
		this.rcomment_no = rcomment_no;
	}

	public int getRcomment_orgno() {
		return rcomment_orgno;
	}

	public void setRcomment_orgno(int rcomment_orgno) {
		this.rcomment_orgno = rcomment_orgno;
	}

	public String getRcomment_passwd() {
		return rcomment_passwd;
	}

	public void setRcomment_passwd(String rcomment_passwd) {
		this.rcomment_passwd = rcomment_passwd;
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

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}
}
