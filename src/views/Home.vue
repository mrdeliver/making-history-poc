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
        background: rgba(0,0,0,0.2);
      }

      &

       .subjectTileHeading {
        position: absolute;
        bottom: $tile-padding;
        left: $tile-padding;

        @include slider-heading;
        color: $color_grey_0;

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
