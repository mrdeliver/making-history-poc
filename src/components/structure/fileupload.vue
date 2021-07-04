<!-- App.vue -->

<!-- HTML Template -->
<template>
  <div class="row block">
    <div class="side-col"></div>
    <div class="center-col">
      <div class="dropbox">
        <input type="file" multiple :name="uploadFieldName" accept="image/*"
        class="input-file" @change="updateFiles($event.target.files)">
        <div class="heading">
          Files hier ablegen oder klicken!
        </div>
        <div v-for="file in files" :key="file">
          {{file}}
        </div>
      </div>
    </div>
    <div class="side-col"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class FileUpload extends Vue {
  files: Array<string> = [];

  updateFiles(filelist: Array<HTMLInputElement>): void {
    filelist.forEach((file) => {
      this.files.push(file.name);
    });
  }
}
</script>

<!-- SASS styling -->
<style lang="scss">
@import "src/colors";
@import "src/size";

  .dropbox {
    background: $color_green_1;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
    border-radius: 15px;
    border: 3px dashed $color_green_3;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .side-col {
    flex: $side_col_width
  }

  .center-col {
    flex: $center_col_width
  }

  .row {
    display: $row_display;
  }

  .block {
  margin-bottom: 20px;
}
</style>
