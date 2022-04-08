<template>
  <div class="app">
    <post-form @create="createPost"></post-form>
    <post-list :posts="posts"></post-list>
  </div>
</template>


<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      posts: [
        {
          id: 1,
          title: "javascript",
          body: "discription 1",
        },
        {
          id: 2,
          title: "javascript 2",
          body: "discription 2",
        },
        {
          id: 3,
          title: "javascript 3",
          body: "discription 3 ",
        },
      ],
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
    },
  },
};
</script>





<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>  