import {
  VuexModule, Module, Action, Mutation,
} from 'vuex-class-modules';
import store from './index';
import Subjects, { Subject } from './data/subjects';
import { Page } from './page-module';

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

  @Mutation
  setLatestReadOnSubject(mutationObject: {bandId: string, page: Page}): void {
    this.allSubjects.forEach((subject) => {
      if (subject.bandIds.includes(mutationObject.bandId)) {
        // eslint-disable-next-line no-param-reassign
        subject.latestRead = {
          bandId: mutationObject.bandId,
          pageId: mutationObject.page.id || '',
          teaserText: mutationObject.page.heading,
        };
      }
    });
  }

  @Action
  fetchAllSubjects() {
    this.allSubjects = Subjects.result;
  }
}

export default new SubjectModule({ store, name: 'subjects' });
