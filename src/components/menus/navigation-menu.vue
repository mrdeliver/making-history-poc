<template>
  <div>
    <div class="navigationMenuContainer">
      <div v-for="(chapter, idx) in filteredChapters"
      :key="idx"
      class="navigationEntry"
      @click="navigateToChaptetPage(chapter)"
      >
        {{chapter.heading}}
      </div>
      <div class="navigationSearchbar"><input type="search" v-model="searchString"/></div>
    </div>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "src/colors";
@import "src/style";
@import "src/text";

.navigationMenuContainer {

  width: 200px;
  height: 200px;
  background: transparent;
  position: relative;

  .navigationEntry {
    font-size: $font_size_text;
    font-weight: $font_weight_heading;
    margin-bottom: 5px;
    padding: 3px;
    padding-left: 8px;
    background-color: $color_grey_5;
    color: $color_grey_0;
    border-radius: 50px;
    text-overflow: ellipsis;
    @include drop-shadow-elevation-2;

    &:hover {
      cursor: pointer;
    }
  }

  .navigationSearchbar {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;

    input {
      @include drop-shadow-elevation-2;
      font-size: $font_size_text;
      font-weight: $font_weight_text;
      line-height: calc($font_size_text + 4);
      width: 100%;
      background-color: $color_grey_0;
      border: 3px transparent;
      border-radius: 30px;
      height: calc($font_size_text + 4);
      color: $color_grey_5;
      padding-left: 10px;
      box-sizing: content-box;
      //background-image: url('');
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
