<template>
  <router-link to="/page/1">page1</router-link>
  <router-link to="/page/2">page2</router-link>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class PageSlider extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
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
