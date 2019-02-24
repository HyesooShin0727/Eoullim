package user.review;

public class pagingAction {

	private int currentPage;// ���� ��������
	private int totalCount;// ��ü �Խù� ��
	private int totalPage;// ��ü ������ ��
	private int blockCount;// �� �������� �Խù� �� //10 10�Ա������� blockPage�� 2�γѾ..
	private int blockPage;// �� ȭ�鿡 ������ ������ �� //5 ��10���� 1.. 11���̻��̸� 2, 21���̻��̸� 3...���� �þ!!
	private int startCount;// �� ���������� ������ �Խñ��� ���� ��ȣ
	private int endCount;// �� ���������� ������ �Խñ��� �� ��ȣ
	private int startPage;// ���� ������
	private int endPage;// ������ ������

	private StringBuffer pagingHtml;

	public pagingAction(int currentPage, int totalCount, int blockCount, int blockPage, String searcht,
			String searchk) {
		this.blockCount = blockCount;
		this.blockPage = blockPage;
		this.currentPage = currentPage;
		this.totalCount = totalCount;

		totalPage = (int) Math.ceil((double) totalCount / blockCount);
		if (totalPage == 0) 
		{
			totalPage = 1;
		}

		if (currentPage > totalPage) 
		{
			currentPage = totalPage;
		}

		startCount = (currentPage - 1) * blockCount;
		endCount = startCount + blockCount - 1;

		startPage = (int) ((currentPage - 1) / blockPage) * blockPage + 1;
		endPage = startPage + blockPage - 1;

		if (endPage > totalPage) 
		{
			endPage = totalPage;
		}

		pagingHtml = new StringBuffer();
		if (currentPage > blockPage) 
		{
			if (searchk != "")
				pagingHtml.append("<a href=reviewlistAction.action?searcht=" + searcht +"&searchk=" + searchk + "&currentPage=" + (startPage - 1) +"&submit=SEARCH" + ">");
			else
				pagingHtml.append("<a href=reviewlistAction.action?currentPage=" + (startPage - 1) + ">");
				pagingHtml.append("����");
				pagingHtml.append("</a>");
		}

		pagingHtml.append("&nbsp;|&nbsp;");

		for (int i = startPage; i <= endPage; i++) 
		{
			if (i > totalPage) 
			{
				break;
			}
			if (i == currentPage) 
			{
				pagingHtml.append("&nbsp;<b> <font color='red'>");
				pagingHtml.append(i);
				pagingHtml.append("</font></b>");
			} 
			else 
			{
				pagingHtml.append("&nbsp;<a href='reviewlistAction.action?");
				
				if (searchk != "") {
				pagingHtml.append("searcht=");
				pagingHtml.append(searcht);
				pagingHtml.append("&searchk=" + searchk);
				pagingHtml.append("&currentPage=");
				pagingHtml.append(i);
				pagingHtml.append("&submit=SEARCH");
				}else {
				pagingHtml.append("currentPage=");
				pagingHtml.append(i);
				}
				pagingHtml.append("'>");
				pagingHtml.append(i);
				pagingHtml.append("</a>");
				
			}

			pagingHtml.append("&nbsp;");
		}

		pagingHtml.append("&nbsp;&nbsp;|&nbsp;&nbsp;");

		if (totalPage - startPage >= blockPage) {
			pagingHtml.append("&nbsp;<a href='reviewlistAction.action?");
			
			 if (searchk != "") { 
				 pagingHtml.append("searcht=");
				 pagingHtml.append(searcht);
				 pagingHtml.append("&searchk=" + searchk); pagingHtml.append("&currentPage=");
				 pagingHtml.append((endPage + 1));
				 pagingHtml.append("&submit=SEARCH"); 
			}else {
				pagingHtml.append("currentPage="); 
				pagingHtml.append((endPage + 1));
			pagingHtml.append("'>");
			pagingHtml.append("����");
			pagingHtml.append("</a>");
			}
		}
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

	public int getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
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

	public int getStartCount() {
		return startCount;
	}

	public void setStartCount(int startCount) {
		this.startCount = startCount;
	}

	public int getEndCount() {
		return endCount;
	}

	public void setEndCount(int endCount) {
		this.endCount = endCount;
	}

	public int getStartPage() {
		return startPage;
	}

	public void setStartPage(int startPage) {
		this.startPage = startPage;
	}

	public int getEndPage() {
		return endPage;
	}

	public void setEndPage(int endPage) {
		this.endPage = endPage;
	}

	public StringBuffer getPagingHtml() {
		return pagingHtml;
	}

	public void setPagingHtml(StringBuffer pagingHtml) {
		this.pagingHtml = pagingHtml;
	}

}