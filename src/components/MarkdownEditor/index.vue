<template>
    <editor ref="mdEditor" :initialValue="resume" :options="defaultOptions"/>
</template>

<script>
import resume from './default-resume';
import defaultOptions from './default-options';
import { Editor } from '@toast-ui/vue-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
export default {
    name: 'MarkdownEditor',
    data() {
        return {
            resume,
            defaultOptions,
        }
    },
    mounted() {
        console.log(this.$refs.mdEditor);
    },
    methods: {

    },
    components: {
        Editor,
    },
}
</script>