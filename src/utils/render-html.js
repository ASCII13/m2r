export default function({html}) {
    return `
    <style type="text/css">
    body {
        font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'Nanum Barun Gothic', 'Malgun Gothic', sans-serif;
    }
    .name {
        font-size: 24px;
        line-height: 28px;
        border-bottom: 3px double #999;
        margin: 52px 0 15px 0;
        padding-bottom: 7px;
    }
    .title {
        font-size: 22px;
        line-height: 23px;
        border-bottom: 1px solid #dbdbdb;
        margin: 20px 0 13px 0;
        padding-bottom: 7px;
    }
    .link-color {
        color: #4b96e6;
    }
    </style>
    <body>
    ${html}
    </body>`;
}