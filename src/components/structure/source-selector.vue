<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Ressource, Ressources, RessourceType } from '@/store/data/data-types';
import { Page } from '@/store/page-module';
import RessourceStore from '../../store/ressource-module';

@Options({
  name: 'SourceSelector',
})
export default class SourceSelector extends Vue {
  getCurrentRessource(ressourceId: string, type: string): Ressource {
    switch (type) {
      case RessourceType.IMAGE_SOURCE:
        return RessourceStore.imageRessource(ressourceId);
      case RessourceType.TEXT_SOURCE:
        return RessourceStore.textRessource(ressourceId);
      default:
        return {} as Ressource;
    }
  }

  getRessourceIdsOfTypeForPage(pageRessources: Ressources, type: RessourceType): string[] {
    switch (type) {
      case RessourceType.IMAGE_SOURCE:
        return pageRessources.imageSources;
      case RessourceType.TEXT_SOURCE:
        return pageRessources.textSources;
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
      default:
        return [];
    }
  }
}
</script>
