package admin.notice;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import user.member.MemberVO;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;
import com.ibatis.sqlmap.client.SqlMapClient;

import java.io.Reader;
import java.io.IOException;

public class modifyAction extends ActionSupport {

   public static Reader reader;
   public static SqlMapClient sqlMapper;

   private NoticeVO paramClass;
   private NoticeVO resultClass;
   private MemberVO member;

   private int currentPage;
   private String member_id;
   private int notice_no;
   private String notice_id;
   private String notice_sub;
   private String notice_content;

   public modifyAction() throws IOException {
      reader = Resources.getResourceAsReader("sqlMapConfig.xml");
      sqlMapper = SqlMapClientBuilder.buildSqlMapClient(reader);
      reader.close();
   }

   public String execute() throws Exception {
	  member_id = (String)ActionContext.getContext().getSession().get("member_id");
	  member = (MemberVO) sqlMapper.queryForObject("checkid",member_id);
	  paramClass = new NoticeVO();
      resultClass = new NoticeVO();

      paramClass.setNotice_no(getNotice_no());
      paramClass.setNotice_id(getNotice_id());
      paramClass.setNotice_sub(getNotice_sub());
      paramClass.setNotice_content(getNotice_content());

      sqlMapper.update("updateNotice",paramClass);

      resultClass = (NoticeVO) sqlMapper.queryForObject("selectOneNotice", notice_no);
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

   public int getNotice_no() {
      return notice_no;
   }

   public void setNotice_no(int notice_no) {
      this.notice_no = notice_no;
   }

   public String getNotice_id() {
      return notice_id;
   }

   public void setNotice_id(String notice_id) {
      this.notice_id = notice_id;
   }

   public String getNotice_sub() {
      return notice_sub;
   }

   public void setNotice_sub(String notice_sub) {
      this.notice_sub = notice_sub;
   }

   public String getNotice_content() {
      return notice_content;
   }

   public void setNotice_content(String notice_content) {
      this.notice_content = notice_content;
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