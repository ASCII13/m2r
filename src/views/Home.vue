<template>
  <div class="home">
    <top/>
    <markdown-editor class="editor"/>
  </div>
</template>

<script>
import Top from '@/components/Header';
import MarkdownEditor from '@/components/MarkdownEditor';
export default {
  components: {
    Top,
    MarkdownEditor,
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
}
.editor {
  height: calc(100vh - 5rem) !important;
}
</style>
