<template>
  <PresenterImageRessource :url="url" v-if="presenterEnabled"></PresenterImageRessource>
  <div class="image-block">
    <div class="side-col"></div>
    <div class="center-col">
      <div class="button-container">
        <button @click="toggleAnnotations()"
        class="annotations-toggle"
        :class="annotationsToggleStateClass">
          <fa icon="lightbulb" class="icon"></fa> Annotationen {{annotationsToggleStateAction}}
        </button>
        <button @click="togglePresenterMode()"
                class="annotations-toggle left-margin">
          <fa icon="lightbulb" class="icon"></fa>Präsentationsmodus
        </button>
      </div>
      <div ></div>
      <div class="image-container">
        <div
        v-if="annotationsEnabled"
        class="annotation-container">
          <div
          v-for="(annotation, idx) in annotations"
          :key="idx" class="annotation"
          :style="{left: annotation.x + '%', top: annotation.y + '%'}"
          >
            <tipp :tipp="annotation.tipp" style="z-index: 100;"></tipp>
          </div>
        </div>
        <img :src="url" />
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
import PresenterImageRessource from '@/components/content/ressources/PresenterImageRessource.vue';
import ContentFrame from '../content-frame.vue';
import Tipp from '../../menus/tipps/tipp.vue';

@Options({
  components: {
    ContentFrame,
    Tipp,
    PresenterImageRessource,
  },
})
export default class ImageRessource extends Vue {
  @Prop({})
  private heading = '';

  @Prop({})
  private url = '';

  @Prop({})
  private annotations: Annotation[] = [];

  private annotationsEnabled = false;

  private annotationsToggleStateAction = 'an'

  private annotationsToggleStateClass = 'annotation-off';

  toggleAnnotations(): void {
    this.annotationsEnabled = !this.annotationsEnabled;
    this.annotationsToggleStateClass = this.annotationsEnabled ? 'annotation-on' : 'annotation-off';
    this.annotationsToggleStateAction = this.annotationsEnabled ? 'aus' : 'an';
  }

  private presenterEnabled = false;

  togglePresenterMode(): void {
    this.presenterEnabled = !this.presenterEnabled;
  }

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
.button-container {
  display:flex;
}

.annotations-toggle {
  border-radius: 20px;
  display: flex;
  align-content: center;
  height: 25px;
  @include detail-text;
  color: $color_green_9;
  margin-bottom: 10px;
  background-color: $color_green_1;
  outline: none;
  border: 2px solid transparent;

  &.annotation-of {
    border: 0px solid transparent;
  }

  &.annotation-on {
    border: 2px solid $color_green;
  }

  .icon {
    height: 80%;
    margin-right: 4px;
    color: $color_green;
  }
}

.left-margin {
  margin-left: 10px;
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
