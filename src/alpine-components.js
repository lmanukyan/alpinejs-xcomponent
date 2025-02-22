document.addEventListener('alpine:init', () => {
    Alpine.data('template', function(id) {
        return {
            props: {},
            bind: {
                ['x-modelable']: 'props',
                ['x-html']() {
                    if (Object.keys(this.props).length > 0) {
                        return document.getElementById(id).innerHTML
                    }
                    return '';
                },
            },
        }
    });
});