/* eslint-disable no-unused-vars */
/* eslint-disable no-template-curly-in-string */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
    foo: 'robots-foo',
  },
  mutations: {
    addRobotToCart(state, robot) {
      console.log('Adding robot to cart, mutations:', robot); // Proveri šta se dodaje
      if (robot) {
        state.cart.push(robot);
      } else {
        console.error('Invalid robot , mutations:', robot);
      }
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  getters: {
    foo(state) {
      return `robots-getter/${state.foo}`;
    },
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
  },
  actions: {
    getParts({ commit }) {
      axios.get('/api/parts')
        .then((result) => commit('updateParts', result.data)).catch(console.error);
    },

    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      console.log('Adding robot , actions:', robot); // Proveri šta se dodaje
      console.log('Adding cart , actions:', cart); // Proveri šta se dodaje
      return axios.post('/api/cart', cart).then(() => commit('addRobotToCart', robot)); // Logujemo greške
    },
  },
};
