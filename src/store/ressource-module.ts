import {
  VuexModule, Module, Action, Mutation,
} from 'vuex-class-modules';
import store from './index';
import ImageRessources, { ImageRessource } from './data/ressources/image-ressources';
import TextRessources, { TextRessource } from './data/ressources/text-ressources';
import VideoRessources, { VideoRessource } from './data/ressources/video-ressources';
import AudioRessources, { AudioRessource } from './data/ressources/audio-ressources';
import { RessourceType } from './data/data-types';

@Module({ generateMutationSetters: true })
class RessourceModule extends VuexModule {
  // state
  private imageRessources: ImageRessource[] = [];

  private textRessources: TextRessource[] = [];

  private videoRessources: VideoRessource[] = [];

  private audioRessources: AudioRessource[] = [];

  // getters
  get ressource(): CallableFunction {
    return (ressourceType: RessourceType, id: string) => {
      switch (ressourceType) {
        case RessourceType.IMAGE_SOURCE:
          return this.imageRessource(id);
        case RessourceType.TEXT_SOURCE:
          return this.textRessource(id);
        case RessourceType.AUDIO_SOURCE:
          return this.audioRessource(id);
        case RessourceType.VIDEO_SOURCE:
          return this.videoRessource(id);
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

  get videoRessource(): CallableFunction {
    return (id: string) => this.videoRessources.filter((re) => re.id === id)[0];
  }

  get audioRessource(): CallableFunction {
    return (id: string) => this.audioRessources.filter((re) => re.id === id)[0];
  }

  get imageRessourcesWithIds(): CallableFunction {
    return (ids: string[]): ImageRessource[] => ids.map((id) => this.imageRessource(id));
  }

  get textRessourcesWithIds(): CallableFunction {
    return (ids: string[]): TextRessource[] => ids.map((id) => this.textRessource(id));
  }

  get videoRessourcesWithIds(): CallableFunction {
    return (ids: string[]): VideoRessource[] => ids.map((id) => this.videoRessource(id));
  }

  get audioRessourcesWithIds(): CallableFunction {
    return (ids: string[]): AudioRessource[] => ids.map((id) => this.audioRessource(id));
  }

  @Mutation
  setTextRessources(ressources: TextRessource[]) {
    this.textRessources = ressources;
  }

  @Mutation
  setImageRessources(ressources: ImageRessource[]) {
    this.imageRessources = ressources;
  }

  @Mutation
  setVideoRessources(ressources: VideoRessource[]) {
    this.videoRessources = ressources;
  }

  @Mutation
  setAudioRessources(ressources: AudioRessource[]) {
    this.audioRessources = ressources;
  }

  @Action
  buildRessources(): void {
    this.imageRessources = ImageRessources.result;
    this.textRessources = TextRessources.result;
    this.videoRessources = VideoRessources.result;
    this.audioRessources = AudioRessources.result;
  }
}

export default new RessourceModule({ store, name: 'ressources' });
