<template>
  <div>{{pageId}}</div>
  <router-link :to='sourceLink'>this is a link</router-link>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

@Options({
  name: 'page',
})
export default class Page extends Vue {
  private ok = ''

  @Prop({ type: String })
  private pageId = '';

  get sourceLink(): string {
    return `/page/${this.pageId}/source/1`;
  }

  @Watch('pageId')
  onpageIdChange(value: string): void{
    this.ok = '';
    console.log(value);
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
