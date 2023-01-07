<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts"></PostList>
  </div>
</template>

<script>
import PostList from '../components/PostList'
import { ref } from '@vue/reactivity'

export default {
  components: { PostList },
  setup() {
    let posts = ref([
    {
      title:'title 1',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',id:1
    },
    {
      title:'title 2',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',id:2
    },
    {
      title:'title 3',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',id:3
    },
    {
      title:'title 4',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',id:4
    },
    {
      title:'title 5',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',id:5
    },
    ]);




    return {posts}
  }
}
</script>
