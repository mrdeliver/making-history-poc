<template>
    <div class="menu">
      <button class="sources-button"
      v-on:click="expandImageRessources=!expandImageRessources; expandTextRessources = false">
        <fa :icon="pictureIcon" class="icon sources-icon"></fa>
        Bildquellen</button>
      <button class="sources-button"
      v-on:click="expandTextRessources=!expandTextRessources; expandImageRessources = false">
        <fa :icon="textIcon" class="icon sources-icon"></fa>
        Textquellen</button>
      <button class="sources-button">
        <fa :icon="volumeIcon" class="icon sources-icon"></fa>Audioquellen</button>
      <button class="teacher-button">
        <fa :icon="penIcon" class="icon teacher-icon"></fa>Lehrerband</button>
      <button class="worksheet-button">
        <fa :icon="bookIcon" class="icon worksheet-icon"></fa>Arbeitsblätter</button>
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
import { TextRessource } from '../../../store/data/ressources/text-ressources';
import { Ressources } from '../../../store/data/data-types';
import RessourceStore from '../../../store/ressource-module';

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
  }

  private pictureIcon = 'images';

  private textIcon = 'file';

  private penIcon = 'pen';

  private volumeIcon = 'music';

  private bookIcon = 'book';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "src/colors";
@import "src/text";

.icon {
  width: 20px;
  height: 100%;
  margin-right: 5px;
  margin-left: 5px;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  min-width: 650px;
}

button{
  display: flex;
  flex: 1 0 30%; /* explanation below */
  justify-content: left;
  border-color: transparent;
  border-radius: 20px;
  margin: 5px;
  box-shadow: (1px 1px 2px rgba(0, 0, 0, 0.1));
  width: calc(475px/3);
  height: 35px;
  @include regular-text()
}

.sources-button{
  background-color: $color_yellow_2;
  color: $color_yellow_9
}

.sources-icon{
    color: $color_yellow_4;
}

.worksheet-button{
  background-color: $color_blue_2;
  color: $color_blue_9
}

.worksheet-icon{
   color: $color_blue_3
}

.teacher-button{
  background-color: $color_red_2;
  color: $color_red_9
}

.teacher-icon{
  color: $color_red_3
}
</style>
