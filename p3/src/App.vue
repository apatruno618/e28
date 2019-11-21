<template>
  <div id='app'>
    <h1>TurkeyTable</h1>
    <p>Delicious Thanksgiving recipes designed to taste even better the next day</p>
    <img id='logo' alt='TurkeyTable logo' src='./assets/turkeytable-logo.png' />
    <nav class='topnav'>
      <ul>
        <li v-for='link in links' :key='link'>
          <router-link exact :to='{ name: link }'>{{ link }}</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      links: ['home', 'recipes', 'categories', 'favorites']
    };
  }
};
</script>

<style>
@import './assets/css/turkeytable.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
