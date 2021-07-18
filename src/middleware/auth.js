export default function ( next,store) {
    if (!store.state.isloggedIn) {
      next("/");
      store.commit("setloginmodel",true )
      }
      else {
        next()
      }
}