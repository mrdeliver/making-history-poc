<template>
  <content-frame :contentBlocks="currentRessource.content"></content-frame>
</template>

<script lang="ts">
import { Ressource, RessourceType } from '@/store/data/data-types';
import { Options, mixins } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import SourceSelector from './source-selector.vue';

@Options({})
export default class Source extends mixins(SourceSelector) {
  @Prop({ type: String })
  private ressourceId = '';

  @Prop({ })
  private type: RessourceType = RessourceType.TEXT_SOURCE

  private currentRessource: Ressource = {} as Ressource;

  @Watch('ressourceId')
  onSourceIdChange(value: string): void {
    this.currentRessource = this.getCurrentRessource(value, this.type);
  }

  mounted(): void {
    this.currentRessource = this.getCurrentRessource(this.ressourceId, this.type);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
