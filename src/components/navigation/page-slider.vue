<template>
  <router-link v-for="page in allPages" :to="'/page/' + page.id" :key="page.id">
    {{page.heading}}
  </router-link>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import PageStore, { Page } from '../../store/page-module';

@Options({})
export default class PageSlider extends Vue {
  @Prop({ type: String })
  private pageId = '';

  private allPages: Page[] = []

  mounted(): void {
    this.allPages = PageStore.allPages;
  }
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
