<template>
  <div class="post">
    <div>
      <div>{{ post.title }}</div>
      <div>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button>Удалить</my-button>
    </div>
  </div>
</template>

<script>
// import MyButton from './UI/MyButtons.vue';
export default {
  // components: { MyButton },
  props: {
    post: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style scoped>
.post {
  border: 2px solid teal;
  padding: 15px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>>

