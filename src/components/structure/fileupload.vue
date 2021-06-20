<!-- App.vue -->

<!-- HTML Template -->
<template>
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
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class FileUpload extends Vue {
  files: [] = [];

  updateFiles(filelist: []): void {
    filelist.forEach((file) => {
      this.files.push(file.name);
    });
  }
}
</script>

<!-- SASS styling -->
<style lang="scss">
  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
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
</style>
