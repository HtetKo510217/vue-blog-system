<template>
   <div v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
</template>

<script>
export default {
    props:['posts'],
}
</script>

<style>

</style>