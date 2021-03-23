<template>
  <component :is="getComponentFromType()" v-bind="currentRessource"></component>
</template>

<script lang="ts">
import { Ressource, RessourceType } from '@/store/data/data-types';
import { Options, mixins } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import SourceSelector from './source-selector.vue';
import ImageRessource from '../content/ressources/ImageRessource.vue';

@Options({
  components: {
    ImageRessource,
  },
})
export default class Source extends mixins(SourceSelector) {
  @Prop({ type: String })
  private ressourceId = '0';

  @Prop({ })
  private type: RessourceType = RessourceType.IMAGE_SOURCE;

  public currentRessource: Ressource = {} as Ressource;

  @Watch('ressourceId')
  onSourceIdChange(value: string): void {
    this.currentRessource = this.getCurrentRessource(value, this.type);
  }

  created(): void {
    this.currentRessource = this.getCurrentRessource(this.ressourceId, this.type);
  }

  getComponentFromType(): string {
    switch (this.type) {
      case RessourceType.IMAGE_SOURCE:
        return 'ImageRessource';
      default:
        return '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
