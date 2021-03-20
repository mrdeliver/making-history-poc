import {
  VuexModule, Module, Action, Mutation,
} from 'vuex-class-modules';
import Chapters, { Chapter } from './data/chapters';
import { ContentBlock, Ressources } from './data/data-types';
import Subchapters, { Subchapter } from './data/subchapters';
import store from './index';

export interface Page {
  type: string,
  id?: string,
  heading: string,
  subheading: string,
  content: ContentBlock[],
  ressources: Ressources
}

@Module({ generateMutationSetters: true })
class PageModule extends VuexModule {
  // state
  private pages: Page[] = [];

  // getters
  get allPages(): Page[] {
    return this.pages;
  }

  get singlePage(): CallableFunction {
    return (pageId: string): Page => this.pages[parseInt(pageId, 10)];
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

    this.setPages(this.indexPages(unindexedPages));
  }

  extractPages(chapters: Chapter[], subchapters: Subchapter[]): Page[] {
    const pages: Page[] = [];
    chapters.forEach((chapter) => {
      pages.push(this.mapChapterToPage(chapter));

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
    return {
      type: 'chapter',
      heading: chapter.name,
      subheading: '',
      content: chapter.content,
      ressources: chapter.ressources,
    };
  }

  mapSubChapterToPage(subchapter: Subchapter, chapter: Chapter): Page {
    return {
      type: 'subchapter',
      heading: subchapter.name,
      subheading: chapter.name,
      content: subchapter.content,
      ressources: subchapter.ressources,
    };
  }

  indexPages(unindexedPages: Page[]): Page[] {
    return unindexedPages.map((page, idx) => {
      const indexedPage: Page = page;
      indexedPage.id = idx.toString();
      return indexedPage;
    });
  }
}

export default new PageModule({ store, name: 'page' });