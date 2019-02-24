package admin.notice;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.io.Reader;
import java.io.IOException;
public class deleteAction extends ActionSupport {
	public static Reader reader;
	public static SqlMapClient sqlMapper;
	
	private NoticeVO paramClass;
	private NoticeVO resultClass;
	
	private int currentPage;
	private int notice_no;
	private String member_id;

	public deleteAction() throws IOException{
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}
	
	public String execute() throws Exception{
		
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		
		paramClass = new NoticeVO();
		resultClass = new NoticeVO();
		
		resultClass = (NoticeVO)sqlMapper.queryForObject("selectOneNotice",notice_no);
		
		paramClass.setNotice_no(getNotice_no());
		
		sqlMapper.update("deleteNotice",paramClass);
		
		return SUCCESS;
	}

	public NoticeVO getParamClass() {
		return paramClass;
	}

	public void setParamClass(NoticeVO paramClass) {
		this.paramClass = paramClass;
	}

	public NoticeVO getResultClass() {
		return resultClass;
	}

	public void setResultClass(NoticeVO resultClass) {
		this.resultClass = resultClass;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public void setNotice_no(int notice_no) {
		this.notice_no = notice_no;
	}
	public int getNotice_no() {
		return notice_no;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}
	
	

}
