import {
  VuexModule, Module, Action, Mutation,
} from 'vuex-class-modules';
import store from './index';
import Bands, { Band } from './data/band';

@Module({ generateMutationSetters: true })
class BandModule extends VuexModule {
  private allBands = [] as Band[]

  get bandsWithIds(): CallableFunction {
    return ((searchIds: string[]): Band[] => {
      console.log(this.allBands);
      return this.allBands.filter((sb) => searchIds.includes(sb.id));
    }
    );
  }

  @Action
  fetchAllBands() {
    this.allBands = Bands.result;
  }
}

export default new BandModule({ store, name: 'bands' });
