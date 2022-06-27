export default {
    getters: {
        loading(state)  {
            return state.loading;
        }
    },
    state: {
        loading: false
    },
    mutations: {
        START_LOADING(state) {
            state.loading = true;
        },
        STOP_LOADING(state) {
            state.loading = false;
        },
    }
}
