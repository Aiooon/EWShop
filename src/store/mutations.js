const mutations = {
    setIsLogin(state, payload){
        state.user.isLogin = payload;
    },
    addCart(state, payload){
        this.state.cartCount = payload.count
    }
}
export default mutations