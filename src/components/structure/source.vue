<template>
  <div>PageId: {{pageId}}</div>
  <div>Sourceid: {{sourceId}} </div>
  <router-link :to="backLink"> BACK</router-link>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import {
  RouteLocationNormalizedLoaded, Router, useRoute, useRouter,
} from 'vue-router';

Vue.registerHooks([
  'beforeRouteEnter',
]);

@Options({})
export default class Source extends Vue {
  router: Router = useRouter()

  @Prop({ type: String })
  private sourceId = ''

  @Prop({ type: String })
  private pageId = ''

  private backLink = ''

  /* eslint class-methods-use-this: "off" */
  beforeRouteEnter(): void {
    console.log('route entered');
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
