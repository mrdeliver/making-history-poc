<template>
  <div class="subjectContainer">
    <div class="subjectHeadingContainer">
      <div class="subjectHeading" :class="currentSubject.backgroundClass">
        {{currentSubject.heading}}
      </div>
    </div>
    <div class="bandsContainer">
      <div v-for="(band, idx) in currentBands" :key="idx"
        @click="goToBand(band.id)"
        class="bandContainer"
      >
        <div class="bandTitleImage" :class="band.backgroundClass">
        </div>
        <div class="bandInfo">
          <div class="bandHeading">{{band.heading}}</div>
          <div class="bandTeaser"> {{band.teaserText}} </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Subject } from '@/store/data/subjects';
import { Band } from '@/store/data/band';
import SubjectStore from '@/store/subject-module';
import BandStore from '@/store/band-module';
import { Router, useRouter } from 'vue-router';
import { Prop } from 'vue-property-decorator';

@Options({

})
export default class BandComponent extends Vue {
  @Prop({ type: String })
  private subjectId = '';

  private currentSubject = {} as Subject;

  private currentBands = [] as Band[];

  mounted(): void {
    BandStore.fetchAllBands();
    this.currentSubject = SubjectStore.subjectWithId(this.subjectId);
    this.currentBands = BandStore.bandsWithIds(this.currentSubject.bandIds);
  }

  private router: Router = useRouter();

  goToBand(bandId: string): void {
    this.router.push(`/band/${bandId}`);
  }
}
</script>

<style lang="scss" >

@import "../colors";
@import "../text";

.subjectContainer {
  margin-left: 10%;
  margin-right: 10%;

  .subjectHeadingContainer {
    display: flex;
    justify-content: center;
    margin-bottom: 35px;

    .subjectHeading {
      border-radius: 15px;
      background-size: cover;
      padding: 35px;
      @include slider-heading;
      text-align: center;
      width: 70%;
      float: center;
      color: $color_grey_0;
    }
  }

  .bandContainer {
    display: flex;
    border-radius: 15px;
    background-color: $color_grey_0;
    margin-bottom: 20px;

    &:hover {
        cursor: pointer;
      }

    .bandTitleImage {
      background-size: cover;
      border-radius: 15px 0px 0px 15px;
      width: 20%;
    }

    .bandInfo {
      padding-left: 10px;
      width: 80%;
      padding-right: 10px;

      .bandHeading {
        @include slider-heading;
        padding-top: 10px;
        padding-bottom: 10px;
      }

      .bandTeaser {
        @include detail-text;
        margin-bottom: 10px;
        padding-bottom: 10px;
        height: 50px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }

}

.frenchRev {
  background-image: url('~@/assets/menu-images/french-revolution.jpg');
}

.cubaCrisis {
  background-image: url('~@/assets/menu-images/cuba-crisis.jpg');
}
</style>
