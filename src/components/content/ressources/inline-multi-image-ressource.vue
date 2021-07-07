<template>
  <div>
    <div class='row'>
      <div class="image-col">
        <div>
          <!-- Slideshow container -->
          <div class="slideshow-container">

            <div class="mySlides fade" v-for="(item,idx) in images" :key="idx">
              <div class="numbertext">{{idx+1}}/{{images.length}}</div>
              <img :src="item.url" style="width:100%">
              <!-- Next and previous buttons -->
              <a class="prev" @click="plusSlides(-1)">&#10094;</a>
              <a class="next" @click="plusSlides(1)">&#10095;</a>

              <div class="row">
                <div class="caption-col">
                  {{item.caption}}
                </div>
              </div>

              <div class='row'>
                <text-block v-for="(tb, idx) in item.content" :key="idx"
                :text="tb.text" :heading="tb.heading" :tipps="tb.tipps"
                :glossarEntries="tb.glossarEntries">
                </text-block>
              </div>
            </div>

          </div>

          <!-- The dots/circles -->
          <div style="text-align:center">
            <span class="dot" v-for="(item,idx) in images" :key="idx"
            @click="currentSlide(idx+1)"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import {
  RessourceType,
} from '../../../store/data/data-types';
import TextBlock from '../text-block.vue';
import { ImageRessource } from '../../../store/data/ressources/image-ressources';

@Options({
  components: {
    TextBlock,
  },
})
export default class InlineMultiImageRessource extends Vue {
  @Prop()
  id = '';

  @Prop()
  typ: RessourceType = {} as RessourceType;

  @Prop()
  images: ImageRessource[] = [];

  slideIndex = 1;

  mounted(): void {
    this.showSlides(this.slideIndex);
    console.log(this.id);
    console.log(this.typ);
    console.log(this.images);
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

.block {
  margin-bottom: 20px;
}

.text-block {
  text-align: justify;
}

.image-col {
  flex: 80%;
  padding: 20px;
}

.caption-col {
  width: 80%;
  color: $color_yellow_7;
  text-align: center;
  margin: auto;
}

img {
  max-width:100%;
  max-height:100%;
  border-radius: 15px;
}
</style>
