import {
  VuexModule, Module, Action,
} from 'vuex-class-modules';
import store from './index';
import GlossarEntries, {
  GlossarEntry, MethodEntries, Entry, MethodEntry,
} from './data/entries';

@Module({ generateMutationSetters: true })
class SearchEntryModule extends VuexModule {
  // state
  private glossarEntries: GlossarEntry[] = [];

  private methodEntries: MethodEntry[] = [];

  // getters
  get glossarEntryWithId(): CallableFunction {
    return (glossarId: string): GlossarEntry => this.glossarEntries.filter(
      (entry) => (entry.id === glossarId),
    )[0];
  }

  get methodEntryWithId(): CallableFunction {
    return (methodId: string): MethodEntry => this.methodEntries.filter(
      (entry: MethodEntry) => (entry.id === methodId),
    )[0];
  }

  get allGlossarEntries(): GlossarEntry[] {
    return this.glossarEntries;
  }

  get allMethodEntries(): MethodEntry[] {
    return this.methodEntries;
  }

  @Action
  buildEntries(): void {
    this.glossarEntries = GlossarEntries.result.entries;
    this.methodEntries = MethodEntries.result.entries;
  }
}

export default new SearchEntryModule({ store, name: 'glossarEntries' });
