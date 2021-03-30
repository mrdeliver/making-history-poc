<template>
  <box-content-frame frameFlavour="glossarFrame">
    <div id="searchbar"><input type="search" v-model="searchString"/></div>
    <div>
      <glossar-entry-container
        v-for="entry in filteredGlossarEntries"
        :content="entry"
        :key="entry.id">
      </glossar-entry-container>
    </div>
  </box-content-frame>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { GlossarEntry } from '@/store/data/glossar';
import BoxContentFrame from '../box-content-frame.vue';
import GlossarStore from '../../../store/glossar-module';
import GlossarEntryContainer from './glossar-entry.vue';

@Options({
  name: 'Glossar',
  components: {
    BoxContentFrame,
    GlossarEntryContainer,
  },
})
export default class Glossar extends Vue {
  private glossarEntries: GlossarEntry[] = []

  private searchString = '';

  get filteredGlossarEntries(): GlossarEntry[] {
    if (this.searchString !== '') {
      return this.glossarEntries.filter(
        (entry: GlossarEntry) => entry.heading.toLowerCase().includes(this.searchString),
      );
    }
    return this.glossarEntries;
  }

  mounted(): void {
    this.glossarEntries = GlossarStore.allGlossarEntries.sort(
      (a, b) => (a.heading < b.heading ? -1 : 1),
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@import "../../../colors";

#searchbar {
  width: 100%;
  margin-bottom: 20px;

  input {
    width: 100%;
    background-color: $color_orange_1;
    border: 3px transparent;
    border-radius: 15px;
    height: 25px;
    padding-left: 10px;
    box-sizing: content-box;
    //background-image: url('');
    background-repeat: no-repeat;
    background-position: left center;
    box-sizing: border-box;

    &:focus {
      border: 2px solid $color_orange_3;
      outline: none;
    }
  }

}

.glossarFrame {
  border: 2px solid $color_orange;
  background-color: $color_orange_2;
  width: 400px;
  height: 700px;
}
</style>
