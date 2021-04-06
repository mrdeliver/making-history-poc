import {
  VuexModule, Module, Action, Mutation,
} from 'vuex-class-modules';
import FetchedWorksheets, { Worksheet } from './data/worksheets';
import store from './index';

@Module({ generateMutationSetters: true })
class WorksheetModule extends VuexModule {
  private worksheets: Worksheet[] = []

  @Mutation
  setWorksheets(newWorksheets: Worksheet[]): void {
    this.worksheets = newWorksheets;
  }

  worksheetsWithIds(ids: string[]): Worksheet[] {
    return this.worksheets.filter((worksheet) => ids.includes(worksheet.id));
  }

  worksheetWithId(id: string): Worksheet {
    const filteredWorksheets = this.worksheets.filter((worksheet) => id === worksheet.id);
    if (filteredWorksheets.length === 1) {
      return filteredWorksheets[0];
    }
    return this.emptyWorkSheet();
  }

  emptyWorkSheet(): Worksheet {
    return {
      id: '999999',
      heading: 'AB42',
      tasks: [],
    };
  }

  @Action
  buildWorksheets() {
    this.setWorksheets(FetchedWorksheets.result);
  }
}

export default new WorksheetModule({ store, name: 'worksheets' });
