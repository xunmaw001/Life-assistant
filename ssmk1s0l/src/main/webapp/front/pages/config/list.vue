<template>
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view :style='{"padding":"0px 0","borderColor":"#21d5ae","alignItems":"flex-start","display":"block","justifyContent":"space-between","minHeight":"100vh","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230301/28586bd575de4721a42223a6e1d4b118.png) fixed","borderWidth":"0px 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
			<view class="cu-bar bg-white search" style="width:100%" :style="[{top:CustomBar + 'px'}]">
				<picker v-if="queryList.length>1" mode="selector" :range="queryList" range-key="queryName" :value="queryIndex" @change="queryChange" style="padding-left: 20upx;">
					<view><image style="width: 20upx;height: 33upx;" src="../../static/center/to.png"></image></view>
				</picker>
					<view v-if="queryIndex==0" class="search-form round">
						<text class="cuIcon-search"></text>
						<input v-model="searchForm.name" type="text" placeholder="名称" ></input>
					</view>
				<view class="action">
					<button @tap="search" class="cu-btn shadow-blur round">搜索</button>
				</view>
			</view>
			<view :style='{"width":"100%","alignItems":"flex-start","flexWrap":"wrap","background":"none","display":"flex","height":"auto"}'>

			
			<!-- 样式2 -->
			<view class="list" :style='{"width":"calc(100% - 220rpx)","padding":"24rpx","margin":"40rpx 0 0","flex":"1","height":"auto"}'>
				<view @tap="onDetailTap(product)" class="listm flex flex-between" :style='{"boxShadow":"0 0px 0px rgba(0,0,0,.3)","padding":"20rpx","margin":"0 0 40rpx","borderColor":"#eee #f7d3ba #eee","flexWrap":"wrap","background":"#fff","borderWidth":"0 6rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-for="(product,index) in list" :key="index">

				  <view class="listmr" :style='{"width":"calc(100% - 200rpx)","padding":"0","margin":"0","height":"auto"}'>
				  </view>

					<view :style='{"width":"100%","padding":"16rpx 20rpx","justifyContent":"space-between","display":"flex","height":"auto","order":"5"}'>
						<view :style='{"display":"flex"}' v-if="(userid && isAuth('config','修改')) || (!userid && isAuthFront('config','修改'))" @click.stop="onUpdateTap(product.id)">
							<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#666","display":"inline-block"}' class="cuIcon-edit"></text>
							<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#666","display":"inline-block"}'>修改</text>
						</view>
						<view :style='{"display":"flex"}' v-if="(userid && isAuth('config','删除')) || (!userid && isAuthFront('config','删除'))" @click.stop="onDeleteTap(product.id)">
							<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#666","display":"inline-block"}' class="cuIcon-delete"></text>
							<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#666","display":"inline-block"}'>删除</text>
						</view>
					</view>
				</view>
			</view>
			
			
			
			

			</view>
			
			
			
		</view>

		<button :style='{"border":"2rpx solid #fff","boxShadow":"0 4rpx 8rpx rgba(0,0,0,.3)","color":"#fff","bottom":"120rpx","right":"128rpx","outline":"none","borderRadius":"100%","background":"#1bd0a9","width":"88rpx","lineHeight":"88rpx","fontSize":"28rpx","position":"fixed","height":"88rpx","zIndex":"9999"}' v-if="userid && isAuth('config','新增')" class="add-btn" @click="onAddTap()">新增</button>
		<button :style='{"border":"2rpx solid #fff","boxShadow":"0 4rpx 8rpx rgba(0,0,0,.3)","color":"#fff","bottom":"120rpx","right":"128rpx","outline":"none","borderRadius":"100%","background":"#1bd0a9","width":"88rpx","lineHeight":"88rpx","fontSize":"28rpx","position":"fixed","height":"88rpx","zIndex":"9999"}' v-if="!userid && isAuthFront('config','新增')" class="add-btn" @click="onAddTap()">新增</button>
	</view>
</mescroll-uni>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				queryList:[
					{
						queryName:"名称",
					},
				],
				queryIndex: 0,
				list: [],
				lists: [],
                userid: '',
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				searchForm:{},
				CustomBar: '0'
			};
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onShow() {
			this.btnColor = this.btnColor.sort(()=> {
                                return (0.5-Math.random());
                        });
			this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		onLoad(options) {
            if(options.userid) {
                this.userid=options.userid;
            } else {
                this.userid = "";
            }
			this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		methods: {
            priceChange(price) {
                return Number(price).toFixed(2);
            },
            preHttp(str) {
                return str && str.substr(0,4)=='http';
            },
			//查询条件切换
			queryChange(e) {
				this.queryIndex=e.detail.value;
				this.searchForm.name="";
			},
			//类别搜索
			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				// 重置分页参数页数为1
				mescroll.resetUpScroll()
			},
			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				let params = {
					page: mescroll.num,
					limit: mescroll.size
				}


				if(this.searchForm.name){
					params['name'] = '%' + this.searchForm.name + '%'
				}



                let res = {}
                if(this.userid) {
                    res = await this.$api.page(`config`, params);
                } else {
                    res = await this.$api.list(`config`, params);
                }
				// 如果是第一页数据置空
				if (mescroll.num == 1) this.list = [];
				this.list = this.list.concat(res.data.list);
				let length = Math.ceil(this.list.length/6)
				let arr = [];
				for (let i = 0; i<length; i++){
					arr[i] = this.list.slice(i*6, (i+1)*6)
				}
				this.lists = arr
				if (res.data.list.length == 0) this.hasNext = false;
				mescroll.endSuccess(mescroll.size, this.hasNext);
			},
			// 详情
			onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
			},
			// 修改
			onUpdateTap(id){
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./add-or-update?id=${id}`)
			},
			// 添加
			onAddTap(){
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./add-or-update`)
			},
			onDeleteTap(id){
				var _this = this;
				uni.showModal({
					title: '提示',
					content: '是否确认删除',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.del('config', JSON.stringify([id]));
							_this.hasNext = true
							// 重置分页参数页数为1
							_this.mescroll.resetUpScroll()
						}
					}
				});
			},
			// 搜索
			async search(){
				this.mescroll.num = 1
				let searchForm = {
					page: this.mescroll.num,
					limit: this.mescroll.size
				}
				if(this.searchForm.name){
					searchForm['name'] = '%' + this.searchForm.name + '%'
				}
                let res = {};
                if(this.userid) {
                    res = await this.$api.page(`config`, searchForm);
                } else {
                    res = await this.$api.list(`config`, searchForm);
                }
				// 如果是第一页数据置空
				if (this.mescroll.num == 1) this.list = [];
				this.list = this.list.concat(res.data.list);
				let length = Math.ceil(this.list.length/6)
				let arr = [];
				for (let i = 0; i<length; i++){
					arr[i] = this.list.slice(i*6, (i+1)*6)
				}
				this.lists = arr
				if (res.data.list.length == 0) this.hasNext = false;
				this.mescroll.endSuccess(this.mescroll.size, this.hasNext);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.category-one .tab {
		cursor: pointer;
		padding: 0 40rpx;
		margin: 0 8rpx;
		color: #333;
		display: inline-block;
		font-size: 28rpx;
		border-color: #069ffa;
		line-height: 84rpx;
		border-radius: 0;
		background: url(http://codegen.caihongy.cn/20230302/3b144a1a5ced4b64b8db934732f7c1d9.png) no-repeat left top / auto 100%,url(http://codegen.caihongy.cn/20230302/fce76099e0354f56a963e5b468973bd2.png) no-repeat right top / auto 100%,url(http://codegen.caihongy.cn/20230302/3955c5ed7e3644018117b4eed2bafd9b.png) repeat-x center center / auto 100%;
		width: auto;
		border-width: 0;
		border-style: solid;
		text-align: center;
		min-width: 160rpx;
		height: 84rpx;
	}
	
	.category-one .tab.active {
		cursor: pointer;
		padding: 0 40rpx;
		margin: 0 8rpx;
		color: #fb9a40;
		font-weight: 600;
		display: inline-block;
		font-size: 28rpx;
		border-color: #069ffa;
		line-height: 84rpx;
		border-radius: 0;
		background: url(http://codegen.caihongy.cn/20230301/38e11dd1197d4249882ea73bcc0599c3.png) no-repeat left top / auto 100%,url(http://codegen.caihongy.cn/20230301/f3e3b52b072e462d9bb691ac5520b2e5.png) no-repeat right top / auto 100%,url(http://codegen.caihongy.cn/20230301/781016f47a3b4dd5b11c69a6d838e3ca.png) repeat-x center center / auto 100%;
		width: auto;
		border-width: 0 0 0px;
		border-style: solid;
		text-align: center;
		min-width: 160rpx;
		height: 84rpx;
	}
	
	.category-two .tab {
		cursor: pointer;
		padding: 0;
		margin: 0 0 20rpx;
		color: #555;
		display: inline-block;
		font-size: 28rpx;
		border-color: #FB9A40;
		line-height: 80rpx;
		border-radius: 24rpx;
		background: rgba(255,255,255,1);
		width: 100%;
		border-width: 2rpx 2rpx 8rpx 2rpx;
		border-style: inset;
		text-align: center;
		height: 88rpx;
	}
	
	.category-two .tab.active {
		cursor: pointer;
		padding: 0;
		margin: 0 0 20rpx;
		color: #333;
		font-weight: 600;
		display: inline-block;
		font-size: 28rpx;
		border-color: #FB9A40;
		line-height: 74rpx;
		border-radius: 24rpx;
		background: #fbd341;
		width: 100%;
		border-width: 2rpx 2rpx 8rpx 2rpx;
		border-style: solid;
		text-align: center;
		height: 80rpx;
	}
	
	.category-three .tab {
		cursor: pointer;
		padding: 0;
		color: #fff;
		background: burlywood;
		display: inline-block;
		width: 100%;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
	}
	
	.category-three .tab.active {
		cursor: pointer;
		padding: 0;
		color: #fff;
		background: #000;
		display: inline-block;
		width: 100%;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
	}
</style>
