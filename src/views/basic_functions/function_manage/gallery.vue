<template>
    <div>
        <page-header title="公开'处刑'页面">
            <template #content>
                <div class="inLine">
                    <p class="hover" @click="back">返回上一页</p>
                </div>
            </template>
        </page-header>
        <page-main title="日记浏览">
            <ul class="infinite-list" style="overflow: auto;">
                <li class="infinite-list-item">
                    <el-row>
                        <el-col v-for="i in count" :key="i" :span="8">
                            <el-card :body-style="{ padding: '0px' }" style="margin: 10px; padding: 5px;">
                                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                                <div style="padding: 14px;">
                                    <span>好吃的汉堡{{ i }}</span>
                                    <div class="bottom clearfix">
                                        <time class="time">{{ new Date() }}</time>
                                        <el-button type="text" class="button" @click="dialogVisible = true">立即处刑</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </li>
            </ul>
        </page-main>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
        >
            <span>这是一段信息</span>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>卡片名称</span>
                    <el-row style="float: right; padding: 0; margin: 0; width: 120px;">
                        <el-col :span="11" style="width: 50px;">
                            <transition :name="isFollow ? 'zoom' : '' " mode="out-in">
                                <!-- 爱心图标 -->
                                <svg-icon v-if="isFollow" key="like" name="plus-red" />
                                <svg-icon v-else key="unlike" name="plus-black" />
                            </transition>
                            <el-button style="padding: 0; margin: 0;" type="text" @click="isFollow = !isFollow">关注</el-button>
                        </el-col>
                        <el-col :span="11" style="width: 50px;">
                            <transition :name="isLike ? 'zoom' : '' " mode="out-in">
                                <!-- 爱心图标 -->
                                <svg-icon v-if="isLike" key="like" name="heart-red" />
                                <svg-icon v-else key="unlike" name="heart" />
                            </transition>
                            <el-button style="padding: 0; margin: 0;" type="text" @click="isLike = !isLike">点赞</el-button>
                        </el-col>
                    </el-row>
                </div>
            </el-card>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import PageMain from '@/components/PageMain'
export default {
    name: 'Gallery',
    components: {PageMain},
    data() {
        return {
            dialogVisible: false,
            count: 12,
            num: 0,
            isLike: false,
            isFollow: false
        }
    },
    methods: {
        back() {
            history.go(-1)
        }
    }
}
</script>

<style scoped>
.hover {
    cursor: pointer;
}
.time {
    font-size: 13px;
    color: #999;
}
.bottom {
    margin-top: 13px;
    line-height: 12px;
}
.button {
    padding: 0;
    float: right;
}
.image {
    width: 100%;
    display: block;
}
.clearfix::before,
.clearfix::after {
    display: table;
    content: "";
}
.clearfix::after {
    clear: both;
}
</style>
<style>
.like-num-wrapper {
    overflow-y: hidden;
}

/** 动画进行时的class **/
.zoom-enter-active,
.zoom-leave-active {
    transition: all 0.15s cubic-bezier(0.42, 0, 0.34, 1.55);
}

/** 设置进场开始的状态和离场结束的状态，都是缩放到0 **/
.zoom-enter,
.zoom-leave-to {
    transform: scale(0);
}

/** 设置进场结束的状态和离场开始的状态, 都是缩放到1 **/
.zoom-enter-to,
.zoom-leave {
    transform: scale(1);
}

</style>
