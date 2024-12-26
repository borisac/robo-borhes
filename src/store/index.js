/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-vars */
import { createStore } from 'vuex';
import robotsModule from './modules/robots';
import usersModule from './modules/users';

export default createStore({
  state: {
    foo: 'root-foo',
  },
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
  getters: {
    // foo(state) {
    //   return `root-getter/${state.foo}`;
    // },
  },
});
