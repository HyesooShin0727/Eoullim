package admin.faq;

import java.io.File;
import java.io.IOException;
import java.io.Reader;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;
import com.opensymphony.xwork2.ActionSupport;

import admin.faq.FAQVO;
import admin.goods.GoodsVO;

public class deleteAction extends ActionSupport{
	
	public static Reader reader;public static SqlMapClient sqlMapper;

	private FAQVO paramClass;
	private FAQVO resultClass;

	private int currentPage;
	

	private int faq_no;

	public deleteAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	public String execute() throws Exception {
		paramClass = new FAQVO();
		resultClass = new FAQVO();

		resultClass = (FAQVO) sqlMapper.queryForObject("selectOneFaq", getFaq_no());

		

		paramClass.setFaq_no(getFaq_no());

		sqlMapper.update("deleteFaq", paramClass);

		return SUCCESS;
	}


	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public FAQVO getParamClass() {
		return paramClass;
	}

	public void setParamClass(FAQVO paramClass) {
		this.paramClass = paramClass;
	}

	public FAQVO getResultClass() {
		return resultClass;
	}

	public void setResultClass(FAQVO resultClass) {
		this.resultClass = resultClass;
	}

	public int getFaq_no() {
		return faq_no;
	}

	public void setFaq_no(int faq_no) {
		this.faq_no = faq_no;
	}
///
	
}
