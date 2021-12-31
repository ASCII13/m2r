export default {
    headling(node, context) {
        const {origin, entering} = context;
        const tag = origin();
        if (entering) {
            
        }
        return tag;
    }
}