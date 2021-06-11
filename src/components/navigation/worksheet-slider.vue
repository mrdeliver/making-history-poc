<template>
  <div class="page-slider-container">
    <Slider
    :allLinks="sliderLinks"
    sliderFlavour="worksheetSlider"
    :currentIndex="worksheetId">
    </Slider>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import { Worksheet } from '@/store/data/worksheets';
import WorksheetStore from '@/store/worksheet-module';
import PageStore, { Page } from '../../store/page-module';
import Slider from '../slider/slider.vue';
import SliderLink from '../slider/slider';

@Options({
  components: {
    Slider,
  },
})
export default class WorksheetSlider extends Vue {
  @Prop({ type: String })
  private pageId = '';

  @Prop({ type: String })
  private bandId = '';

  private currentPage: Page = {} as Page;

  @Prop({ type: String })
  worksheetId = '';

  private allWorkesheets: Worksheet[] = []

  private sliderLinks: SliderLink [] = []

  created(): void {
    this.currentPage = PageStore.singlePage(this.pageId);
    this.sliderLinks = this.mapWorksheetToSliderLink(
      WorksheetStore.worksheetsWithIds(this.currentPage.worksheets),
    );
  }

  mapWorksheetToSliderLink(sheets: Worksheet[]): SliderLink[] {
    // primary --> link = page/pageId | content = name
    return sheets.map((sheet):SliderLink => ({
      primaryLink: {
        link: `/band/${this.bandId}/page/${this.pageId}/worksheet/${sheet.id}`,
        content: sheet.heading,
      },
      secondaryLink: {
        link: '',
        content: '',
      },
    }));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@import 'src/colors';
@import 'src/text';

.worksheetSlider {
   border-color: $color_blue;
  background-color: $color_blue_1;
  a {
    @include slider-heading;
    font-size: $font_size_text;
    color: $color_blue_6;
  }
  &.is-selected {
    a {
      @include slider-heading;
      color:$color_blue_9;
    }
    background-color: $color_blue_1;
    border-color: $color_blue;
  }
}
</style>
