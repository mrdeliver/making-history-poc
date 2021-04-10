<template>
  <div class="sourceTextBlock">
    <div class="side-col"></div>
    <div class="center-col">
      <div class="sourceText">
        <div class="quotationStart">"</div>
        {{sourceText}}
        <div class="quotationFinish">"</div>
      </div>
      <div class="author">{{author}}</div>
      <div class="caption">{{caption}}</div>
    </div>
    <div class="side-col"></div>
  </div>
  <content-frame :contentBlocks="content"></content-frame>
</template>

<script lang="ts">
import { ContentBlock } from '@/store/data/data-types';
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import ContentFrame from '../content-frame.vue';
import Tipp from '../../menus/tipps/tipp.vue';

@Options({
  components: {
    ContentFrame,
    Tipp,
  },
})
export default class TextRessource extends Vue {
  @Prop({})
  private heading = '';

  @Prop({ type: String })
  private sourceText = '';

  @Prop({})
  private author = '';

  @Prop({ })
  private caption = '';

  @Prop({ })
  private content: ContentBlock[] = []
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "src/text";
@import "src/colors";

@mixin info-color-ressource {
  color: $color_yellow_8;
}

.sourceTextBlock {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;

  .sourceText {
    @include regular-text;
    font-weight: $font_weight_heading;
    border-radius: 15px;
    background-color: $color_grey_0;
    border: 3px solid $color_grey_1;
    color: $color_grey_9;
    text-align: justify;

    padding: 20px;
    margin-bottom: 10px;

    position: relative;

    @mixin quotationTypography {
      color: $color_grey_11;
      font-size: 70px;
    }

    .quotationStart {
      @include quotationTypography;
      position: absolute;
      top: 6px;
      left: 3px;
    }

    .quotationFinish {
      @include quotationTypography;
      position: absolute;
      right: 3px;
      bottom: -30px;
    }
  }

  .author {
      @include info-heading;
      @include info-color-ressource;
    }

  .caption {
    @include info-text;
    @include info-color-ressource;
  }
}

</style>
