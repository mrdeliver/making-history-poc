<template>
  <router-view name='slider'></router-view>
  <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Band extends Vue {

}
</script>
