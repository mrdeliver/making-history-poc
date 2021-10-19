<template>
  <div v-if="pageIsChapter">
    <chapter-outline :subchapterIds="currentPage.subchapterIds"></chapter-outline>
  </div>
  <div v-if="teacherBandState">
    <div class="infoContainer">
      <div class="teacherInfo" @click="toggleTeacherBand()">
      <div class="teacherInfoTextWrapper">
        <div class="teacherInfoText">Lehrerband</div>
      </div>
        <fa :icon="crossIcon" class="icon sources-icon"></fa>
      </div>
    </div>
    <content-frame :contentBlocks="currentPage.content.teacherContent"></content-frame>
  </div>
  <div v-if="pageIsBandOverview">
    <overview-frame :overviewPage="currentPage"></overview-frame>
  </div>
  <div v-else>
    <content-frame :contentBlocks="currentPage.content.studentContent"></content-frame>
  </div>
  <expandable-button class="positionFixed" buttonFlavour="actionMenuButton"
  @buttonToggeled="handleActionsMenuToggle($event)">
    <action-menu ref="actionMenu" :pageId="pageId" :bandId="bandId"/>
  </expandable-button>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import BandStore from '@/store/band-module';
import SubjectStore from '@/store/subject-module';
import PageStore, { Page } from '../../store/page-module';
import ContentFrame from '../content/content-frame.vue';
import ChapterOutline from '../content/chapter-outline.vue';
import OverviewFrame from '../content/overview-frame.vue';
import ActionMenu from '../menus/action-menu/action-menu.vue';
import ExpandableButton from '../menus/expandable-button.vue';
import { PageType } from '../../store/data/data-types';

@Options({
  name: 'page',
  components: {
    ContentFrame,
    ActionMenu,
    ExpandableButton,
    OverviewFrame,
    ChapterOutline,
  },
})
export default class PageComponent extends Vue {
  @Prop({ type: String })
  private bandId = '';

  @Prop({ type: String })
  private pageId = '';

  private pageIsBandOverview = false;

  private pageIsChapter = false;

  get teacherBandState(): boolean {
    return PageStore.getTeacherBandState;
  }

  $refs!: {
    actionMenu: ActionMenu,
  }

  handleActionsMenuToggle(buttonExpanded: Event):void {
    if (!buttonExpanded) {
      this.$refs.actionMenu.collapseItems();
    }
  }

  toggleTeacherBand(): void {
    PageStore.toggleTeacherBand();
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
    this.pageIsBandOverview = (this.currentPage.type === PageType.BAND_OVERVIEW);
    this.pageIsChapter = (this.currentPage.type === PageType.CHAPTER);
    this.setLatestRead();
  }

  setLatestRead(): void {
    BandStore.setLatestReadOnBand({ bandId: this.bandId, page: this.currentPage });
    SubjectStore.setLatestReadOnSubject({ bandId: this.bandId, page: this.currentPage });
  }

    private crossIcon = 'times';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "src/colors";
@import "src/text";
@import "src/size";
@import "src/style";

.teacherInfoTextWrapper {
  @include infoTextWrapper();
}

.infoContainer {
  @include infoContainer();

  .teacherInfo {
    @include infoBox();
    background-color: $color_red_1;
    color: $color_red;
    border-color: $color_red;

    .teacherInfoText {
      @include infoText();
    }

    .icon {
        @include infoIcon();
      }
    }
}

</style>
