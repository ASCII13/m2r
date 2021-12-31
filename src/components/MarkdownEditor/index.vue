<template>
    <editor :initialValue="resume" :options="defaultOptions" :customHTMLRenderer="HTMLRender"/>
</template>

<script>
import resume from './default-resume';
import defaultOptions from './default-options';
import { Editor } from '@toast-ui/vue-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
export default {
    name: 'MarkdownEditor',
    components: {
        Editor,
    },
    data() {
        return {
            resume,
            defaultOptions,
        }
    }
}
</script>