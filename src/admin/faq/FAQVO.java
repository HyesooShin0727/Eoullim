package admin.faq;

import java.util.Date;

public class FAQVO {
	
	private int faq_no;
	private String faq_sub;
	private String faq_content;
	private String faq_type;
	private Date faq_regdate;
	
	public int getFaq_no() {
		return faq_no;
	}
	public void setFaq_no(int faq_no) {
		this.faq_no = faq_no;
	}
	public String getFaq_sub() {
		return faq_sub;
	}
	public void setFaq_sub(String faq_sub) {
		this.faq_sub = faq_sub;
	}
	public String getFaq_content() {
		return faq_content;
	}
	public void setFaq_content(String faq_content) {
		this.faq_content = faq_content;
	}
	public String getFaq_type() {
		return faq_type;
	}
	public void setFaq_type(String faq_type) {
		this.faq_type = faq_type;
	}
	public Date getFaq_regdate() {
		return faq_regdate;
	}
	public void setFaq_regdate(Date faq_regdate) {
		this.faq_regdate = faq_regdate;
	}
}
