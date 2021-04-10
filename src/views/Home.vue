<template>
  <div class="homeContainer">
    <div class="subjectsHeading">
      Fächer
    </div>
    <div class="subjectTilesContainer">
      <div v-for="(sb, idx) in subjects" :key="idx"
          class="subject"
          @click="goToSubjectOverview(sb.id)"
          :class="sb.backgroundClass"
          >
          <div class="overlay"></div>
          <!-- <div class="subjectLastReadIndicator">{{sb.lastRead}}</div> -->
          <div class="subjectTileHeading">
            {{sb.heading}}
            <div v-if="sb.latestRead" class="subjectLastRead"
              @click.stop="goToPage(sb.latestRead.bandId, sb.latestRead.pageId)">
              <div class="latestText">zuletz </div>
              <div class="latestTeaser">{{sb.latestRead.teaserText}}</div>
              <div class="latestIcon"></div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Subject } from '@/store/data/subjects';
import SubjectStore from '@/store/subject-module';
import { Router, useRouter } from 'vue-router';

@Options({

})
export default class Band extends Vue {
  private subjects = [] as Subject[]

  mounted(): void {
    this.subjects = SubjectStore.subjects;
  }

  private router: Router = useRouter();

  goToSubjectOverview(subjectId: string): void {
    this.router.push(`/subjects/${subjectId}`);
  }

  goToPage(bandId: string, pageId: string): void {
    this.router.push(`/band/${bandId}/page/${pageId}/`);
  }
}
</script>

<style lang="scss" >

@import "../colors";
@import "../text";

.homeContainer {
  margin-right: 10%;
  margin-left: 10%;

  .subjectsHeading {
   @include slider-heading;
    margin-bottom: 20px;
  }

  $grid-gap: 20px;

  .subjectTilesContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: $grid-gap;
    row-gap: $grid-gap;
    grid-auto-rows: 200px;

    $tile-padding: 20px;

    .subject {
      border-radius: 15px;
      position: relative;
      background-size: cover;

      &:hover {
        cursor: pointer;
      }

      .overlay {
        border-radius: 15px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
      }

      .subjectTileHeading {
        position: absolute;
        bottom: $tile-padding;
        left: $tile-padding;

        @include slider-heading;
        color: $color_grey_0;

        .subjectLastRead {
          border-radius: 15px;
          background-color: $color_grey_1;
          display: flex;
          align-content: center;
          padding-top: 1px;
          padding-bottom: 1px;
          padding-left: 10px;
          padding-right: 10px;
          margin-top: 5px;
          width: 70%;
          white-space: nowrap;

          .latestText {
            @include info-text;
            color: $color_grey_3;
            padding-right: 5px;
          }

          .latestTeaser {
            @include info-heading;
            color: $color_grey_8;
            overflow: hidden;
            text-overflow: ellipsis;
          }

        }

      }

    }
  }
}

.math {
  background-image: url('~@/assets/menu-images/title-math.jpg');
}

.history {
  background-image: url('~@/assets/menu-images/title-history.jpg');
}

.german {
  background-image: url('~@/assets/menu-images/title-german.jpg');
}
</style>
