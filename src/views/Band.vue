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
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Router, useRouter } from 'vue-router';
import PageStore from '../store/page-module';
import RessourceStore from '../store/ressource-module';
import GlossarStore from '../store/glossar-module';
import Glossar from '../components/menus/glossar/glossar.vue';
import ExpandableButton from '../components/menus/expandable-button.vue';

@Options({
  components: {
    Glossar,
    ExpandableButton,
  },
})
export default class Band extends Vue {
  private router: Router = useRouter();

  @Prop({ type: String })
  private bandId = '';

  created(): void {
    PageStore.buildPages(this.bandId);
    RessourceStore.buildRessources();
    GlossarStore.buildGlossarEntries();
    this.router.push({ name: 'Page', params: { pageId: '1', bandId: this.bandId } });
  }
}
</script>

<style lang="scss" >

@import "../colors";

#content-slider {
  height: 120px;
}

.glossarButton {
  position: fixed;
  top: 100px;
  left: 30px;
}

.glossarButtonColor {
  background-color: $color_orange;
}
</style>
