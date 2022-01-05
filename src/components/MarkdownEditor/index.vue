<template>
    <editor ref="editor" :initialValue="resume" :options="defaultOptions"/>
</template>

<script>
import printJS from 'print-js';
import resume from './default-resume';
import renderHTML from '@/utils/render-html';
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
                const html = this.$refs.editor.invoke('getHTML');
                const render = renderHTML({html});
                
                printJS({
                    type: 'raw-html',
                    printable: render,
                    targetStyles: ['*'],
                });
            }
        });
    },
    beforeDestroy() {
        this.$bus.$off('download');
    },
    components: {
        Editor,
    },
}
</script>