package com.cui.comment.dto;

import org.springframework.web.multipart.MultipartFile;

import com.cui.comment.po.Ad;

public class AdDto extends Ad {

	private String img;

	private MultipartFile imgFile;

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public MultipartFile getImgFile() {
		return imgFile;
	}

	public void setImgFile(MultipartFile imgFile) {
		this.imgFile = imgFile;
	}
}
