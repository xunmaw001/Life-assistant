
<template>
<view>
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view class="container" :style='{"minHeight":"100vh","width":"100%","padding":"0px 0 240rpx","position":"relative","background":"url(http://codegen.caihongy.cn/20230301/7556a30fbb784d0084d649f21711175c.png) no-repeat left bottom,url(http://codegen.caihongy.cn/20230301/28586bd575de4721a42223a6e1d4b118.png) fixed","height":"auto"}'>
            <view :style='{"padding":"0px 24rpx 24rpx","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}' class="detail-content">

				<view :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 12rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#f7d3ba","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0 0 6rpx","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"padding":"0 20rpx 0 12rpx","color":"#fb9a40","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"30rpx","minWidth":"100%","fontWeight":"600"}' class="lable">反馈标题：</view>
					<view :style='{"width":"100%","padding":"0px 20rpx 20rpx 12rpx","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}' class="text">{{detail.fankuibiaoti}}</view>
				</view>
				<view :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 12rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#f7d3ba","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0 0 6rpx","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"padding":"0 20rpx 0 12rpx","color":"#fb9a40","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"30rpx","minWidth":"100%","fontWeight":"600"}' class="lable">反馈时间：</view>
					<view :style='{"width":"100%","padding":"0px 20rpx 20rpx 12rpx","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}' class="text">{{detail.fankuishijian}}</view>
				</view>
				<view :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 12rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#f7d3ba","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0 0 6rpx","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"padding":"0 20rpx 0 12rpx","color":"#fb9a40","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"30rpx","minWidth":"100%","fontWeight":"600"}' class="lable">姓名：</view>
					<view :style='{"width":"100%","padding":"0px 20rpx 20rpx 12rpx","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}' class="text">{{detail.xingming}}</view>
				</view>

				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 12rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#f7d3ba","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0 0 6rpx","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 12rpx","color":"#fb9a40","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"30rpx","minWidth":"100%","fontWeight":"600"}'>账号：</view>
					<view  class="text" :style='{"width":"100%","padding":"0px 20rpx 20rpx 12rpx","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.zhanghao}}</view>
				</view>




				<view v-if="userid" class="detail-list-item" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"12rpx 12rpx 12rpx","margin":"20rpx 0 20rpx 0","borderColor":"#f7d3ba","borderRadius":"0px","flexWrap":"wrap","borderWidth":"0 0 6rpx","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 12rpx","color":"#fb9a40","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"30rpx","minWidth":"100%","fontWeight":"600"}'>回复内容</view>
					<view class="text" :style='{"width":"100%","padding":"0px 20rpx 20rpx 12rpx","margin":"0px 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.shhf}}</view>
				</view>

				<view class="detail-list-item rich" :style='{"boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"24rpx 24rpx","margin":"0 0 24rpx 0","borderColor":"#f7d3ba","borderRadius":"0px","flexWrap":"wrap","borderWidth":" 0 0 6rpx","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","color":"#fb9a40","textAlign":"left","width":"100%","lineHeight":"1.5","fontSize":"30rpx","fontWeight":"600"}'>反馈内容</view>
					<view class="rich-text" :style='{"minHeight":"240rpx","border":"0px solid #f7de91","padding":"0 20rpx 0 0","boxShadow":"0 0px 0px rgba(182,158,18,.4),inset 0px 0px 0px 0px #fcf6d6","margin":"0","borderRadius":"0px","background":"none","width":"calc(100% - 8rpx)","lineHeight":"1.5","textIndent":"2em"}'>
						<rich-text :nodes="detail.fankuineirong"></rich-text>
					</view>
				</view>



				<view class="bottom-content bg-white tabbar border shop" :style='{"width":"100%","padding":"20rpx 0px","flexWrap":"wrap","background":"none","display":"flex","height":"auto"}'>

					<button :style='{"border":"0","padding":"0 20rpx","margin":"0","color":"rgb(255, 255, 255)","background":"rgb(255, 170, 51)","width":"auto","fontSize":"28rpx","height":"80rpx"}' v-if="userid&&isAuth('fankuixinxi','审核')" @tap="onSHTap">回复</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0","color":"rgb(255, 255, 255)","background":"rgb(255, 170, 51)","width":"auto","fontSize":"28rpx","height":"80rpx"}' v-if="!userid&&isAuthFront('fankuixinxi','审核')" @tap="onSHTap">回复</button>
				</view>
			</view>

			<!-- 确认完成弹窗 -->
			<uni-popup class="popup-content" ref="popup" type="center">
				<form class="popup-form" style="background: #fff;width: 300px;display: block;border-radius: 10px;padding: 20px;text-align: center;">
					<view class="">
						<!-- <view class="title">回复</view> -->
						<textarea style="width: 200px;" v-model="detail.shhf" placeholder="回复内容"></textarea>
						<!-- <input v-model="douyinId" placeholder="回复" name="input"></input> -->
					</view>
					<view class="btn-content">
						<button style="margin: 0 10px" @tap="onCloseWinTap" class="cu-btn bg-cyan">取消</button>
						<button style="margin: 0 10px" @tap="onFinishTap" class="cu-btn bg-red">确认</button>
					</view>
				</form>
			</uni-popup>
		</view>
	</view>
</mescroll-uni>
</view>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				id: '',
                userid: '',
				detail: {},
				swiperList: [],
				commentList: [],
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 3, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				user: {},
				count: 0,
				timer: null
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onLoad(options) {
			this.id = options.id;
            if(options.userid) {
                this.userid = options.userid;
            }
			// 渲染数据
			this.init();
		},
        onUnload() {
            if(this.timer) {
                clearInterval(this.timer);
            }
        },
		async onShow(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			this.btnColor = this.btnColor.sort(()=> {
				return (0.5-Math.random());
			});
			let crossCleanType = uni.getStorageSync('crossCleanType')
            if(crossCleanType) {
				uni.removeStorageSync('crossCleanType')
                res = await this.$api.info('fankuixinxi', this.id);
                this.detail = res.data;
            }
		},
		destroyed: function() {
			//window.clearInterval(this.inter);
		},
		methods: {
			// 支付
			onPayTap(){
				uni.setStorageSync('paytable','fankuixinxi');
				uni.setStorageSync('payObject',this.detail);
				this.$utils.jump('../pay-confirm/pay-confirm?type=1')
			},
            onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
                this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
            },
			// 跨表
			onAcrossTap(tableName,crossOptAudit,statusColumnName,tips,statusColumnValue){
				uni.setStorageSync('crossTable','fankuixinxi');
				uni.setStorageSync(`crossObj`, this.detail);
				uni.setStorageSync(`statusColumnName`, statusColumnName);
				uni.setStorageSync(`statusColumnValue`, statusColumnValue);
				uni.setStorageSync(`tips`, tips);
				if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
					var obj = uni.getStorageSync('crossObj');
					for (var o in obj){
						if(o==statusColumnName && obj[o]==statusColumnValue){
							this.$utils.msg(tips);
							return
						}
					}
				}
				this.$utils.jump(`../${tableName}/add-or-update?cross=true`);
			},
			// 获取详情
			async init(){
                if(this.timer) {
                    clearInterval(this.timer);
                }
				let res = await this.$api.info('fankuixinxi', this.id);
				this.detail = res.data;
				//修改富文本的图片样式
				this.detail.fankuineirong = this.detail.fankuineirong.replace(/img src/gi,"img style=\"width:100%;\" src");
			},

			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},

			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				mescroll.resetUpScroll()
			},

			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				mescroll.endSuccess(mescroll.size, this.hasNext);

            },



			onChatTap() {
				this.$utils.jump('../chat/chat')
			},
			// 下载
			download(url){
				let _this = this;
				url=_this.$base.url +  url;
				uni.downloadFile({
					url: url,
					success: (res) => {
						if (res.statusCode === 200) {
							_this.$utils.msg('下载成功');
							 window.open(url);
						}
					}
				});
			},
			//
			onCartTabTap() {
				this.$utils.tab('../shop-cart/shop-cart')
			},
			// 添加评论
			async onCommentTap() {
				this.$utils.jump(`../discussfankuixinxi/add-or-update?refid=${this.id}`)
			},
			onSHTap() {
				this.$refs.popup.open()
			},
			// 完成回复
			async onFinishTap() {
				if(!this.detail.shhf){
					this.$utils.msg('请填写审核回复');
					return
				}
				await this.$api.update('fankuixinxi', this.detail);
				this.$utils.msg('回复成功');
				this.$refs.popup.close();
			},
			// 关闭窗口
			onCloseWinTap() {
				this.$refs.popup.close()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.seat-list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		background: #FFFFFF;
		margin: 20upx;
		border-radius: 20upx;
		padding: 20upx;
		font-size: 30upx;
		.seat-item {
			width: 33.33%;
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-bottom: 20upx;
	
			.seat-icon {
				width: 50upx;
				height: 50upx;
				margin-bottom: 10upx;
			}
		}
	}
	
	audio {
		display: flex;
		flex-direction: column;
	}
	
	.audio /deep/ .uni-audio-default {
		width: inherit;
	}
</style>
