<template>
  <div>
    Root foo: {{ rootFoo }} <br/>
    robots foo: {{ robotsFoo }} <br/>
    users foo: {{ usersFoo }} <br/>
    <br/>
    Root getter foo: {{ rootGetterFoo }} <br/>
    Root getter foo: {{ robotsGetterFoo }} <br/>
    Root getter foo: {{ usersGetterFoo }} <br/>
  </div>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'Home'}" exact>
          <img class="logo"  src="./assets/build-a-bot-logo.png">
          Build a bot!
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'Build'}" exact>
          <img class="logo"  src="./assets/build-a-bot-logo.png">
          Build
          </router-link>
        </li>
        <li>
          User:{{ user.userName }}
          <button @click="changeUsername()">Change</button>
        </li>
        <li class="nav-item cart">
          <router-link class="nav-link" to="/cart" exact>
          Cart
          </router-link>
        </li>
        <div class="cart-items">{{ cart.length }}</div>

      </ul>
    </nav>
  </header>
  <div class="container">
  <aside class="aside">
    <router-view name="sidebar"/>
  </aside>
  <main>
    <router-view/>
  </main>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'App',
  // data() {
  //   return {
  //     userName: 'John',
  //   };
  // },
  computed: {
    ...mapState({
      rootFoo: 'foo',
      usersFoo: (state) => state.users.foo,
    }),
    ...mapState('robots', { robotsFoo: 'foo' }),

    ...mapGetters({ rootGetterFoo: 'foo' }),
    ...mapGetters('robots', { robotsGetterFoo: 'foo' }),

    cart() {
      return this.$store.state.robots.cart;
    },
    // rootFoo() {
    //   return this.$store.state.foo;
    // },
    // robotsFoo() {
    //   return this.$store.state.robots.foo;
    // },
    // usersFoo() {
    //   return this.$store.state.users.foo;
    // },
    // rootGetterFoo() {
    //   return this.$store.getters.foo;
    // },
    // robotsGetterFoo() {
    //   return this.$store.getters['robots/foo'];
    // },
    // usersGetterFoo() {
    //   return this.$store.getters['users/foo'];
    // },
  },
  data() {
    return {
      user: { userName: 'John' },
    };
  },
  provide() {
    return { user: this.user };
  },

  methods: {
    changeUsername() {
      this.user.userName = 'Fred';
    },
  },
};
</script>

<style>

body{
  background: linear-gradient(to bottom, #555,#999);
  background-attachment: fixed;
}
</style>
<style scoped>
main{

  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.nav-item.cart {
 position: relative;
 margin-left: auto;
 border-right: none;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link{
  text-decoration: none;
  color: inherit;
}
.router-link-active{
  color:white;
}
.container{
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside{
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
.cart-items{
  position: relative;
  top: -5px;
  right:-9px;
  font-size: 18px;
  width:20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color:mediumaquamarine ;
}
</style>
