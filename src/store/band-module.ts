import {
  VuexModule, Module, Action, Mutation,
} from 'vuex-class-modules';
import store from './index';
import Bands, { Band } from './data/band';
import { Page } from './page-module';

@Module({ generateMutationSetters: true })
class BandModule extends VuexModule {
  private allBands = [] as Band[]

  get bandsWithIds(): CallableFunction {
    return ((searchIds: string[]): Band[] => this.allBands.filter((sb) => searchIds.includes(sb.id))
    );
  }

  @Mutation
  setLatestReadOnBand(mutationObject: {bandId: string, page: Page}): void {
    this.allBands.forEach((band) => {
      if (band.id === mutationObject.bandId) {
        // eslint-disable-next-line no-param-reassign
        band.latestRead = {
          bandId: mutationObject.bandId,
          pageId: mutationObject.page.id || '',
          teaserText: mutationObject.page.heading,
        };
      }
    });
  }

  @Action
  fetchAllBands() {
    this.allBands = Bands.result;
  }
}

export default new BandModule({ store, name: 'bands' });
