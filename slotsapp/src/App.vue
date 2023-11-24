<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/ranking">Ranking</router-link>|
      <router-link to="/manage">Administrar</router-link>
    </nav>
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  display: block;
  width: 100%;
}
.main-btn {
  padding: 5px;
  background: green;
  margin: 5px;
  color: white;
}
</style>

