<template>
  <div class="row block">
    <tipp-area class="side-col"></tipp-area>
    <div class="center-col">
      <div id="source-container" :class="style[sourceType].wrapperCss">
        <div class="row pointer" v-on:click="expand=!expand">
          <div class="icon-col">
            <fa :icon="style[sourceType].icon" :class="style[sourceType].iconCss"></fa>
          </div>
          <div class="heading-col">
            Quelle 1
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

interface RessourceStyle {
  icon: string,
  iconCss: string,
  wrapperCss: string,
}

interface Style {
  [RessourceType.IMAGE_SOURCE]: RessourceStyle,
  [RessourceType.TEXT_SOURCE]: RessourceStyle,
  [RessourceType.AUDIO_SOURCE]: RessourceStyle,
  [RessourceType.MOVIE_SOURCE]: RessourceStyle
}

@Options({
  components: {
    InlineImageRessource,
    InlineTextRessource,
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
      icon: 'image',
      iconCss: 'image-icon',
      wrapperCss: 'image-ressource',
    },
    [RessourceType.TEXT_SOURCE]: {
      icon: 'comment-alt',
      iconCss: 'text-icon',
      wrapperCss: 'text-ressource',
    },
    [RessourceType.AUDIO_SOURCE]: {
      icon: '',
      iconCss: 'text',
      wrapperCss: 'yellow-bg',
    },
    [RessourceType.MOVIE_SOURCE]: {
      icon: '',
      iconCss: 'text',
      wrapperCss: 'yellow-bg',
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
        return 'AudioSource';
      case RessourceType.MOVIE_SOURCE:
        return 'MovieSource';
      default:
        return 'DefaultBlock';
    }
  }

  mounted(): void {
    console.log('HI');
    console.log(this.id);
    console.log(this.ressourceBlock);
    console.log(this.style[this.sourceType].icon);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
%icon {
  display: block;
  width: 20px;
  height: 100%;
}

.image-icon {
  @extend %icon;
  color: rgb(255, 238, 0);
}

.text-icon {
  @extend %icon;
  color: rgb(103, 255, 97);
}

.icon-col {
  flex: 5%;
  padding-left: 5px;
}

.heading-col {
  flex: 95%;
}

.border {
  border: 3px solid grey;
}

.image-ressource {
  background: rgba(255, 255, 126, 0.37);
}

.text-ressource {
  background: rgba(150, 255, 146, 0.37);
}

.pointer {
  cursor: pointer;
}
</style>
