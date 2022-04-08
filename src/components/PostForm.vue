<template>
  <form @submit.prevent>
    <h4>Add post</h4>
    <input
      v-model="post.title"
      type="text"
      class="input"
      placeholder="post name"
    />
    <input
      v-model="post.body"
      type="text"
      class="input"
      placeholder="dicription"
    />

    <my-button class="btn" @click="createPost" style="align-self: flex-end; margin: 15px 0">create</my-button>
  </form>
</template>

<script>
// import MyButton from "./UI/MyButtons.vue";
export default {
  // components: {
  //   MyButton
  // },

  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },

  methods: {
    createPost() {
      this.post.id = Date.now
      this.$emit('create',this.post)
      this.post = {
        title: "",
        body: ""
      }

 
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}


.input {
  width: 100%;
  border: 2px solid teal;
  margin-top: 15px;
  padding: 10px;
}
</style>

