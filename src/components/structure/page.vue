<template>
  <div v-if="teacherBandState">
    <div class="infoContainer">
      <div class="teacherInfo">Lehrerband</div>
    </div>
    <content-frame :contentBlocks="currentPage.content.teacherContent"></content-frame>
  </div>
  <div v-else>
    <content-frame :contentBlocks="currentPage.content.studentContent"></content-frame>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import BandStore from '@/store/band-module';
import SubjectStore from '@/store/subject-module';
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

  get teacherBandState(): boolean {
    return PageStore.getTeacherBandState;
  }

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

@import "src/colors";
@import "src/text";
@import "src/size";

.infoContainer {
  display: flex;
  justify-content: center;

  .teacherInfo {
    width: $slider-cell-active-with;
    padding-top: 2px;
    padding-bottom: 2px;
    text-align: center;
    background-color: $color_red_1;
    color: $color_red;
    border: 3px solid $color_red;
    border-radius: 50px;
    @include regular-text;
    font-weight: $font_weight_heading;
    z-index: 1000;
  }
}

</style>
