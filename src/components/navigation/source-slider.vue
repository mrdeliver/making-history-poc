<template>
  <div class="page-slider-container">
    <Slider
    :allLinks="sliderLinks"
    sliderFlavour="sourcesSlider"
    :currentIndex="ressourceId">
    </Slider>
  </div>
</template>

<script lang="ts">
import { Options, mixins } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

import { Ressource, Ressources, RessourceType } from '@/store/data/data-types';
import PageStore, { Page } from '../../store/page-module';
import Slider from '../slider/slider.vue';
import SliderLink from '../slider/slider';
import SourceSelector from '../structure/source-selector.vue';

@Options({
  components: {
    Slider,
  },
})
export default class SourceSlider extends mixins(SourceSelector) {
  @Prop({ })
  private type: RessourceType = '' as RessourceType

  @Prop({ type: String })
  private pageId = '';

  @Prop({ type: String })
  private bandId = '';

  private currentPage: Page = {} as Page;

  @Prop({ type: String })
  private ressourceId = '';

  private allSources: Ressources[] = []

  private sliderLinks: SliderLink [] = []

  created(): void {
    this.currentPage = PageStore.singlePage(this.pageId);
    const allSourceIds = this.getRessourceIdsOfTypeForPage(this.currentPage.ressources, this.type);
    this.sliderLinks = this.mapRessourceToSliderLink(
      this.getRessourcesForIds(allSourceIds, this.type),
    );
  }

  mapRessourceToSliderLink(ressources: Ressource[]): SliderLink[] {
    // primary --> link = page/pageId | content = name
    return ressources.map((res):SliderLink => ({
      primaryLink: {
        link: `/band/${this.bandId}/page/${this.pageId}/source/${this.type}/${res.id}`,
        content: res.heading,
      },
    }));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@import 'src/colors';
@import 'src/text';

.sourcesSlider {
  background-color: $color_yellow_1;
  a {
    @include slider-heading;
    font-size: $font_size_text;
    color: $color_yellow_6;
  }
  &.is-selected {
    a {
      @include slider-heading;
      color:$color_yellow_9;
    }
    background-color: $color_yellow_1;
    border-color: $color_yellow;
  }
}
</style>
