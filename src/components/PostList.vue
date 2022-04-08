<template>
    <div>
        <h3>список пользователей</h3>
        <post-item v-for="post in posts" :key="post" :post="post"/>
      
    </div>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: {PostItem},
   props: {
    posts: {
      type: Array,
      require: true
    }
  }
};
</script>

<style scoped>


</style>

