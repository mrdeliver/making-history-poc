<template>
    <div>
      <button
      v-on:click="expandImageRessources=!expandImageRessources; expandTextRessources = false">
        Bildquellen</button>
      <button
      v-on:click="expandTextRessources=!expandTextRessources; expandImageRessources = false">
        Textquellen</button>
      <button>Audioquellen</button>
      <button>Lehrerband</button>
      <button>Arbeitsblätter</button>
    </div>
    <div v-if="expandImageRessources">
      <router-link v-for="ir in imageRessources" :key="ir.id"
      :to="route.fullPath + '/source/' + ir.id">
      {{ir.content[0].heading}} |
      </router-link>
    </div>
    <div v-if="expandTextRessources">
      <router-link v-for="ir in textRessources" :key="ir.id"
      :to="route.fullPath + '/source/' + ir.id">
      {{ir.content[0].heading}}  |
      </router-link>
    </div>
</template>

<script lang="ts">
import { ImageRessource } from '@/store/data/ressources/image-ressources';
import { Vue, Options } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router';
import { TextRessource } from '../../store/data/ressources/text-ressources';
import { Ressources } from '../../store/data/data-types';
import RessourceStore from '../../store/ressource-module';

@Options({
  name: 'ActionMenu',
})
export default class ActionMenu extends Vue {
  @Prop()
  private ressourceIds: Ressources = {} as Ressources;

  private imageRessources: ImageRessource[] = [];

  private textRessources: TextRessource[] = [];

  private expandImageRessources = false;

  private expandTextRessources = false;

  private route: RouteLocationNormalizedLoaded = useRoute();

  @Watch('ressourceIds')
  onRessourceIdsChanges(): void {
    this.imageRessources = RessourceStore.imageRessourcesWithIds(this.ressourceIds.imageSources);
    this.textRessources = RessourceStore.textRessourcesWithIds(this.ressourceIds.textSources);
    console.log(this.imageRessources);
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
