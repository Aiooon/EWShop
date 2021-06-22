const mutations = {
    setIsLogin(state, payload) {
        this.state.uesr.isLogin = payload;
    },
    addCart(state, payload){
        this.state.cartCount = payload.count
    }
}

export default mutations;