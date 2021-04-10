<template>
    <div class="menu">
      <div class="menu-item">
        <box-content-frame v-if="expanded('imageRessources')" frameFlavour="ressourcePreview">
          <div class="previewItem"
          v-for="ir in imageRessources" :key="ir.id"
          @click="router.push(buildPathToSource(ir))">
            <div class="previewItemHeading headingSource">{{ir.heading}}</div>
            <div class="previewContentPreview">{{ir.caption}} </div>
          </div>
        </box-content-frame>
        <button class="sources-button"
        :class="{'source-button-active': expanded('imageRessources')}"
        v-on:click="expand('imageRessources')">
          <fa :icon="pictureIcon" class="icon sources-icon"></fa>
          Bildquellen
        </button>
      </div>
      <div class="menu-item">
        <box-content-frame v-if="expanded('textRessources')" frameFlavour="ressourcePreview">
          <div class="previewItem"
          v-for="tr in textRessources" :key="tr.id"
          @click="router.push(buildPathToSource(tr))">
            <div class="previewItemHeading headingSource">{{tr.heading}}</div>
            <div class="previewContentPreview">{{tr.caption}} </div>
          </div>
        </box-content-frame>
        <button class="sources-button" :class="{'source-button-active': expanded('textRessources')}"
        v-on:click="expand('textRessources')">
          <fa :icon="textIcon" class="icon sources-icon"></fa>
          Textquellen
        </button>
      </div>
      <div class="menu-item">
        <button class="sources-button">
        <fa :icon="volumeIcon" class="icon sources-icon"></fa>Audioquellen</button>
      </div>
      <div class="menu-item">
        <button class="teacher-button">
        <fa :icon="bookIcon" class="icon teacher-icon"></fa>Lehrerband</button>
      </div>
      <div class="menu-item">
        <box-content-frame v-if="expanded('worksheets')" frameFlavour="worksheetPreview">
          <div class="previewItem"
          v-for="sheet in worksheets" :key="sheet.id"
          @click="router.push(buildPathToWorkSheet(sheet))">
            <div class="previewItemHeading headingWorksheets">{{sheet.heading}}</div>
          </div>
        </box-content-frame>
        <button
          class="worksheet-button"
          :class="{'worksheet-button-active'
          : expanded('worksheets')}"
        v-on:click="expand('worksheets')">
          <fa :icon="penIcon" class="icon worksheet-icon"></fa>
          Arbeitsblätter
        </button>
      </div>
    </div>

</template>

<script lang="ts">
import { ImageRessource } from '@/store/data/ressources/image-ressources';
import { Vue, Options } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import {
  RouteLocationNormalizedLoaded, useRoute, useRouter, Router,
} from 'vue-router';
import { Worksheet } from '@/store/data/worksheets';
import { TextRessource } from '../../../store/data/ressources/text-ressources';
import { Ressource, Ressources } from '../../../store/data/data-types';
import RessourceStore from '../../../store/ressource-module';
import PageStore, { Page } from '../../../store/page-module';
import BoxContentFrame from '../box-content-frame.vue';
import WorksheetStore from '../../../store/worksheet-module';

@Options({
  name: 'ActionMenu',
  components: { BoxContentFrame },
})
export default class ActionMenu extends Vue {
  private router: Router = useRouter();

  @Prop({ type: String })
  private pageId = '';

  @Prop({ type: String })
  private bandId = '';

  private currentPage: Page = {} as Page;

  private ressourceIds: Ressources = {} as Ressources;

  private imageRessources: ImageRessource[] = [];

  private pictureIcon = 'images';

  private textRessources: TextRessource[] = [];

  private textIcon = 'file';

  private penIcon = 'pen';

  private worksheetIds: string[] = [];

  private worksheets: Worksheet[] = [];

  expanded(key: string): boolean {
    return this.expandables[key];
  }

  private expandables: {[key: string]: boolean} = {
    textRessources: false,
    imageRessources: false,
    audioRessources: false,
    worksheets: false,
  }

  expand(itemToExpand: string): void {
    if (this.expandables[itemToExpand] === true) {
      this.collapseAll();
    } else {
      this.collapseAll();
      this.expandables[itemToExpand] = true;
    }
  }

  collapseAll(): void {
    Object.keys(this.expandables).forEach((expandable) => {
      this.expandables[expandable] = false;
    });
  }

  @Watch('pageId')
  onpageIdChange(value: string): void {
    this.updateMenuContents(value);
  }

  mounted(): void {
    this.updateMenuContents(this.pageId);
  }

  updateMenuContents(pageId: string): void {
    this.currentPage = PageStore.singlePage(pageId);

    this.ressourceIds = this.currentPage.ressources;
    this.worksheetIds = this.currentPage.worksheets;

    this.imageRessources = RessourceStore.imageRessourcesWithIds(this.ressourceIds.imageSources);
    this.textRessources = RessourceStore.textRessourcesWithIds(this.ressourceIds.textSources);
    this.worksheets = WorksheetStore.worksheetsWithIds(this.worksheetIds);
  }

  private volumeIcon = 'music';

  private bookIcon = 'book';

  private route: RouteLocationNormalizedLoaded = useRoute();

  buildPathToSource(res: Ressource): string {
    return `/band/${this.bandId}/page/${this.pageId}/source/${res.typ}/${res.id}`;
  }

  buildPathToWorkSheet(sheet: Worksheet): string {
    return `/band/${this.bandId}/page/${this.pageId}/worksheet/${sheet.id}`;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "src/colors";
@import "src/text";

.menu {
  display: flex;
  flex-wrap: wrap;
  min-width: 650px;

  .menu-item {
    margin: 5px;
    flex: 1 0 30%;
    position: relative;

    button{
      width: 100%;
      display: flex;
      outline: none;
      align-items: center;
      justify-content: left;
      border-radius: 20px;
      box-shadow: (1px 1px 2px rgba(0, 0, 0, 0.1));
      height: 35px;
      @include regular-text();

      .icon {
        width: 20px;
        height: 80%;
        margin-right: 5px;
        margin-left: 5px;
      }
    }

    .ressourcePreview {
      position: absolute;
      width: calc(650px/3 - 30px);
      bottom: 45px;
      border: 2px solid $color_yellow_4;
      background-color: $color_yellow_2;
    }

    .worksheetPreview {
      position: absolute;
      width: calc(650px/2 - 30px);
      bottom: 45px;
      border: 2px solid $color_blue;
      background-color: $color_blue_2;
    }
  }
}

.previewItem {
  margin-bottom: 5px;
}

.previewItemHeading {
  @include info-heading;

  &.headingSource {
    color: $color_yellow_8;
  }

  &.headingWorksheets {
    color: $color_blue_8;
  }
}

.previewContentPreview {
  @include detail-text;
  color: $color_yellow_7;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-height: 20px;
  max-width: 80%;
  overflow: hidden;
}

.sources-button{
  background-color: $color_yellow_2;
  color: $color_yellow_9;
  border: 2px solid transparent;

  &.source-button-active{
    border: 2px solid $color_yellow;
  }
}

.sources-icon{
    color: $color_yellow_4;
}

.worksheet-button{
  background-color: $color_blue_2;
  color: $color_blue_9;
  border: 2px solid transparent;

  &.worksheet-button-active{
    border: 2px solid $color_blue;
  }

  .worksheet-icon{
   color: $color_blue_3
}
}

.teacher-button{
  background-color: $color_red_2;
  color: $color_red_9;
  border: 2px solid transparent;

  &teacher-button-active{
    border: 2px solid $color_red;
  }

  .teacher-icon{
  color: $color_red_3
  }
}

</style>
