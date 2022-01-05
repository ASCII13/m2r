export default {
    heading({level}, {entering}) {
        if (level === 1) {
            return {
                type: entering ? 'openTag' : 'closeTag',
                tagName: 'h1',
                classNames: ['name']
            }
        } else {
            return {
                type: entering ? 'openTag' : 'closeTag',
                tagName: `h${level}`,
                classNames: ['title']
            }
        }
    },
    link(node, {entering}) {
        return {
            type: entering ? 'openTag' : 'closeTag',
            tagName: 'a',
            classNames: ['link-color']
        }
    }
}