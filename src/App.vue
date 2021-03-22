<template>
  <div id="iPadFrame">
    <div id="app-navigation">
      <router-link to="/band/1">Band</router-link>
      <router-link to="/">About</router-link>
    </div>
    <div id="app-content">
      <router-view/>
    </div>
  </div>
</template>

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
  }

  #app-content {
    height: 97vh;
  }
}
</style>
