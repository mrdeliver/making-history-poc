import {
  VuexModule, Module, Action, Mutation,
} from 'vuex-class-modules';
import Chapters, { Chapter } from './data/chapters';
import {
  Ressources, PageType, Content,
} from './data/data-types';
import Subchapters, { Subchapter } from './data/subchapters';
import store from './index';
import Bands, { Band } from './data/band';
// import band from './data/band';

export interface Page {
  type: PageType,
  id?: string,
  heading: string,
  subheading: string,
  content: Content,
  ressources: Ressources,
  worksheets: string[],
  backwardNavigation?: string,
  subchapterIds?: string[],
  relatedChapterId?: string,
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

  get bands(): Band[] {
    return Bands.result;
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

  get subchapterPages(): Page[] {
    return this.pages.filter((page) => page.type === PageType.SUB_CHAPTER);
  }

  getPageIdForChapterHeading(heading: string): string {
    const pageId = this.chapterPages.filter((chapterPage) => chapterPage.heading === heading)[0].id;
    return pageId || '';
  }

  getPageForSubchapterId(subchapterId: string): Page {
    const subchapter = Subchapters.result.filter((subchap) => subchap.id === subchapterId)[0];
    const page = this.subchapterPages.filter((subchapterPage) => {
      const sameHeading = (subchapterPage.heading === subchapter.name);
      const sameChapter = (subchapterPage.relatedChapterId === subchapter.chapterId);
      return sameHeading && sameChapter;
    })[0];
    return page;
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
    const matchingBand = this.bands.filter((b) => b.id === chapters[0].bandId)[0];
    const page = {
      type: PageType.BAND_OVERVIEW,
      id: undefined,
      heading: matchingBand.heading,
      subheading: '',
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
      const relatedSubchapters = subchapters.filter(
        (subchapter) => subchapter.chapterId === chapter.id,
      );

      const chapterPage = this.mapChapterToPage(chapter, relatedSubchapters);
      pages.push(chapterPage);

      relatedSubchapters.forEach((subchapter) => {
        pages.push(this.mapSubChapterToPage(subchapter, chapter));
      });
    });

    return pages;
  }

  mapChapterToPage(chapter: Chapter, subchapters: Subchapter[]): Page {
    const chapterResources = this.emptyRessources();
    return {
      type: PageType.CHAPTER,
      heading: chapter.name,
      subheading: '',
      content: chapter.content,
      ressources: chapterResources,
      worksheets: [],
      subchapterIds: subchapters.map((subchapter) => subchapter.id),
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
      relatedChapterId: chapter.id,
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
