import renderer from './html-renderer';

export default {
    usageStatistics: false,
    toolbarItems: [
        ['heading', 'bold', 'italic', 'hr', 'link'],
        ['ul', 'ol', 'indent', 'outdent'],
        ['scrollSync']
    ],
    customHTMLRenderer: renderer
}