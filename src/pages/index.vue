<template>
  <div class="lui-header">
    <ul>
      <li>
        <router-link to="/vanilla-event">原生DOM事件</router-link>
      </li>
      <li>
        <router-link to="/simulate-event">自定义DOM事件</router-link>
      </li>
      <li>
        <router-link to="/vue-data-cons">Vue一致性</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
