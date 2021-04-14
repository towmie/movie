<template>
  <teleport to="body">
    <div class="info">Dialog</div>
  </teleport>
</template>

<script>
export default {};
</script>

<style scoped>
.info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 700px;
  height: 400px;
  background: #000;
}
</style>
