
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            isloggedIn: false,
            authuser: {},
            isloginopen: false,
        }
    },
    mutations: {
        setloggedin(state,payload) {
           state.isloggedIn = payload;
       },
       setauthuser(state,payload) {
           state.authuser =payload;
        },
       setloginmodel(state,payload) {
            state.isloginopen = payload;
        },
    },
});

export default store;