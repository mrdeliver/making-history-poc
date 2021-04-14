<template>
  <box-content-frame frameFlavour="glossarFrame">
    <div id="searchbar"><input type="search" v-model="searchString"/></div>
    <div>
      <component
        v-for="(entry,idx) in filteredEntries"
        :is="getComponentType(entry.type)"
        :key="idx"
        v-bind="entry"
      ></component>
    </div>
  </box-content-frame>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import {
  Entry, EntryType,
} from '@/store/data/entries';
import BoxContentFrame from '../box-content-frame.vue';
import EntryStore from '../../../store/search-entry-module';
import GlossarEntryContainer from './glossar-entry.vue';
import MethodEntryContainer from './method-entry.vue';
import PageStore from '../../../store/page-module';

@Options({
  name: 'EntrySearch',
  components: {
    BoxContentFrame,
    GlossarEntryContainer,
    MethodEntryContainer,
  },
})
export default class EntrySearch extends Vue {
  private searchString = '';

  get filteredEntries(): Entry[] {
    if (this.searchString !== '') {
      return this.variableEntries.filter(
        (entry: Entry) => entry.heading.toLowerCase().includes(this.searchString),
      );
    }
    return this.variableEntries;
  }

  get variableEntries(): Entry[] {
    if (this.teacherBandActivated) {
      return EntryStore.allMethodEntries;
    }
    return EntryStore.allGlossarEntries;
  }

  get teacherBandActivated(): boolean {
    return PageStore.getTeacherBandState;
  }

  getComponentType(entryType: EntryType): string {
    switch (entryType) {
      case EntryType.METHOD:
        return 'MethodEntryContainer';
      case EntryType.GLOSSAR:
        return 'GlossarEntryContainer';
      default:
        return '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@import "../../../colors";
@import "../../../text";

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

.baseWrapper {
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 15px;
}

.closedWrapper {
  background-color: $color-orange-2;
  border: transparent;
}

.openWrapper {
  background-color: $color-orange-1;
  border: 2px solid $color-orange-3;
}

.heading {
  font-size: $font_size_text;
  font-weight: $font_weight_heading;
  margin-bottom: 5px;
  color: $color_orange_8;
}

.content {
  @include info-text;
  color: $color_orange_8;
  text-align: justify;
  padding: 5px;
}
</style>
