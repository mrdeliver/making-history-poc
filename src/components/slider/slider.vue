<template>
  <div class="slider-container">
    <div class="overlay-R"></div>
    <div class="overlay-L"></div>
    <flickity ref="flickity" :options="flickityOptions">
      <div ref="myWrapper"
      v-for="(link, index) in allLinks" :key="index"
      :class="getCurrentCellFlavour(link)"
      class="carousel-cell"
      @click="setRoute(link.primaryLink.link)">
        <div class="wrapper" :class="{'wrapper-is-active': subIsActive(link.primaryLink.link)}">
          <router-link :to="link.primaryLink.link">{{link.primaryLink.content}}</router-link>
          <router-link
            v-show="subIsActive(link.primaryLink.link) && link.secondaryLink.content != ''"
            class="secondaryLink"
            @click.stop
            :to="link.secondaryLink.link">
              {{link.secondaryLink.content}}
           </router-link>
        </div>
      </div>
    </flickity>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import Flickity from 'vue-flickity/src/flickity.vue';
import { Router, useRouter, useRoute } from 'vue-router';
import { PageType } from '@/store/data/data-types';
import SliderLink from './slider';

@Options({
  components: {
    Flickity,
  },
})

export default class Slider extends Vue {
  private currentRoute = useRoute();

  @Prop({ })
  allLinks: SliderLink[] = [];

  @Prop({})
  currentIndex = '0';

  private observer = {} as MutationObserver

  @Watch('currentIndex')
  onCurrentIndexChange(): void {
    this.scrollSliderToCurrentIndex();
  }

  routeIsActive(currentPath: string): string {
    return this.currentRoute.path.includes(currentPath) ? 'router-link-active' : '';
  }

  subIsActive(input: string): boolean {
    const paths = Array.isArray(input) ? input : [input];
    return paths.some((path) => this.$route.path.indexOf(path) === 0);
  }

  mounted(): void {
    this.scrollSliderToCurrentIndex();
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        const newValue = m.target as HTMLElement;
        const newValueString: string = newValue.getAttribute(m.attributeName as string) as string;
        this.$nextTick(() => {
          this.onClassChange(newValueString, m.oldValue as string);
        });
      });
    });

    const collection = document.getElementsByClassName('carousel-cell');
    for (let i = 0; i < collection.length; i += 1) {
      const collectionElementAsNode = collection[i] as Node;
      this.observer.observe(collectionElementAsNode, {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ['class'],
      });
    }

    this.setBaseFontSize();
    this.resizeFont();
  }

  setBaseFontSize():void {
    const collection = document.getElementsByClassName('carousel-cell');
    for (let i = 0; i < collection.length; i += 1) {
      const collectionChild = collection[i].children[0].children[0] as HTMLElement;
      collectionChild.style.fontSize = '16px';
    }
  }

  onClassChange(classAttrValue: string, oldAttrValue: string):void {
    const classList = classAttrValue.split(' ');
    this.setBaseFontSize();
    if (classList.includes('is-selected')) {
      this.resizeFont();
    }
  }

  resizeFont():void {
    const activeElement: HTMLElement = document.getElementsByClassName('is-selected')[0] as HTMLElement;
    const activeWidth = activeElement.clientWidth;
    const activeHeight = 100;
    const child = activeElement.children[0].children[0] as HTMLElement;
    let fontsize = 26;
    child.style.fontSize = `${fontsize}px`;
    let childWidth = child.clientWidth;
    let childHeight = child.clientHeight;
    if (activeElement) {
      while (childWidth > activeWidth - 10 || childHeight > activeHeight - 10) {
        fontsize -= 1;
        child.style.fontSize = `${fontsize}px`;
        childWidth = child.clientWidth;
        childHeight = child.clientHeight;
      }
    } else {
      console.log('No active Element');
    }
  }

  get getIndexInt(): number {
    return parseInt(this.currentIndex, 10);
  }

  @Prop({ type: String })
  private cellFlavour = 'defaultFlavour'

  getCurrentCellFlavour(link: SliderLink): string {
    if (link.pageType) {
      if (link.pageType === PageType.CHAPTER) {
        return 'defaultFlavourChapter';
      }
    }

    // every other case

    return this.cellFlavour;
  }

  private router: Router = useRouter();

  flickityOptions = {
    initialIndex: this.getIndexInt,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: false,

    // any options from Flickity can be used
  }

  declare $refs:{
  flickity: typeof Flickity,
  }

  setRoute(link: string):void {
    this.router.push(link);
  }

  scrollSliderToCurrentIndex(): void {
    this.$refs.flickity.select(this.getIndexInt);
  }
}
</script>

<style lang="scss" >

@import "src/colors";
@import "src/text";
@import "src/size";
@import "src/style";

.slider-container{
  position: relative;
}

.overlay-L {
    height: 90%;
    width: 20%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    background-image:linear-gradient(to right,white , rgba(255,255,255,0));
    overflow-x: hidden;
    transition: 0.5s;
}
.overlay-R {
    height: 90%;
    width: 20%;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    background-image:linear-gradient(to left,white , rgba(255,255,255,0) );
    overflow-x: hidden;
}

.flickity-viewport{
  height: 120px !important;
}

.carousel-cell {
  box-shadow: none;
  transition: all 0.2s ease;
  text-align: center;
  width: 250px;
  height: 50px;
  top: 20px;
  margin-right: 10px;
  margin-left:10px;
  counter-increment: carousel-cell;
  border: 0px solid transparent;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }
}
.carousel-cell.is-selected {
  @include drop-shadow-elevation-1;
  height: 100px;
  width: $slider-cell-active-with;
  top: 0px;
  a {
    word-wrap: break-word;
    text-decoration: none;
    }

}

.wrapper {
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: inherit;
  height: calc(100% - 6px);
}

.wrapper-is-active {

  border: inherit;
  border-radius: inherit;
  border-width: 3px;
}

.defaultFlavour {
  background-color: $color_grey_0;
  border-color: $color_grey_7;
  a {
    @include slider-heading;
    color: $color_grey_6;
    font-size:20px;
  }
  &.is-selected {
    a {
      @include slider-heading;
      color:$color_grey_8;
    }
    background-color: $color_grey_0;
    border-color: $color_grey_7;
  }
}

.defaultFlavourChapter {
  background-color: $color_grey_5;
  border-color: $color_grey_2;
  a {
    @include slider-heading;
    color: $color_grey_0;
    font-size: 20px;
  }
  &.is-selected {
    a {
      @include slider-heading;
      color:$color_grey_0;
    }
    background-color: $color_grey_5;
    border-color: $color_grey_2;
  }
}

.secondaryLink {
  font-size: 12px !important;
}
</style>
