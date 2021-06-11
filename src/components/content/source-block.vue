<template>
  <div class="row block">
    <tipp-area class="side-col"></tipp-area>
    <div class="center-col ">
      <div
        id="source-container"
        class="container-style"
        :class="style[sourceType].wrapperCss"
      >
        <div class="row pointer" v-on:click="expand=!expand">
          <div class="icon-col">
            <fa :icon="style[sourceType].icon" :class="style[sourceType].iconCss"></fa>
          </div>
          <div class="heading-col">
            {{ressourceBlock.heading}}
          </div>
        </div>
        <div v-if="expand" id="expand-container-row">
          <component
          :is="getComponentType(contentBlock)"
          v-bind="ressourceBlock"
          ></component>
        </div>
      </div>
    </div>
    <tipp-area class="side-col" :tipps="tipps"></tipp-area>
  </div>
</template>

<script lang="ts">
import { Ressource, RessourceType } from '@/store/data/data-types';
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import RessourceStore from '../../store/ressource-module';
import InlineImageRessource from './ressources/inline-image-ressource.vue';
import InlineTextRessource from './ressources/inline-text-ressource.vue';
import InlineVideoRessource from './ressources/inline-video-ressource.vue';
import InlineAudioRessource from './ressources/inline-audio-ressource.vue';

interface RessourceStyle {
  icon: string,
  iconCss: string,
  wrapperCss: string,
}

interface Style {
  [RessourceType.IMAGE_SOURCE]: RessourceStyle,
  [RessourceType.TEXT_SOURCE]: RessourceStyle,
  [RessourceType.AUDIO_SOURCE]: RessourceStyle,
  [RessourceType.VIDEO_SOURCE]: RessourceStyle
}

@Options({
  components: {
    InlineImageRessource,
    InlineTextRessource,
    InlineVideoRessource,
    InlineAudioRessource,
  },
})
export default class SourceBlock extends Vue {
  @Prop({ type: String })
  private id = ''

  @Prop()
  private sourceType: RessourceType = '' as RessourceType

  private sourceIcon = 'images';

  private style: Style = {
    [RessourceType.IMAGE_SOURCE]: {
      icon: 'images',
      iconCss: 'ressource-icon',
      wrapperCss: 'ressource',
    },
    [RessourceType.TEXT_SOURCE]: {
      icon: 'file',
      iconCss: 'ressource-icon',
      wrapperCss: 'ressource',
    },
    [RessourceType.AUDIO_SOURCE]: {
      icon: 'volume-up',
      iconCss: 'text',
      wrapperCss: 'yellow-bg',
    },
    [RessourceType.VIDEO_SOURCE]: {
      icon: 'images',
      iconCss: 'ressource-icon',
      wrapperCss: 'ressource',
    },
  }

  private expand = false;

  get icon(): string {
    return this.sourceIcon;
  }

  get ressourceBlock(): Ressource {
    return RessourceStore.ressource(this.sourceType, this.id);
  }

  getComponentType(): string {
    switch (this.sourceType) {
      case RessourceType.IMAGE_SOURCE:
        return 'InlineImageRessource';
      case RessourceType.TEXT_SOURCE:
        return 'InlineTextRessource';
      case RessourceType.AUDIO_SOURCE:
        return 'InlineAudioRessource';
      case RessourceType.VIDEO_SOURCE:
        return 'InlineVideoRessource';
      default:
        return 'DefaultBlock';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "src/text";
@import "src/colors";

%icon {
  display: block;
  width: 20px;
  height: 80%;
}

.ressource-icon {
  @extend %icon;
  color: $color_yellow_4;
}

.container-style {
  border-radius: 15px;
}

.icon-col {
  display: flex;
  align-items: center;
  padding-left: 7px;
  margin-right: 7px;
}

.heading-col {
  display: flex;
  @include regular-text;
  font-weight: $font_weight_heading;
  color: $color_yellow_8;
}

.border {
  border: 3px solid grey;
}

.ressource {
  background-color: $color_yellow_2;
  border: 2px solid $color_yellow;
}

.pointer {
  cursor: pointer;
}
</style>
