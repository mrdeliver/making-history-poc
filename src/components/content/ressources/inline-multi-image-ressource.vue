<template>
  <div>
    <div class='row'>
      <div class="image-col">
        <div>
          <!-- Slideshow container -->
          <div class="slideshow-container">

            <!-- Full-width images with number and caption text -->
            <div class="mySlides fade">
              <div class="numbertext">1 / 3</div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Franz%C3%B6sischer-friedhof-berlin_-_5.jpeg/640px-Franz%C3%B6sischer-friedhof-berlin_-_5.jpeg" style="width:100%">
              <div class="text">Caption Text</div>
            </div>

            <div class="mySlides fade">
              <div class="numbertext">2 / 3</div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Revolutionary_War_artillery_on_display_at_Yorktown_Battlefield_image_11.jpg/800px-Revolutionary_War_artillery_on_display_at_Yorktown_Battlefield_image_11.jpg" style="width:100%">
              <div class="text">Caption Two</div>
            </div>

            <div class="mySlides fade">
              <div class="numbertext">3 / 3</div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Franz%C3%B6sischer_Friedhof_Berlin-Mitte_Okt.2016_-_4.jpg/640px-Franz%C3%B6sischer_Friedhof_Berlin-Mitte_Okt.2016_-_4.jpg" style="width:100%">
              <div class="text">Caption Three</div>
            </div>

            <!-- Next and previous buttons -->
            <a class="prev" @click="plusSlides(-1)">&#10094;</a>
            <a class="next" @click="plusSlides(1)">&#10095;</a>
          </div>

          <!-- The dots/circles -->
          <div style="text-align:center">
            <span class="dot" @click="currentSlide(1)"></span>
            <span class="dot" @click="currentSlide(2)"></span>
            <span class="dot" @click="currentSlide(3)"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
    </div>
    <div class='row'>
      <text-block v-for="(tb, idx) in content" :key="idx"
      :text="tb.text" :heading="tb.heading" :tipps="tb.tipps" :glossarEntries="tb.glossarEntries">
      </text-block>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import {
  RessourceType, TextContentBlock, Annotation,
} from '../../../store/data/data-types';
import TextBlock from '../text-block.vue';

@Options({
  components: {
    TextBlock,
  },
})
export default class InlineMultiImageRessource extends Vue {
  // items = [
  //   {
  //     src: 'https://media.giphy.com/media/IrFqA9fFseZaM/giphy.gif',
  //     title: 'Smart cow',
  //   },
  //   {
  //     src: 'https://media.giphy.com/media/bympeqWadSL3G/giphy.gif',
  //     title: 'Friendly cow',
  //   },
  //   {
  //     src: 'https://media.giphy.com/media/LilPRDHg9Qre0/giphy.gif',
  //   },
  // ]

  @Prop()
  id = '';

  @Prop()
  typ: RessourceType = {} as RessourceType;

  @Prop()
  author = '';

  @Prop()
  caption = '';

  @Prop()
  content: TextContentBlock[] = [] as TextContentBlock[];

  @Prop()
  url = '';

  @Prop()
  annotations: Annotation[] = [];

  slideIndex = 1;

  mounted(): void {
    this.showSlides(this.slideIndex);
  }

  // Next/previous controls
  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
  currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number):void {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }
    for (i = 0; i < slides.length; i += 1) {
      const slide = slides[i] as HTMLElement;
      slide.style.display = 'none';
    }
    for (i = 0; i < dots.length; i += 1) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    const blockSlide = slides[this.slideIndex - 1] as HTMLElement;
    blockSlide.style.display = 'block';
    dots[this.slideIndex - 1].className += ' active';
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "src/colors";
/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
  padding: 20px;
  padding-top: 0px;
  padding-bottom: 0px;
}

/* Hide the images by default */
.mySlides {
  display: none;
  img {
    border-radius: 15px;
  }
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 20px;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  //padding: 8px 12px;
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 10px;
  width: 50px;
  margin: 0 5px;
  background-color: $color_yellow_6;
  border-radius: 15px;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: $color_yellow_8;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
</style>
