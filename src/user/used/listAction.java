package user.used;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import user.used.pagingAction;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

import java.util.*;
import java.io.Reader;
import java.io.IOException;

import user.member.MemberVO;

public class listAction extends ActionSupport{
	
	public static Reader reader; // 파일 스트림을 위한 reader
	public static SqlMapClient sqlMapper; // SqlMapClient API를 사용하기 위한 sqlMapper 객체
	
	private List<UsedVO> list = new ArrayList<UsedVO>();
	
	/*썸네일 이미지 추가를 위해 객체 생성 추가*/
	private UsedVO paramClass = new UsedVO(); //파라미터를 저장할 객체 생성
	private UsedVO resultClass = new UsedVO(); // 쿼리 결과 값을 저장할 객체 생성
	private MemberVO member;
	
	private int Uboard_no;
	private String searchKeyword;
	private int searchNum;
	
	private String searchk = "";// type
	private String searcht = "";// 사용자직접입력
	private Map<String, String> map = new HashMap();
	
	private int currentPage = 1; // 현재페이지
	private int totalCount; // 총 게시물의 수
	private int blockCount = 10; //한 페이지의 게시물 수
	private int blockPage = 5; // 한 화면에 보여줄 페이지 수
	private String pagingHtml; // 페이징을 구현한 HTML
	private pagingAction page; // 페이징 클래스
	private int num = 0;
	private String member_id;
	
	public Map session;
	
	// 생성자
	public listAction() throws IOException{
		// sqlMapConfig.xml 파일의 설정내용을 가져온다.	
		reader = Resources.getResourceAsReader("sqlMapConfig.xml");
		// sqlMapConfig.xml의 내용을 적용한 sqlMapper 객체 생성
		sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
		reader.close();	
	}
	
	
	public String execute() throws Exception{
		member_id = (String)ActionContext.getContext().getSession().get("member_id");
		member = (MemberVO) sqlMapper.queryForObject("checkid", member_id);
		
		if(getSearchk() != "") {
				System.out.println(searcht + " + " + searchk);

				map.put("searcht", searcht);
				map.put("searchk", searchk);

				list = sqlMapper.queryForList("UboardselectSearchW", map);
			} else {
				list = sqlMapper.queryForList("selectAllUboard");
			}

			totalCount = list.size();
			page = new pagingAction(currentPage, totalCount, blockCount, blockPage, searcht, searchk);
			pagingHtml = page.getPagingHtml().toString();

			int lastCount = totalCount;

			if (page.getEndCount() < totalCount)
				lastCount = page.getEndCount() + 1;

			list = list.subList(page.getStartCount(), lastCount);
			return SUCCESS;
	}
	
	
	/*
	 * public String search() throws Exception{
	 * 
	 * // System.out.println(searchKeyword); // System.put.println(searchNum);
	 * 
	 * if(searchNum == 0){ list = sqlMapper.queryForList("UboardselectSearchW", "%"
	 * + getSearchKeyword() + "%"); } if(searchNum == 1){ list =
	 * sqlMapper.queryForList("UboardselectSearchS", "%"+getSearchKeyword()+"%"); }
	 * if(searchNum == 2){ list = sqlMapper.queryForList("UboardselectSearchC",
	 * "%"+getSearchKeyword()+"%"); }
	 * 
	 * totalCount = list.size(); page = new pagingAction( currentPage, totalCount,
	 * blockCount, blockPage, searcht, searchk); pagingHtml =
	 * page.getPagingHtml().toString();
	 * 
	 * int lastCount = totalCount;
	 * 
	 * if(page.getEndCount() < totalCount) lastCount = page.getEndCount() + 1;
	 * 
	 * list = list.subList(page.getStartCount(), lastCount); return SUCCESS; }
	 */
	public List<UsedVO> getList() {
		return list;
	}

	public void setList(List<UsedVO> list) {
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

	public pagingAction getPage() {
		return page;
	}

	public void setPage(pagingAction page) {
		this.page = page;
	}

	public String getSearchKeyword() {
		return searchKeyword;
	}

	public void setSearchKeyword(String searchKeyword) {
		this.searchKeyword = searchKeyword;
	}

	public int getSearchNum() {
		return searchNum;
	}

	public void setSearchNum(int searchNum) {
		this.searchNum = searchNum;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public Map getSession() {
		return session;
	}
	
	public Map getSeesion() {
		return session;
	}
	
	public void setSession(Map session) {
		this.session = session;
	}


	public UsedVO getResultClass() {
		return resultClass;
	}


	public void setResultClass(UsedVO resultClass) {
		this.resultClass = resultClass;
	}


	public int getUboard_no() {
		return Uboard_no;
	}


	public void setUboard_no(int uboard_no) {
		Uboard_no = uboard_no;
	}


	public UsedVO getParamClass() {
		return paramClass;
	}


	public void setParamClass(UsedVO paramClass) {
		this.paramClass = paramClass;
	}


	public static Reader getReader() {
		return reader;
	}


	public static void setReader(Reader reader) {
		listAction.reader = reader;
	}


	public static SqlMapClient getSqlMapper() {
		return sqlMapper;
	}


	public static void setSqlMapper(SqlMapClient sqlMapper) {
		listAction.sqlMapper = sqlMapper;
	}


	public String getSearchk() {
		return searchk;
	}


	public void setSearchk(String searchk) {
		this.searchk = searchk;
	}


	public String getSearcht() {
		return searcht;
	}


	public void setSearcht(String searcht) {
		this.searcht = searcht;
	}


	public Map<String, String> getMap() {
		return map;
	}


	public void setMap(Map<String, String> map) {
		this.map = map;
	}


	public String getMember_id() {
		return member_id;
	}


	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}


	public MemberVO getMember() {
		return member;
	}


	public void setMember(MemberVO member) {
		this.member = member;
	}
	
}