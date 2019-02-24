package admin.QnA;

import java.io.File;
import java.io.IOException;
import java.io.Reader;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;
import com.opensymphony.xwork2.ActionSupport;

import user.QnA.QnAVO;

public class deleteAction extends ActionSupport{
	
	public static Reader reader;
	public static SqlMapClient sqlMapper;

	private QnAVO paramClass;
	private QnAVO resultClass;

	private int currentPage;
	

	private int qna_no;

	public deleteAction() throws IOException {
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();
	}

	public String execute() throws Exception {
		paramClass = new QnAVO();
		resultClass = new QnAVO();

		resultClass = (QnAVO) sqlMapper.queryForObject("selectOneQnA", getQna_no());

		paramClass.setQna_no(getQna_no());

		sqlMapper.update("deleteQnA", paramClass);

		return SUCCESS;
	}

	public static Reader getReader() {
		return reader;
	}

	public static void setReader(Reader reader) {
		deleteAction.reader = reader;
	}

	public static SqlMapClient getSqlMapper() {
		return sqlMapper;
	}

	public static void setSqlMapper(SqlMapClient sqlMapper) {
		deleteAction.sqlMapper = sqlMapper;
	}

	public QnAVO getParamClass() {
		return paramClass;
	}

	public void setParamClass(QnAVO paramClass) {
		this.paramClass = paramClass;
	}

	public QnAVO getResultClass() {
		return resultClass;
	}

	public void setResultClass(QnAVO resultClass) {
		this.resultClass = resultClass;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getQna_no() {
		return qna_no;
	}

	public void setQna_no(int qna_no) {
		this.qna_no = qna_no;
	}
	
}
