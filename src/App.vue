<template>
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
      </ul>
    </nav>
  </header>
  <main>
    <router-view/>
  </main>
</template>

<script>

export default {
  name: 'App',
  // data() {
  //   return {
  //     userName: 'John',
  //   };
  // },
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
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
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
  width: 1084px;
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

</style>
