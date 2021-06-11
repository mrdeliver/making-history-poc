<template>
  <div class="video-block">
    <div class="side-col"></div>
    <div class="center-col">
      <div class="video-container">
        <audio controls>
          <source :src="url" type="audio/ogg">
        </audio>
        <div class="author">{{author}}</div>
        <div class="caption">{{caption}}</div>
      </div>
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
export default class AudioRessource extends Vue {
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

  mounted() {
    console.log(this.heading);
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "src/text";
@import "src/colors";

@mixin info-color-ressource {
  color: $color_yellow_8;
}

iframe {
  width:100%;
  height:400px;
  border-radius: 15px;
}
.video-block {
  width: 100%;
  display: flex;

  .video-container {
    position: relative;
    width: 100%;
    height: 100%;

  }
}

audio {
    width: 100%;
  }

</style>
