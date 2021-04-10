import {
  VuexModule, Module, Action, Mutation,
} from 'vuex-class-modules';
import store from './index';
import ImageRessources, { ImageRessource } from './data/ressources/image-ressources';
import TextRessources, { TextRessource } from './data/ressources/text-ressources';
import { RessourceType } from './data/data-types';

@Module({ generateMutationSetters: true })
class RessourceModule extends VuexModule {
  // state
  private imageRessources: ImageRessource[] = [];

  private textRessources: TextRessource[] = [];

  // getters
  get ressource(): CallableFunction {
    return (ressourceType: RessourceType, id: string) => {
      switch (ressourceType) {
        case RessourceType.IMAGE_SOURCE:
          return this.imageRessource(id);
        case RessourceType.TEXT_SOURCE:
          return this.textRessource(id);
        case RessourceType.AUDIO_SOURCE:
          throw Error('Not implemented');
        case RessourceType.MOVIE_SOURCE:
          throw Error('Not implemented');
        default:
          throw Error('Not implemented');
      }
    };
  }

  get imageRessource(): CallableFunction {
    return (id: string) => this.imageRessources.filter((re) => re.id === id)[0];
  }

  get textRessource(): CallableFunction {
    return (id: string) => this.textRessources.filter((re) => re.id === id)[0];
  }

  get imageRessourcesWithIds(): CallableFunction {
    return (ids: string[]): ImageRessource[] => ids.map((id) => this.imageRessource(id));
  }

  get textRessourcesWithIds(): CallableFunction {
    console.log(this.textRessources);
    return (ids: string[]): TextRessource[] => ids.map((id) => this.textRessource(id));
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
    this.imageRessources = ImageRessources.result;
    this.textRessources = TextRessources.result;
  }
}

export default new RessourceModule({ store, name: 'ressources' });
