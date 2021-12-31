<template>
    <header class="header">
        <span class="logo">M2R</span>
        <span class="download">
            Download
            <ul class="d-menu">
                <li v-for="(item, index) in dOptions" :key="index" @click="downloadPDF(index)">{{item}}</li>
            </ul>
        </span>
        <span class="theme">
            Theme
            <ul class="t-menu">
                <li v-for="(item, index) in tOptions" :key="index">{{item}}</li>
            </ul>
        </span>
    </header>
</template>

<script>
export default {
    data() {
        return {
            tOptions: ['Normal'],
            dOptions: ['PDF', 'Markdown']
        }
    },
    mounted() {
    },
    methods: {
        downloadPDF(index) {
            if (index === 0)  window.alert('点击了下载PDF');
        },
    }
}
</script>

<style lang="scss" scoped>
.header {
    height: 5rem;
    background-color: black;
}
.base {
    display: inline-block;
    line-height: 5rem;
    color: white;
    font-family: Oswald;
    vertical-align: middle;
}
.logo {
    @extend .base;
    margin-left: 12rem;
    font-size: 2rem;
    letter-spacing: 1px;
}
.menu {
    @extend .base;
    font-size: 1.2rem;
    float: right;
    position: relative;
    cursor: pointer;
}
.theme {
    @extend .menu;
    margin-right: 2rem;
    &:hover > .t-menu {
        display: block;
    }
}
.download {
    @extend .menu;
    margin-right: 10rem;
    &:hover > .d-menu {
        display: block;
    }
}
ul {
    display: none;
    box-sizing: border-box;
    position: absolute;
    width: 10rem;
    margin: 0;
    padding: .5rem 0;
    list-style: none;
    z-index: 2;
    background-color: darkgrey;
    li {
        padding: 0 1.5rem;
        line-height: 2.8rem;
        font-size: 1rem;
        &:hover {
            background-color: darkolivegreen;
        }
    }
}
</style>