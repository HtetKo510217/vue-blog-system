<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts"></PostList>
  </div>
</template>

<script>
import PostList from '../components/PostList'
import getPosts from '../composables/getPosts'
export default {
  components: { PostList },
  setup() {
    let {posts,error,load} = getPosts();
    load();


    return {posts,error}
  }
}
</script>
