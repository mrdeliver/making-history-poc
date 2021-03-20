<template>
  <div id="content-slider">
    <router-view id="slider-view" name='slider'></router-view>
  </div>
  <div id="content">
    <router-view id="content-view"></router-view>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Router, useRouter } from 'vue-router';
import PageStore from '../store/page-module';

@Options({})
export default class Band extends Vue {
  private router: Router = useRouter();

  @Prop({ type: String })
  private bandId = '';

  created(): void {
    PageStore.buildPages(this.bandId);
    this.router.push({ name: 'Page', params: { pageId: '1', bandId: this.bandId } });
  }
}
</script>

<style lang="scss" scoped>
#content-slider {
  height: 70px;
}
</style>
