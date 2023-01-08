<template>
  <header class="header">
    <h1>Blog</h1>
    <div class="routerLink">
      <router-link to="/">Home</router-link>
      <router-link :to="{name:'createPost'}">Create</router-link>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    box-shadow: 1px 1px 4px rgba(0,0,0,.5);
}

.header .routerLink a {
  font-size: 18px;
  color: black;
  padding-left: 30px;
  text-decoration: none;
}

</style>