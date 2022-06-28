export default {
    data() {
        return {
            breadcrumbs_items: [
                {
                    text: this.$route.params.entity,
                    disabled: false,
                    href: '/' + this.$route.params.entity,
                },
                {
                    text: '',
                    disabled: true,
                    href: this.$route.fullPath,
                }
            ]
        }
    },
    updated() {
        this.breadcrumbs_items[1].text = this.getEntityName
    }
}