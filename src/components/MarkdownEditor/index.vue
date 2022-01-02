<template>
    <editor ref="editor" :initialValue="resume" :options="defaultOptions"/>
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
        this.$bus.$on('download', fileType => {
            if (fileType === 'Markdown') {
                const md = this.$refs.editor.invoke('getMarkdown');
                const blob = new Blob([md], {type: 'text/markdown'});
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');

                a.setAttribute('href', url);
                a.setAttribute('download', 'resume.md');
                a.click();

                URL.revokeObjectURL(url);
            } else if (fileType === 'PDF') {

            }
        });
    },
    beforeDestroy() {
        this.$bus.$off('download');
    },
    methods: {
    },
    components: {
        Editor,
    },
}
</script>