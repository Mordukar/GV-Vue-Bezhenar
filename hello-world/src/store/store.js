import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: []
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    setNewPaymentsListData (state, payload) {
      state.paymentsList.push(payload)
    },
    deletePaymentsList (state, index) {
      state.paymentsList.splice(index, 1)
    },
    editPaymentsListData (state, newItem) {
      const index = state.paymentsList.findIndex(item => item.id === newItem.id)
      state.paymentsList = [...state.paymentsList.slice(0, index), newItem, ...state.paymentsList.slice(index + 1)]
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getPaymentsListLength: state => state.paymentsList.length
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            {
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
            },
            {
              id: 5,
              date: '13.05.2021',
              category: 'Education',
              price: 123
            },
            {
              id: 6,
              date: '12.05.2021',
              category: 'Education',
              price: 456
            },
            {
              id: 7,
              date: '11.05.2021',
              category: 'Education',
              price: 789
            },
            {
              id: 8,
              date: '10.05.2021',
              category: 'Education',
              price: 0
            },
            {
              id: 9,
              date: '13.05.2021',
              category: 'Education',
              price: 123
            },
            {
              id: 10,
              date: '12.05.2021',
              category: 'Education',
              price: 456
            },
            {
              id: 11,
              date: '11.05.2021',
              category: 'Education',
              price: 789
            },
            {
              id: 12,
              date: '10.05.2021',
              category: 'Education',
              price: 0
            }
          ])
        }, 1000)
      })
        .then(res => {
          commit('setPaymentsListData', res)
        })
    }
  }
})
