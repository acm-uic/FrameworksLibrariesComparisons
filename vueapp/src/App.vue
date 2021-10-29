<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-light bg-light navbar-expand-lg">
        <a href="/" class="navbar-brand"><img class="logo mx-3" src="./assets/acmlogo.png" alt="ACM User Manager Logo" />ACM User Manager</a>
        <div class="navbar-nav">
          <router-link to="/" class="nav-item nav-link">Home</router-link>
          <router-link to="/about" class="nav-item nav-link">Documentation</router-link>
        </div>
      </nav>
    </header>
    <div class="container-fluid">
      <div class="container-lg">
        <router-view/>
      </div>
    </div>

    <footer>
      <hr />
      <div id="copy" class="mx-2">&copy; ACM@UIC 2021-2022</div>
    </footer>
</div>
</template>

<style lang="scss">
/* You can add global styles to this file, and also import other style files */
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  body {
    margin: 0 auto;
    padding: 0;
  }
  
  .logo {
    width: 75px;
  }
  
  .float-right {
    float: right;
  }
  
  .inline {
    display: inline;
  }
</style>
