<template>
  <content-frame :contentBlocks="currentPage.content.studentContent"></content-frame>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import BandStore from '@/store/band-module';
import SubjectStore from '@/store/subject-module';
import { Content } from '@/store/data/data-types';
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
  private bandId = '';

  @Prop({ type: String })
  private pageId = '';

  private currentPage: Page = {} as Page;

  @Watch('pageId')
  onpageIdChange(value: string): void {
    this.updatePage(value);
  }

  created(): void {
    this.updatePage(this.pageId);
  }

  updatePage(pageId: string): void {
    this.currentPage = PageStore.singlePage(pageId);
    this.setLatestRead();
  }

  setLatestRead(): void {
    BandStore.setLatestReadOnBand({ bandId: this.bandId, page: this.currentPage });
    SubjectStore.setLatestReadOnSubject({ bandId: this.bandId, page: this.currentPage });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
