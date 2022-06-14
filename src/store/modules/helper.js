export default {

    getters: {
        isAsideOpen(state)  {
            return state.isAsideOpen;
        }
    },
    state: {
        isAsideOpen: false
    },
    mutations: {
        TOGGLE_ASIDE(state) {
            state.isAsideOpen = !state.isAsideOpen;
        }
    }
}
