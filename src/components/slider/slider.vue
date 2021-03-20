<template>
  <router-link v-for="link in allLinks" :to="link.primaryLink.link" :key="link.primaryLink.link">
    {{link.primaryLink.content}}
  </router-link>
  <div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import SliderLink from './slider';

export default class Slider extends Vue {
    @Prop({ })
    allLinks: SliderLink[] = [];
}
</script>

<style lang="scss" >

</style>
