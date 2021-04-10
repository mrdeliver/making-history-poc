<template>
  <div id="iPadFrame">
    <div id="app-navigation">
      <router-link to="/" class="home">
        <fa :icon="homeIconToDisplay" class="icon homeIcon"></fa>
      </router-link>
      <router-link to="/settings" class="settings">
        <fa :icon="cogsIconToDisplay" class="icon settingsIcon"></fa>
      </router-link>
    </div>
    <div id="app-content">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class App extends Vue {
  private homeIcon = 'home';

  private cogsIcon = 'cogs';

  get homeIconToDisplay(): string {
    return this.homeIcon;
  }

  get cogsIconToDisplay(): string {
    return this.cogsIcon;
  }
}
</script>

<style lang="scss">
@import "colors";
@import "text";

html {
  height: 100vh;
  overflow: hidden;
}

body {
  height: inherit;
}

#app {
  font-family: Raleway, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: $font_weight_text;
  line-height: $line_height_text;
  -moz-osx-font-smoothing: grayscale;
  height: inherit;
}

#iPadFrame {
  max-width: 834px;
  margin: 0 auto;
  color: $color_grey_10;
  font-size: $font_size_text;
  height: inherit;

  #app-navigation {
    max-height: 3vh;

    a {
      color: $color_grey_2;
      margin-right: 10px;

      .icon {
        transition: all, 0.2s;
        height: 15px;

        &:hover {
          color: $color_grey_3;
        }
      }
    }
  }

  #app-content {
    height: 97vh;
  }
}
</style>
