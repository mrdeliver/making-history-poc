<template>
  <router-view name='slider'></router-view>
  <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PageStore from '../store/page-module';
import RessourceStore from '../store/ressource-module';

@Options({})
export default class Band extends Vue {
  created(): void {
    PageStore.buildPages('1');
    RessourceStore.buildRessources();
  }
}
</script>
