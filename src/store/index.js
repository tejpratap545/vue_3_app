
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            isloggedIn: false,
            authuser:{}
        }
    },
    mutations: {
        setloggedin(state,payload) {
           state.isloggedIn = payload;
       },
        setauthuser(state,payload) {
           state.authuser =payload;
       },
    },
});

export default store;