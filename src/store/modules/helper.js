export default {

    getters: {
        isAsideOpen(state)  {
            return state.isAsideOpen;
        },
        isCreateFoodOpen(state) {
            return state.isCreateFoodOpen;            
        }
    },
    state: {
        isAsideOpen: false,
        isCreateFoodOpen: false
    },
    mutations: {
        TOGGLE_ASIDE(state) {
            state.isAsideOpen = !state.isAsideOpen;
        },
        TOGGLE_CREATE_FOOD(state) {
            state.isCreateFoodOpen = !state.isCreateFoodOpen;
        }, 
        CLOSE_CREATE_FOOD(state) {
            state.isCreateFoodOpen = false;
        },                 
    }
}
