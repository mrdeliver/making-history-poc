<template>
  <content-frame :contentBlocks="currentPage.content"></content-frame>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import PageStore, { Page } from '../../store/page-module';
import ContentFrame from '../content/content-frame.vue';

@Options({
  name: 'page',
  components: {
    ContentFrame,
  },
})
export default class PageComponent extends Vue {
  @Prop({ type: String })
  private pageId = '';

  private currentPage: Page = {} as Page;

  @Watch('pageId')
  onpageIdChange(value: string): void {
    this.currentPage = PageStore.singlePage(value);
  }

  mounted(): void {
    this.currentPage = PageStore.singlePage(this.pageId);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
