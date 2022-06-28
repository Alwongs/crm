import _ from 'lodash'

export default {


    setup() {



        const page = 1
        const pageSize = 15
        let pageCount = 0
        let chunkItems = []
        //let items = []




        const setupPagination = (allItems) => {
            chunkItems = _.chunk(allItems, pageSize)
            pageCount = _.size(chunkItems)
            return chunkItems[page - 1] || chunkItems[0]
        }
    }

}