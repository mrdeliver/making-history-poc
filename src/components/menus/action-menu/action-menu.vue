<template>
    <div class="menu">
      <div class="menu-item">
        <box-content-frame v-if="expandImageRessources" frameFlavour="ressourcePreview">
          <div class="previewItem"
          v-for="ir in imageRessources" :key="ir.id"
          @click="router.push(buildPathToRource(ir))">
            <div class="previewItemHeading">{{ir.heading}}</div>
            <div class="previewContentPreview">{{ir.caption}} </div>
          </div>
        </box-content-frame>
        <button class="sources-button" :class="{'source-button-active': expandImageRessources}"
        v-on:click="expandImageRessources=!expandImageRessources; expandTextRessources = false">
          <fa :icon="pictureIcon" class="icon sources-icon"></fa>
          Bildquellen
        </button>
      </div>
      <div class="menu-item">
        <box-content-frame v-if="expandTextRessources" frameFlavour="ressourcePreview">
          <router-link v-for="tr in textRessources" :key="tr.id"
          :to="buildPathToRource(tr)">
          {{tr.heading}}  |
          </router-link>
        </box-content-frame>
        <button class="sources-button" :class="{'source-button-active': expandTextRessources}"
        v-on:click="expandTextRessources=!expandTextRessources; expandImageRessources = false">
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
        <fa :icon="penIcon" class="icon teacher-icon"></fa>Lehrerband</button>
      </div>
      <div class="menu-item">
        <button class="worksheet-button">
              <fa :icon="bookIcon" class="icon worksheet-icon"></fa>Arbeitsblätter</button>
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
import { TextRessource } from '../../../store/data/ressources/text-ressources';
import { Ressource, Ressources } from '../../../store/data/data-types';
import RessourceStore from '../../../store/ressource-module';
import PageStore, { Page } from '../../../store/page-module';
import BoxContentFrame from '../box-content-frame.vue';

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

  private ressourceIds: Ressources = {} as Ressources;

  private currentPage: Page = {} as Page;

  private imageRessources: ImageRessource[] = [];

  private pictureIcon = 'images';

  private textRessources: TextRessource[] = [];

  private textIcon = 'file';

  private expandImageRessources = false;

  private expandTextRessources = false;

  @Watch('pageId')
  onpageIdChange(value: string): void {
    this.currentPage = PageStore.singlePage(value);
    this.ressourceIds = this.currentPage.ressources;
  }

  mounted(): void {
    this.currentPage = PageStore.singlePage(this.pageId);
    this.ressourceIds = this.currentPage.ressources;
  }

  private route: RouteLocationNormalizedLoaded = useRoute();

  @Watch('ressourceIds')
  onRessourceIdsChanges(): void {
    this.imageRessources = RessourceStore.imageRessourcesWithIds(this.ressourceIds.imageSources);
    this.textRessources = RessourceStore.textRessourcesWithIds(this.ressourceIds.textSources);
  }

  private penIcon = 'pen';

  private volumeIcon = 'music';

  private bookIcon = 'book';

  buildPathToRource(res: Ressource): string {
    return `/band/${this.bandId}/page/${this.pageId}/source/${res.typ}/${res.id}`;
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
  }
}

.previewItem {
  margin-bottom: 5px;
}

.previewItemHeading {
  @include info-heading;
  color: $color_yellow_8;
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
