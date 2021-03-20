<template>
  <div>PageId: {{pageId}}</div>
  <div>Sourceid: {{sourceId}} </div>
  <router-link :to="backLink">BACK</router-link>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router';

Vue.registerHooks([
  'beforeRouteEnter',
]);

@Options({})
export default class Source extends Vue {
  private route: RouteLocationNormalizedLoaded = useRoute();

  @Prop({ type: String })
  private sourceId = ''

  @Prop({ type: String })
  private pageId = ''

  get backLink(): string {
    const pageMatch = /page\/\d/;
    return `/${this.route.fullPath.match(pageMatch)}`;
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
