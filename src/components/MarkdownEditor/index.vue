<template>
    <editor
        initialValue="test title"
        :options="defaultOptions"
        initialEditType="markdown"
        previewStyle="vertical"
    />
</template>

<script>
import defaultOptions from './default';
import { Editor } from '@toast-ui/vue-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
export default {
    name: 'MarkdownEditor',
    components: {
        Editor,
    },
    data() {
        return {
            defaultOptions,
        }
    }
}
</script>