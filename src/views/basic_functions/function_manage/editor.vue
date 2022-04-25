<template>
    <div>
        <page-header title="来写日记">
            <template #content>
                <div>
                    <div style="margin-bottom: 5px;">有手就行</div>
                </div>
                <div class="inLine">
                    <p class="hover" @click="back">返回上一页</p>
                </div>
            </template>
        </page-header>
        <page-main title="写日记的正常人">
            <editor v-model="form.content" />
            <div class="preview" v-html="form.content" />
        </page-main>
        <page-main v-show="false" title="markdown 编辑器">
            <mavon-editor v-model="form.content2" style="z-index: 9;" />
            <div class="preview" v-html="mdContent" />
        </page-main>
    </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
    name: 'ComponentExampleEditor',
    components: {
        mavonEditor
    },
    data() {
        return {
            form: {
                content: '<h1>DiarySystemRedesign</h1>',
                content2: '# DiarySystemRedesign'
            }
        }
    },
    computed: {
        mdContent() {
            const mdit = mavonEditor.getMarkdownIt()
            return mdit.render(this.form.content2)
        }
    },
    methods: {
        back() {
            history.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
.hover {
    cursor: pointer;
}
.preview {
    margin-top: 10px;
    &::before {
        content: '预览：';
        display: block;
    }
}
</style>
