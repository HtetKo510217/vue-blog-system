<template>
    <h1>Add Post</h1>
  <form @submit.prevent="addPost">
    <div class="from-group">
        <label>Project Title</label>
        <input type="text" v-model="title">
    </div>
    <div class="from-group">
        <label>Post Body</label>
        <textarea  cols="30" rows="10" v-model="body"></textarea>
    </div>
    <div class="from-group">
        <label>Add Tag</label>
        <input type="text" v-model="tag" @keydown.enter.prevent="addTags">
        <div v-for="tag in tags" :key="tag" class="tag">
            {{ tag }}
        </div>
    </div>
    <button>Add Post</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router';
export default {
    setup() {
        let router = useRouter();
        let title = ref('');
        let body = ref('');
        let tag = ref('');
        let tags = ref([]);

        let addTags = () => {
            if(!tags.value.includes(tag.value)) {
                tags.value.push(tag.value);
                tag.value = '';
            }
        }

        let addPost = async ()=> {
            await fetch("http://localhost:3000/posts",{
                method:"POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify(
                    {
                        title:title.value,
                        body:body.value,
                        tags:tags.value
                    }
                )
            })
            router.push('/')
        }

        return {title,body,addPost,tag,tags,addTags}
    }
}
</script>

<style>
    h1 {
            color: darkred;
            margin-bottom: 50px;
        }
    form {
        width: 400px;
        margin: 0 auto 100px;
    }
    .from-group label {
        display: block;
        padding-bottom: 10px;
        text-align: left;
        font-size: 16px;
        font-weight: bold;
    }
    .from-group input,
    .from-group textarea {
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        resize: none;
        margin-bottom: 10px;
        outline: none;
        font-size: 16px;
    }
    button {
        padding: 10px;
        cursor: pointer;
    }
    .tag {
        display: inline-block;
        margin: 0 10px 20px;
        color: #444;
        background: #ddd;
        padding: 8px;
        border-radius: 20px;
        font-size: 14px;
    }
</style>