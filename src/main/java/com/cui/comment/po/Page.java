package com.cui.comment.po;

/**
 * 
 * 
 * 项目名称：comment 类名称：Page 类描述： 分页对象 创建人：cui 创建时间：2018年11月8日 下午6:07:11 修改人：cui
 * 修改时间：2018年11月8日 下午6:07:11 修改备注：
 * 
 * @version 1.0.0
 * 
 */
public class Page {

	// 总条数
	private int totalNumber;
	// 当前页数
	private int currentPage;
	// 总页数
	private int totalPage;
	// 每页显示条数j
	private int pageNumber;

	public Page() {
		this.currentPage = 1;
		this.pageNumber = 5;
	}

	/**
	 * 返回总条数
	 * 
	 * @return totalNumber
	 */
	public int getTotalNumber() {
		return totalNumber;
	}

	private void count() {
		this.totalPage = this.totalNumber / this.pageNumber;
		if (this.totalNumber % this.pageNumber > 0) {
			this.totalPage++;
		}
		// 总页数不能小于等于0
		if (this.totalPage <= 0) {
			this.totalPage = 1;
		}
		// 当前页数不能超过总的页数
		if (this.currentPage > this.totalPage) {
			this.currentPage = this.totalPage;
		}
		if (this.currentPage <= 0) {
			this.currentPage = 1;
		}
	}

	public void setTotalNumber(int totalNumber) {
		this.totalNumber = totalNumber;
		this.count();
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getTotalPage() {

		return totalPage;
	}

	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}

	public int getPageNumber() {
		return pageNumber;
	}

	public void setPageNumber(int pageNumber) {
		this.pageNumber = pageNumber;
	}
}
