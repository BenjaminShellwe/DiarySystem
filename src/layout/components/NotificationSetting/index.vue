<template>
    <div>
        <el-drawer
            title="通知设置"
            :visible.sync="isShow"
            direction="rtl"
            :size="$store.state.settings.mode == 'pc' ? '500px' : '300px'"
        >
            <el-card v-for="i in num" :key="i" body-style="padding: 5px;" style="padding: 3px; margin: 5px;" shadow="hover" class="box-card">
                <div slot="header" class="clearfix">
                    <span>卡片名称{{ i }}</span>
                    <el-button style="float: right; padding: 3px 0;" type="text" @click="handleClose(i)">×</el-button>
                </div>
                <div v-for="o in num" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                </div>
            </el-card>
            <el-empty description="加载完毕" />
        </el-drawer>
    </div>
</template>

<script>
export default {
    name: 'NotificationSetting',
    props: {},
    data() {
        return {
            num: ['1', '2', '3', '4', '5', '6'],
            active: '0',
            isShow: false
        }
    },
    mounted() {
        this.$eventBus.$on('global-notification-toggle', () => {
            this.isShow = !this.isShow
        })
    },
    methods: {
        handleClose(val) {
            this.num.splice(this.num.indexOf(val), 1)
        }
    }
}
</script>

<style lang="scss" scoped>
::v-deep .el-drawer__wrapper,
::v-deep .el-drawer__wrapper * {
    outline: none !important;
}
::v-deep .el-drawer__body {
    padding: 0 20px 20px;
    overflow: auto;
}
.el-form {
    margin-top: 20px;
    .el-alert {
        margin-top: 10px;
        line-height: initial;
    }
}
</style>
