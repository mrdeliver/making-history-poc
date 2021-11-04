<template>
  <div class="navigationMenuContainer">
    <div class="navigationEntriesContainer" @scroll="scrollHandler()">
      <div v-for="(chapter, idx) in filteredChapters"
      :key="idx"
      :class="navigationEntryClass"
      @click="navigateToChaptetPage(chapter)"
      >
        {{chapter.heading}}
      </div>
    </div>
    <div class="navigationSearchbar"><input type="search" v-model="searchString"/></div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import {
  useRouter, Router,
} from 'vue-router';
import PageStore, { Page } from '../../store/page-module';
import buildPageLinkString from '../navigation/link-construction';

@Options({
  name: 'NavigationMenu',
})
export default class NavigationMenu extends Vue {
  private router: Router = useRouter();

  @Prop({ type: String })
  private bandId = '1';

  private chapters: Page[] = [];

  mounted(): void {
    this.chapters = PageStore.chapterPages;
  }

  private searchString = '';

  get filteredChapters(): Page[] {
    if (this.searchString !== '') {
      return this.chapters.filter(
        (chapter: Page) => chapter.heading.toLowerCase().includes(this.searchString.toLowerCase()),
      );
    }
    return this.chapters;
  }

  navigateToChaptetPage(chapter: Page): void {
    const navigationLink = buildPageLinkString(this.bandId, chapter.id);
    this.router.push(navigationLink);
  }

  private navigationEntryClass = 'navigationEntry'

  private navigationEntries: Element[] = []

  scrollHandler(): void {
    this.navigationEntries.forEach((entry) => {
      console.log(entry);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">

// clean up this shit css wise!
@import "src/colors";
@import "src/style";
@import "src/text";

.navigationMenuContainer {

  width: 300px;
  height: 200px;
  background: transparent;
  position: relative;

  .navigationEntriesContainer {
    margin: 4px;
    height: 100%;
    position: absolute;
    bottom: 20px;
    left: 0px;
    width: 100%;
    overflow-x: visible;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }

    .navigationEntry {
      font-size: $font_size_text;
      font-weight: $font_weight_heading;
      margin-bottom: 7px;
      white-space: nowrap;
      overflow: hidden;
      padding: 3px;
      padding-left: 8px;
      background-color: $color_grey_5;
      color: $color_grey_0;
      border-radius: 50px;
      text-overflow: ellipsis;
      @include drop-shadow-elevation-1;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .navigationSearchbar {
    position: absolute;
    bottom: 0px;
    left: 0px;
    margin: 4px;
    width: 100%;

    input {
      @include drop-shadow-elevation-2;
      font-size: $font_size_text;
      font-weight: $font_weight_text;
      line-height: calc(#{$font_size_text} + 4);
      width: 100%;
      background-color: $color_grey_0;
      border: 3px transparent;
      border-radius: 30px;
      height: calc(#{$font_size_text} + 4);
      color: $color_grey_5;
      padding-left: 10px;
      box-sizing: content-box;
      background-repeat: no-repeat;
      background-position: left center;
      box-sizing: border-box;

      &:focus {
        border: 2px solid $color_grey_3;
        outline: none;
      }
    }
  }
}

</style>
