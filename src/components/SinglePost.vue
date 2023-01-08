<template>
  <h3>{{ post.title }}</h3>
  <p>{{ post.body }}</p>
  <div v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</div>
</template>

<script>
export default {
    props:['post']
}
</script>

<style>

</style>