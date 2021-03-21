import {
  VuexModule, Module, Action, Mutation,
} from 'vuex-class-modules';
import store from './index';
import GlossarEntries, { GlossarEntry } from './data/glossar';

@Module({ generateMutationSetters: true })
class GlossarModule extends VuexModule {
  // state
  private glossarEntries: GlossarEntry[] = [];

  // getters
  get glossarEntryWithId(): CallableFunction {
    return (glossarId: string): GlossarEntry => this.glossarEntries.filter(
      (entry) => (entry.id === glossarId),
    )[0];
  }

  @Mutation
  setGlossarEntries(glossarEntries: GlossarEntry[]) {
    this.glossarEntries = glossarEntries;
  }

  @Action
  buildGlossarEntries(): void {
    this.setGlossarEntries(GlossarEntries.result.entries);
  }
}

export default new GlossarModule({ store, name: 'glossarEntries' });
