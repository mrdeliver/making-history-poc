import {
  VuexModule, Module, Action, Mutation,
} from 'vuex-class-modules';
import store from './index';
import ImageRessources, { ImageRessource } from './data/ressources/image-ressources';
import TextRessources, { TextRessource } from './data/ressources/text-ressources';

@Module({ generateMutationSetters: true })
class RessourceModule extends VuexModule {
  // state
  private imageRessources: ImageRessource[] = [];

  private textRessources: TextRessource[] = [];

  // getters
  get imageRessourcesWithId(): CallableFunction {
    return (ressourceIds: string[]): ImageRessource[] => this.imageRessources.filter(
      (res) => ressourceIds.includes(res.id),
    );
  }

  get textRessourcesWithId(): CallableFunction {
    return (ressourceIds: string[]): TextRessource[] => this.textRessources.filter(
      (res) => ressourceIds.includes(res.id),
    );
  }

  @Mutation
  setTextRessources(ressources: TextRessource[]) {
    this.textRessources = ressources;
  }

  @Mutation
  setImageRessources(ressources: ImageRessource[]) {
    this.imageRessources = ressources;
  }

  @Action
  buildRessources(): void {
    // combine all ressources
    this.imageRessources = ImageRessources.result;
    this.textRessources = TextRessources.result;
  }
}

export default new RessourceModule({ store, name: 'ressources' });
