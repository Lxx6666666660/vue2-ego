<template>
    <vue-ueditor-wrap v-model="msg" :config="myConfig"></vue-ueditor-wrap>
</template>
<!-- 添加文件 -->
<script>
import VueUeditorWrap from "vue-ueditor-wrap";
export default {
    data() {
        return {
            msg: "hello",
            myConfig: {
                // 编辑器不自动被内容撑高
                autoHeightEnabled: false,
                // 初始容器高度
                initialFrameHeight: 240,
                // 初始容器宽度
                initialFrameWidth: "100%",
                // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！部署在国外的服务器，如果无法访问，请自备梯子）
                serverUrl: "http://localhost:3000/api/upload",
                // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
                UEDITOR_HOME_URL: "/UEditor/",
            },
        };
    },
    components: {
        VueUeditorWrap,
    },
};
</script>

<style>
</style>