<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>
<!--cleareslint-plugin-vue -->

<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}

</style>