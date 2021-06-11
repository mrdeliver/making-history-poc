<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Ressource, Ressources, RessourceType } from '@/store/data/data-types';
import RessourceStore from '../../store/ressource-module';

@Options({
  name: 'SourceSelector',
})
export default class SourceSelector extends Vue {
  getRessourceIdsOfTypeForPage(pageRessources: Ressources, type: RessourceType): string[] {
    switch (type) {
      case RessourceType.IMAGE_SOURCE:
        return pageRessources.imageSources;
      case RessourceType.TEXT_SOURCE:
        return pageRessources.textSources;
      case RessourceType.VIDEO_SOURCE:
        return pageRessources.videoSources;
      case RessourceType.AUDIO_SOURCE:
        return pageRessources.audioSources;
      default:
        return [];
    }
  }

  getRessourcesForIds(ressourceIds: string[], type: RessourceType): Ressource[] {
    switch (type) {
      case RessourceType.IMAGE_SOURCE:
        return RessourceStore.imageRessourcesWithIds(ressourceIds);
      case RessourceType.TEXT_SOURCE:
        return RessourceStore.textRessourcesWithIds(ressourceIds);
      case RessourceType.VIDEO_SOURCE:
        return RessourceStore.videoRessourcesWithIds(ressourceIds);
      case RessourceType.AUDIO_SOURCE:
        return RessourceStore.audioRessourcesWithIds(ressourceIds);
      default:
        return [];
    }
  }

  getCurrentRessource(ressourceId: string, type: string): Ressource {
    switch (type) {
      case RessourceType.IMAGE_SOURCE:
        return RessourceStore.imageRessource(ressourceId);
      case RessourceType.TEXT_SOURCE:
        return RessourceStore.textRessource(ressourceId);
      case RessourceType.VIDEO_SOURCE:
        return RessourceStore.videoRessource(ressourceId);
      case RessourceType.AUDIO_SOURCE:
        return RessourceStore.audioRessource(ressourceId);
      default:
        return {} as Ressource;
    }
  }
}
</script>
