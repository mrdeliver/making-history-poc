<template>
  <div id="content-slider">
    <router-view id="slider-view" name='slider'></router-view>
  </div>
  <div id="content">
    <router-view id="content-view"></router-view>
  </div>
  <expandable-button
    class="glossarButton"
    buttonFlavour="glossarButtonColor"
    buttonOpenIcon="search">
    <glossar></glossar>
  </expandable-button>
  <expandable-button class="positionFixed">
    <action-menu :pageId="pageId"/>
  </expandable-button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { Router, useRouter } from 'vue-router';
import PageStore from '../store/page-module';
import RessourceStore from '../store/ressource-module';
import GlossarStore from '../store/glossar-module';
import Glossar from '../components/menus/glossar/glossar.vue';
import ExpandableButton from '../components/menus/expandable-button.vue';
import ActionMenu from '../components/menus/action-menu/action-menu.vue';

@Options({
  components: {
    Glossar,
    ExpandableButton,
    ActionMenu,
  },
})
export default class Band extends Vue {
  private router: Router = useRouter();

  @Prop({ type: String })
  private bandId = '';

  @Prop({ type: String })
  private pageId = '1';

  created(): void {
    PageStore.buildPages(this.bandId);
    RessourceStore.buildRessources();
    GlossarStore.buildGlossarEntries();
    this.router.push({ name: 'Page', params: { pageId: this.pageId, bandId: this.bandId } });
  }
}
</script>

<style lang="scss" >

@import "../colors";

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
  max-height: calc(100% - 125px);
}

.glossarButton {
  position: fixed;
  top: 100px;
  left: 30px;
}

.glossarButtonColor {
  background-color: $color_orange;
}

.positionFixed {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
</style>
