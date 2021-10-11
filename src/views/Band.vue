<template>
  <div id="content-slider">
    <router-view id="slider-view" name='slider'></router-view>
  </div>
  <div id="content">
    <router-view id="content-view"></router-view>
  </div>
  <expandable-button style="z-index: 300"
    class="glossarButtonContainer"
    buttonFlavour="glossarButton"
    buttonOpenIcon="search">
    <entry-search></entry-search>
  </expandable-button>
  <back-button class="backButton">
  </back-button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Router, useRouter, useRoute } from 'vue-router';
import PageStore from '../store/page-module';
import RessourceStore from '../store/ressource-module';
import EntryStore from '../store/search-entry-module';
import WorksheetStore from '../store/worksheet-module';
import EntrySearch from '../components/menus/glossar/entry-search.vue';
import ExpandableButton from '../components/menus/expandable-button.vue';
import BackButton from '../components/menus/back-button.vue';
import ActionMenu from '../components/menus/action-menu/action-menu.vue';

@Options({
  components: {
    EntrySearch,
    ExpandableButton,
    BackButton,
    ActionMenu,
  },
})
export default class Band extends Vue {
  private router: Router = useRouter();

  @Prop({ type: String })
  private bandId = '';

  @Prop({ type: String })
  private pageId: string | string[] = '0';

  private route = useRoute();

  mounted(): void {
    // this.pageId = this.route.params.pageId;
  }

  created(): void {
    PageStore.buildPages(this.bandId);
    RessourceStore.buildRessources();
    EntryStore.buildEntries();
    WorksheetStore.buildWorksheets();
    this.router.push({ name: 'Page', params: { pageId: this.pageId, bandId: this.bandId } });
  }
}
</script>

<style lang="scss" >

@import "../colors";
@import "../style";

$slider_height: 115px;

#content-slider {
  height: $slider_height;
}

#content {
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar
  {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    background-color: $color_grey_1;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  box-sizing: content-box;
  height: calc(100% - 125px);
}

.glossarButtonContainer {
  position: fixed;
  top: 150px;
  left: 30px;
}

.glossarButton {
  @include drop-shadow-elevation-2;
  background-color: $color_orange;
}

.positionFixed {
  position: fixed;
  right: 20px;
  bottom: 20px;
}

.actionMenuButton {
  @include drop-shadow-elevation-1;
  background-color: $color_grey_5;
}

.backButton {
  position: fixed;
  left: 20px;
  bottom: 20px;
}
</style>
