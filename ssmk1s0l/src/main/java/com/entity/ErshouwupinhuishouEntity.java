package com.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 二手物品回收
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2023-05-25 09:46:03
 */
@TableName("ershouwupinhuishou")
public class ErshouwupinhuishouEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public ErshouwupinhuishouEntity() {
		
	}
	
	public ErshouwupinhuishouEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 物品编号
	 */
					
	private String wupinbianhao;
	
	/**
	 * 物品名称
	 */
					
	private String wupinmingcheng;
	
	/**
	 * 物品分类
	 */
					
	private String wupinfenlei;
	
	/**
	 * 物品封面
	 */
					
	private String wupinfengmian;
	
	/**
	 * 物品简介
	 */
					
	private String wupinjianjie;
	
	/**
	 * 物品数量
	 */
					
	private Integer wupinshuliang;
	
	/**
	 * 物品价格
	 */
					
	private Double wupinjiage;
	
	/**
	 * 账号
	 */
					
	private String zhanghao;
	
	/**
	 * 姓名
	 */
					
	private String xingming;
	
	/**
	 * 是否支付
	 */
					
	private String ispay;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：物品编号
	 */
	public void setWupinbianhao(String wupinbianhao) {
		this.wupinbianhao = wupinbianhao;
	}
	/**
	 * 获取：物品编号
	 */
	public String getWupinbianhao() {
		return wupinbianhao;
	}
	/**
	 * 设置：物品名称
	 */
	public void setWupinmingcheng(String wupinmingcheng) {
		this.wupinmingcheng = wupinmingcheng;
	}
	/**
	 * 获取：物品名称
	 */
	public String getWupinmingcheng() {
		return wupinmingcheng;
	}
	/**
	 * 设置：物品分类
	 */
	public void setWupinfenlei(String wupinfenlei) {
		this.wupinfenlei = wupinfenlei;
	}
	/**
	 * 获取：物品分类
	 */
	public String getWupinfenlei() {
		return wupinfenlei;
	}
	/**
	 * 设置：物品封面
	 */
	public void setWupinfengmian(String wupinfengmian) {
		this.wupinfengmian = wupinfengmian;
	}
	/**
	 * 获取：物品封面
	 */
	public String getWupinfengmian() {
		return wupinfengmian;
	}
	/**
	 * 设置：物品简介
	 */
	public void setWupinjianjie(String wupinjianjie) {
		this.wupinjianjie = wupinjianjie;
	}
	/**
	 * 获取：物品简介
	 */
	public String getWupinjianjie() {
		return wupinjianjie;
	}
	/**
	 * 设置：物品数量
	 */
	public void setWupinshuliang(Integer wupinshuliang) {
		this.wupinshuliang = wupinshuliang;
	}
	/**
	 * 获取：物品数量
	 */
	public Integer getWupinshuliang() {
		return wupinshuliang;
	}
	/**
	 * 设置：物品价格
	 */
	public void setWupinjiage(Double wupinjiage) {
		this.wupinjiage = wupinjiage;
	}
	/**
	 * 获取：物品价格
	 */
	public Double getWupinjiage() {
		return wupinjiage;
	}
	/**
	 * 设置：账号
	 */
	public void setZhanghao(String zhanghao) {
		this.zhanghao = zhanghao;
	}
	/**
	 * 获取：账号
	 */
	public String getZhanghao() {
		return zhanghao;
	}
	/**
	 * 设置：姓名
	 */
	public void setXingming(String xingming) {
		this.xingming = xingming;
	}
	/**
	 * 获取：姓名
	 */
	public String getXingming() {
		return xingming;
	}
	/**
	 * 设置：是否支付
	 */
	public void setIspay(String ispay) {
		this.ispay = ispay;
	}
	/**
	 * 获取：是否支付
	 */
	public String getIspay() {
		return ispay;
	}

}
