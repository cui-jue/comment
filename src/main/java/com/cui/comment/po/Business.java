package com.cui.comment.po;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class Business extends BasePo {

	private Long id;
	private String imgFileName;
	private String title;
	private String subTitle;
	private Double price;
	private String distance;
	private Integer number;
	private String desc;
	private String city;
	private String category;
	private Long starTotalNum;
	private Long commentTotalNum;

	private Dic cityDic;
	private Dic categoryDic;

	public Dic getCityDic() {
		return cityDic;
	}

	public void setCityDic(Dic cityDic) {
		this.cityDic = cityDic;
	}

	public Dic getCategoryDic() {
		return categoryDic;
	}

	public void setCategoryDic(Dic categoryDic) {
		this.categoryDic = categoryDic;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getImgFileName() {
		return imgFileName;
	}

	public void setImgFileName(String imgFileName) {
		this.imgFileName = imgFileName;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSubTitle() {
		return subTitle;
	}

	public void setSubTitle(String subTitle) {
		this.subTitle = subTitle;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getDistance() {
		return distance;
	}

	public void setDistance(String distance) {
		this.distance = distance;
	}

	public Integer getNumber() {
		return number;
	}

	public void setNumber(Integer number) {
		this.number = number;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Long getStarTotalNum() {
		return starTotalNum;
	}

	public void setStarTotalNum(Long starTotalNum) {
		this.starTotalNum = starTotalNum;
	}

	public Long getCommentTotalNum() {
		return commentTotalNum;
	}

	public void setCommentTotalNum(Long commentTotalNum) {
		this.commentTotalNum = commentTotalNum;
	}

}
