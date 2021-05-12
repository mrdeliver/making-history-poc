<template>
  <div class="image-block">
    <div class="side-col"></div>
    <div class="center-col">
      <div ></div>
      <div class="image-container">
        <iframe :src="url"></iframe>
        <div class="author">{{author}}</div>
        <div class="caption">{{caption}}</div>
      </div>
    </div>
    <div class="side-col"></div>
  </div>
  <content-frame :contentBlocks="content"></content-frame>
</template>

<script lang="ts">
import { Annotation, ContentBlock } from '@/store/data/data-types';
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
export default class VideoRessource extends Vue {
  @Prop({})
  private heading = '';

  @Prop({})
  private url = '';

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

.image-block {
  width: 100%;
  display: flex;

  .image-container {
    position: relative;
    width: 100%;
    height: 100%;

    .annotation-container {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;

      .annotation {
        position: inherit;
      }
    }

    img {
      border-radius: 15px;
      width: 100%;
    }
  }
}

</style>
