<template>
  <div class="image-block">
    <div class="side-col"></div>
    <div class="center-col">
      <button @click="toggleAnnotations()"
      class="annotations-toggle"
      :class="annotationsToggleStateClass">
        <fa icon="lightbulb" class="icon"></fa> Annotationen {{annotationsToggleStateAction}}
      </button>
      <div class="image-container">
        <div
        v-if="annotationsEnabled"
        class="annotation-container">
          <button @click="() => this.$refs.instance.api.open()">
            Open the gallery
          </button>

          <vue-chocolat :items="items" ref="instance" />
        </div>
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
import vueChocolat from 'vue-chocolat'

@Options({
  components: {
    ContentFrame,
    Tipp,
    vueChocolat,
  },
})
export default class MultiImageRessource extends Vue {
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

  @Prop({})
  private author = '';

  @Prop({ })
  private caption = '';

  @Prop({ })
  private content: ContentBlock[] = []

  const items = [
  {
    src: 'https://media.giphy.com/media/IrFqA9fFseZaM/giphy.gif',
    title: 'Smart cow'
  },
  {
    src: 'https://media.giphy.com/media/bympeqWadSL3G/giphy.gif',
    title: 'Friendly cow'
  },
  {
    src: 'https://media.giphy.com/media/LilPRDHg9Qre0/giphy.gif'
  }
]
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "src/text";
@import "src/colors";

@mixin info-color-ressource {
  color: $color_yellow_8;
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
