<template>
  <div class="homeContainer">
    <div class="subjectsHeading">
      Fächer
    </div>
    <div class="subjectTilesContainer">
      <div v-for="(sb, idx) in subjects" :key="idx"
          class="subject"
          @click="goToSubjectOverview(sb.id)"
          >
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
    SubjectStore.fetchAllSubjects();
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

</style>
