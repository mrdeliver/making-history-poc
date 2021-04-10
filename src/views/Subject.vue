<template>
  <div></div>
  <div class="bandsContainer">
    <div v-for="(band, idx) in currentBands" :key="idx"
      @click="goToBand(band.id)"
    >
      <div>{{band.heading}}</div>
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
    console.log(this.currentBands);
  }

  private router: Router = useRouter();

  goToBand(bandId: string): void {
    this.router.push(`/band/${bandId}`);
  }
}
</script>

<style lang="scss" >

@import "../colors";

</style>
