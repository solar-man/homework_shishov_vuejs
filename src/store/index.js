import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        paymentList: [],
        page: 0
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentList = payload
        },
        setPaymentsItem(state, payload) {
            payload = {
                ...payload,
                id: state.paymentList.length + 1
            }
            state.paymentList.push(payload)
        },
        setPage(state, newPage) {
            state.page = newPage
        }
    },
    getters: {
        getPaymentList: state => state.paymentList,
        getItemNum: state => state.paymentList.length,
        getPaymentsListFullPrice: state => state.paymentsList.reduce((res, cur) => res + cur.price, 0),
        getPage: state => state.page,
        getPaymentListPage: state => state.paymentList.slice(state.page * 5, (state.page + 1) * 5)
    },
    actions: {
        fetchData({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([{
                            id: 1,
                            date: '13.05.2021',
                            category: 'Education',
                            price: 123
                        },
                        {
                            id: 2,
                            date: '12.05.2021',
                            category: 'Education',
                            price: 456
                        },
                        {
                            id: 3,
                            date: '11.05.2021',
                            category: 'Education',
                            price: 789
                        },
                        {   
                            id: 4,
                            date: '10.05.2021',
                            category: 'Education',
                            price: 0
                        }
                    ])
                }, 2000)
            })
            .then(res => {
                commit('setPaymentsListData', res)
            })
        }
    }
})