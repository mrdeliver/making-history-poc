<template>
  <div class="row block">
    <tipp-area class="side-col"></tipp-area>
    <div class="center-col">
      <div id="source-container" class="border yellow-bg">
        <div class="row pointer" v-on:click="expand=!expand">
          <div class="icon-col">
            <fa :icon="icon" class="icon"></fa>
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

@Options({
  components: {
    InlineImageRessource,
  },
})
export default class SourceBlock extends Vue {
  @Prop({ type: String })
  private id = ''

  @Prop({})
  private sourceType: RessourceType = RessourceType.IMAGE_SOURCE

  private sourceIcon = 'images';

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
        return 'TextSource';
      case RessourceType.AUDIO_SOURCE:
        return 'AudioSource';
      case RessourceType.MOVIE_SOURCE:
        return 'MovieSource';
      default:
        return 'DefaultBlock';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.icon {
  display: block;
  width: 20px;
  height: 100%;
  color: rgb(255, 238, 0);
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

.yellow-bg {
  background: rgba(255, 255, 126, 0.37);
}

.pointer {
  cursor: pointer;
}
</style>
