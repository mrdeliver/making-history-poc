<template>
  <div class="heading"> Bände </div>
  <div class="bandsContainer">
    <div v-for="(band, idx) in storeVolumes" :key="idx"
        @click="goToBand(band.id)"
        class="bandContainer storeBandContainer"
      >
        <div class="bandTitleImage" :class="band.backgroundClass">
        </div>
        <div class="bandInfo">
          <div class="bandHeading">{{band.heading}}</div>
          <div class="bandTeaser"> {{band.teaserText}} </div>
          <div class="bandOptions">
            <div v-if="!band.licenceActive" class="buyOption bandOption">
              Klassenlizenz kaufen
              <span class="price">
                {{band.price}}
              </span>
            </div>
            <div v-else class="addOption bandOption">
              <div class="licenceActiveHint">Lizenz gültig</div>
              <div class="addButton">
                <fa :icon="plusIcon" class="icon plus-icon"></fa>
                Band hinzufügen
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';

@Options({

})
export default class TeacherStore extends Vue {
  private storeVolumes = [
    {
      backgroundClass: 'antique',
      heading: 'Antike',
      teaserText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna ',
      price: '20€',
      licenceActive: false,
    },
    {
      backgroundClass: 'aztecs',
      heading: 'Azteken Herrschaft',
      teaserText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna ',
      price: '20€',
      licenceActive: false,
    },
    {
      backgroundClass: 'germanReich',
      heading: 'Deutsches Reich',
      teaserText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna ',
      price: '20€',
      licenceActive: true,
    },
  ]

  private plusIcon = 'plus';
}
</script>

<style scoped lang="scss">
@import "src/size";
@import "src/colors";
@import "src/text";
@import "src/style";

.heading {
  text-align: center;
  @include regular-heading;
  margin-bottom: 10px;
}

.storeBandContainer {
  background-color: white !important;
  width: 100%;
}

.bandOptions {
  @include info-text;
  display: flex;
  justify-content: flex-end;

  .bandOption {
    padding-left: 8px;
    padding-right: 8px;
    margin-bottom: 10px;
    border-radius: 15px;
  }

  .buyOption {
    background-color: $color_blue;
    color: white;

    .price {
      font-weight: $font_weight_heading;
    }
  }

  .addOption {

    .licenceActiveHint {
      text-align: right;
      color: $color_grey_8;
      @include detail_text;
      margin-bottom: 2px;
    }

    .addButton {
      padding-left: 4px;
      padding-right: 4px;
      height: auto !important;
      @include text-icon-button;
      @include info-text;
      background-color: $color_green_1;
      color: $color_green_9;
      border: transparent;

      .plus-icon {
        width: 14px !important;
        color: $color_green_6;
      }
    }
  }
}

.antique {
  background-image: url('~@/assets/store-images/antique.jpg');
}

.aztecs {
  background-image: url('~@/assets/store-images/aztecs.jpg');
}

.germanReich {
  background-image: url('~@/assets/store-images/german-reich.jpg');
}

</style>
