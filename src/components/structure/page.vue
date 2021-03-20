<template>
  <div>{{currentPage.content}}</div>
  <div>{{currentPage.type}}</div>
  <router-link :to='sourceLink'>this is a link</router-link>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import PageStore, { Page } from '../../store/page-module';

@Options({
  name: 'page',
})
export default class PageComponent extends Vue {
  @Prop({ type: String })
  private pageId = '';

  private currentPage: Page = {} as Page;

  @Watch('pageId')
  onpageIdChange(value: string): void{
    this.currentPage = PageStore.singlePage(value);
    // updat action buttons with page related actions
  }

  get sourceLink(): string {
    return `/page/${this.pageId}/source/1`;
  }

  mounted(): void {
    this.currentPage = PageStore.singlePage(this.pageId);
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
