import {
  VuexModule, Module, Action, Mutation,
} from 'vuex-class-modules';
import store from './index';
import Subjects, { Subject } from './data/subjects';

@Module({ generateMutationSetters: true })
class SubjectModule extends VuexModule {
  private allSubjects = [] as Subject[]

  get subjects(): Subject[] {
    return this.allSubjects;
  }

  get subjectWithId(): CallableFunction {
    return (searchId: string): Subject => {
      const foundSubject = this.subjects.filter((sb) => sb.id === searchId).pop();
      return foundSubject || {} as Subject;
    };
  }

  @Action
  fetchAllSubjects() {
    this.allSubjects = Subjects.result;
  }
}

export default new SubjectModule({ store, name: 'subjects' });
