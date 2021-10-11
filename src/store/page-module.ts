import {
  VuexModule, Module, Action, Mutation,
} from 'vuex-class-modules';
import Chapters, { Chapter } from './data/chapters';
import {
  Ressources, PageType, Content,
} from './data/data-types';
import Subchapters, { Subchapter } from './data/subchapters';
import store from './index';

export interface Page {
  type: PageType,
  id?: string,
  heading: string,
  subheading: string,
  content: Content,
  ressources: Ressources,
  worksheets: string[],
  backwardNavigation?: string,
}

export interface OverviewPage extends Page {
  chapterIds: string[],
  chapterHeadings: string[]
}

@Module({ generateMutationSetters: true })
class PageModule extends VuexModule {
  // state
  private pages: Page[] = [];

  private teacherBandState = false;

  // getters
  get allPages(): Page[] {
    return this.pages;
  }

  get singlePage(): CallableFunction {
    return (pageId: string): Page => this.pages[parseInt(pageId, 10)];
  }

  get getTeacherBandState(): boolean {
    return this.teacherBandState;
  }

  get chapterPages(): Page[] {
    return this.pages.filter((page) => page.type === PageType.CHAPTER);
  }

  getPageIdForChapterId(heading: string): string {
    const pageId = this.chapterPages.filter((chapterPage) => chapterPage.heading === heading)[0].id;
    return pageId || '';
  }

  @Mutation
  toggleTeacherBand() {
    this.teacherBandState = !this.teacherBandState;
  }

  @Mutation
  setPages(pages: Page[]) {
    this.pages = pages;
  }

  @Action
  buildPages(bandId: string): void {
    const chapters: Chapter[] = Chapters.result.filter((chapter) => chapter.bandId === bandId);
    console.log('chapters');
    console.log(chapters);
    const chapterIds = chapters.map((chapter) => chapter.id);
    const subchapters: Subchapter[] = Subchapters.result.filter(
      (subchapter) => chapterIds.includes(subchapter.chapterId),
    );

    const unindexedPages: Page[] = this.extractPages(
      chapters,
      subchapters,
    );

    unindexedPages.unshift(this.buildOverviewPageForBand(chapters));
    const indexPages = this.indexPages(unindexedPages);

    this.setPages(indexPages);
  }

  buildOverviewPageForBand(chapters: Chapter[]): OverviewPage {
    const page = {
      type: PageType.BAND_OVERVIEW,
      id: undefined,
      heading: 'TEST OVERVIEW',
      subheading: 'TEST OVERVIEW',
      content: {} as Content,
      ressources: this.emptyRessources(),
      worksheets: [],
      backwardNavigation: undefined,
      chapterIds: chapters.map((chapter) => chapter.id),
      chapterHeadings: chapters.map((chapter) => chapter.name),
    };

    return page;
  }

  extractPages(chapters: Chapter[], subchapters: Subchapter[]): Page[] {
    const pages: Page[] = [];
    chapters.forEach((chapter) => {
      const chapterPage = this.mapChapterToPage(chapter);
      pages.push(chapterPage);
      const relatedSubchapters = subchapters.filter(
        (subchapter) => subchapter.chapterId === chapter.id,
      );

      relatedSubchapters.forEach((subchapter) => {
        pages.push(this.mapSubChapterToPage(subchapter, chapter));
      });
    });

    return pages;
  }

  mapChapterToPage(chapter: Chapter): Page {
    const chapterResources = this.emptyRessources();
    return {
      type: PageType.CHAPTER,
      heading: chapter.name,
      subheading: '',
      content: chapter.content,
      ressources: chapterResources,
      worksheets: [],
    };
  }

  mapSubChapterToPage(subchapter: Subchapter, chapter: Chapter): Page {
    return {
      type: PageType.SUB_CHAPTER,
      heading: subchapter.name,
      subheading: chapter.name,
      content: subchapter.content,
      ressources: subchapter.ressources,
      worksheets: subchapter.worksheets,
    };
  }

  indexPages(unindexedPages: Page[]): Page[] {
    let chapterIdForBackwardNavigation = '';
    return unindexedPages.map((page, idx) => {
      const indexedPage: Page = page;
      indexedPage.id = idx.toString();
      if (page.type === PageType.CHAPTER) {
        chapterIdForBackwardNavigation = idx.toString();
      }
      indexedPage.backwardNavigation = chapterIdForBackwardNavigation;
      return indexedPage;
    });
  }

  emptyRessources(): Ressources {
    return {
      textSources: [],
      imageSources: [],
      audioSources: [],
      videoSources: [],
      multiImageSources: [],
    };
  }
}

export default new PageModule({ store, name: 'page' });
