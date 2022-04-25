<template>
    <div>
        <page-header title="个人账户">
            <template #content>
                <div class="inLine">
                    <p class="hover" @click="back">返回上一页</p>
                </div>
                &nbsp;
                <div class="inLine">
                    此页为个人账户的基本设置
                </div>
            </template>
        </page-header>
        <page-main>
            <el-tabs tab-position="left" style="height: auto; min-height: 600px;">
                <el-tab-pane label="基本设置">
                    <h2>个人中心</h2>
                    <div>
                        <el-row :gutter="20">
                            <el-col :span="8">
                                <el-card shadow="hover">
                                    <div slot="header">
                                        <span>登录人员 - {{ $store.state.user.account }}</span>
                                    </div>
                                    <el-row>
                                        <el-col>
                                            出现错误
                                            <!--                                            <image-upload action="/avatar/insert" style="height: 128px; width: 128px;" />-->
                                        </el-col>
                                        <!-- <el-col :span="12">-->
                                        <!-- <image-preview src="/avatar/query" />-->
                                        <!-- </el-col>-->
                                    </el-row>
                                </el-card>
                            </el-col>
                            <el-col :span="16">
                                <div>
                                    <el-card shadow="hover">
                                        <div slot="header" style="display: inline;">
                                            <el-row :gutter="2">
                                                <el-col :span="20">
                                                    <span style="font-size: 14px;">基本资料</span>
                                                </el-col>
                                                <el-col :span="2">
                                                    <el-button v-show="editable" style="margin: 0; padding: 5px;" type="primary" @click="changeEditable(1)">编辑</el-button>
                                                    <el-button v-show="done" style="margin: 0; padding: 5px;" type="success" @click="changeEditable(0)">完成</el-button>
                                                </el-col>
                                            </el-row>
                                        </div>
                                        <div>
                                            <el-form v-model="pageDataForm" label-width="100px" size="small" label-position="right">
                                                <div>
                                                    <el-form-item label="账户名称" prop="userName" class="inLine">
                                                        <el-input v-model="pageDataForm.userName" :disabled="editable" :placeholder="pageDataForm.userName" auto-complete="off" />
                                                    </el-form-item>
                                                    <el-form-item label="电子邮箱" prop="userEmail" class="inLine">
                                                        <el-tooltip content="绑定手机号码请于安全设置中修改" placement="top" effect="light">
                                                            <el-input v-model="pageDataForm.userEmail" disabled :placeholder="pageDataForm.userEmail" auto-complete="off" />
                                                        </el-tooltip>
                                                    </el-form-item>
                                                    <el-form-item label="账户状态" prop="userState" class="inLine">
                                                        <el-input v-model="pageDataForm.userState" :disabled="editable" :placeholder="pageDataForm.userState" maxlength="18" />
                                                    </el-form-item>
                                                    <el-form-item label="账户角色" prop="userRole" class="inLine">
                                                        <el-input v-model="pageDataForm.userRole" :disabled="editable" :placeholder="pageDataForm.userRole" />
                                                    </el-form-item>
                                                </div>
                                            </el-form>
                                        </div>
                                    </el-card>
                                </div>
                            </el-col>
                        </el-row>

                        <ul class="infinite-list" style="overflow: auto;">
                            <span>我的日记</span>
                            <li class="infinite-list-item">
                                <el-row>
                                    <el-col v-for="i in count" :key="i" :span="8">
                                        <el-card :body-style="{ padding: '0px' }" style="margin: 10px; padding: 5px;">
                                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡{{ i }}</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ new Date() }}</time>
                                                    <el-button type="text" class="button" @click="dialogVisible = true">点击查看</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </el-col>
                                </el-row>
                            </li>
                        </ul>
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
                                </div>
                            </el-card>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="dialogVisible = false">取 消</el-button>
                                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                            </span>
                        </el-dialog>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="安全设置" class="security">
                    <h2>安全设置</h2>
                    <div class="setting-list">
                        <div class="item">
                            <div class="content">
                                <div class="title">账户密码</div>
                                <div class="desc">当前密码强度：强</div>
                            </div>
                            <div class="action">
                                <el-button type="text" @click="editPassword">修改</el-button>
                            </div>
                        </div>
                        <div class="item">
                            <div class="content">
                                <div class="title">密保手机</div>
                                <div class="desc">已绑定手机：176****2321</div>
                            </div>
                            <div class="action">
                                <el-button type="text">修改</el-button>
                            </div>
                        </div>
                        <div class="item">
                            <div class="content">
                                <div class="title">备用邮箱</div>
                                <div class="desc">当前未绑定备用邮箱</div>
                            </div>
                            <div class="action">
                                <el-button type="text">绑定</el-button>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="用户管理" class="security">
                    <el-form ref="form" v-model="pagePropsValueTer" label-width="80px" size="mini">
                        <el-row>
                            <el-col>
                                <el-table
                                    :data="pagePropsValueBin"
                                    style="max-height: 350px;"
                                    height="337px"
                                    border
                                    size="mini"
                                    @cell-mouse-enter="handleGetDetails"
                                >
                                    <el-table-column
                                        fixed
                                        prop="userID"
                                        label="用户ID"
                                    />
                                    <el-table-column
                                        prop="userName"
                                        label="用户名称"
                                    />
                                    <el-table-column
                                        prop="userPassword"
                                        label="用户密码"
                                    />
                                    <el-table-column
                                        prop="userEmail"
                                        label="用户邮箱"
                                    />
                                    <el-table-column
                                        prop="userStatus"
                                        label="用户状态"
                                    />
                                    <el-table-column
                                        prop="userRole"
                                        label="用户角色"
                                    />
                                    <el-table-column
                                        fixed="right"
                                        label="操作"
                                        width="80px"
                                    >
                                        <template>
                                            <el-button type="text" size="small" @click="handleButtonVisible">编辑</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                <el-form-item label="用户ID">
                                    <el-input v-model="pagePropsValueTer.affairID" :placeholder="pagePropsValueBin.affairID" disabled />
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item label="用户名称">
                                    <el-input v-model="pagePropsValueTer.position" :placeholder="pagePropsValueBin.position" />
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item label="用户密码">
                                    <el-input v-model="pagePropsValueTer.positionStatus" :placeholder="pagePropsValueBin.positionStatus" />
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item label="用户状态">
                                    <el-input v-model="pagePropsValueTer.department" :placeholder="pagePropsValueBin.department" disabled />
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item label="用户角色">
                                    <el-input v-model="pagePropsValueTer.departmentStatus" :placeholder="pagePropsValueBin.departmentStatus" style="width: 210px;" />
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item size="mini">
                                    <el-button type="primary" @click="handleButtonEdit">修改</el-button>
                                    <el-button @click="pagePropsValueTer = {}, pageTemplateShow = false">取消</el-button>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </page-main>
    </div>
</template>

<script>
import axios from 'axios'
// import ImagePreview from '@/components/ImagePreview'

export default {
    name: 'PersonalSetting',
    // components: {ImagePreview},
    beforeRouteLeave(to, from, next) {
        if (['personalEditPassword'].includes(to.name)) {
            this.$store.commit('keepAlive/add', 'PersonalSetting')
        }
        next()
    },
    props: {},
    data() {
        return {
            pagePropsValueUni: {},
            pagePropsValueTer: [
                {}
            ],
            pagePropsValueBin: [
                {

                }
            ],
            pageQueryValue: this.$store.state.user.id,
            pageDataForm: {
                userName: '',
                userEmail: '',
                userState: '',
                userRole: ''

            },
            pageDataFormUni: {
                userID: '',
                realName: '',
                enterpriseName: '',
                department: '',
                phone: '',
                position: '',
                status: '',
                avatar: ''
            },
            value: '',
            dialogVisible: false,
            done: false,
            editable: true,
            count: 12,
            num: 0
        }
    },
    created() {
    },
    mounted() {
        this.handleQueryValue()
    },
    methods: {
        back() {
            history.go(-1)
        },
        handleSuccess(res) {
            console.log(res)
            if (res.error == '') {
                this.pageDataFormUni.avatar = res.data.path
                console.log(res)
            } else {
                console.log(res)
                this.$message.warning(res.error)
            }
        },
        editPassword() {
            this.$router.push({
                name: 'personalEditPassword'
            })
        },
        changeEditable(val) {
            if (val == '1') {
                this.done = !this.done
                this.editable = !this.editable
            } else {
                this.done = !this.done
                this.editable = !this.editable
                console.log(this.pageDataForm)
                this.pagePropsValueUni = this.pageDataForm
                axios({
                    method: 'post',
                    url: '/queryInfo/update/personal',
                    data: this.pagePropsValueUni
                }).then(response => {
                    this.$notify({
                        title: response.data.code,
                        message: response.data.msg,
                        type: response.data.data,
                        duration: 6500
                    })
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        handleQueryValue() {
            const that = this
            axios({
                method: 'post',
                url: '/queryInfo/personal',
                data: {
                    userID: this.pageQueryValue
                }
            }).then(function(response) {
                // console.log(response)
                that.pageDataForm = response.data.data[0]
                // console.log(that.pageDataForm)
            }).catch(function(error) {
                console.log(error)
            })
            axios({
                method: 'post',
                url: '/queryInfo/employee',
                data: {
                    userID: this.pageQueryValue
                }
            }).then(function(response) {
                // console.log(response)
                that.pageDataFormUni = response.data.data[0]
                // console.log(that.pageDataFormUni)
            }).catch(function(error) {
                console.log(error)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
::v-deep .el-tabs {
    .el-tabs__header .el-tabs__nav {
        .el-tabs__active-bar {
            z-index: 0;
            width: 100%;
            background-color: #e1f0ff;
            border-right: 2px solid #409eff;
        }
        .el-tabs__item {
            text-align: left;
            padding-right: 100px;
        }
    }
    .el-tab-pane {
        padding: 0 20px 0 30px;
    }
}
h2 {
    margin: 0 0 30px;
    font-weight: normal;
}
.basic {
    ::v-deep .headimg-upload {
        > div {
            text-align: center;
        }
        .el-upload-dragger {
            border-radius: 50%;
        }
    }
}
.security {
    .setting-list {
        .item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #e8e8e8;
            .content {
                .title {
                    margin-bottom: 5px;
                    color: #666;
                }
                .desc {
                    font-size: 14px;
                    color: #999;
                }
            }
            &:last-child {
                border-bottom: 0;
            }
        }
    }
}
.inLine {
    display: inline-block;
    clear: both;
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
