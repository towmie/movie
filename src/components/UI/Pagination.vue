<template>
  <div>
    <BPagination
      v-model="currentPage"
      :limit="limit"
      :per-page="perPage"
      :total-rows="total"
    />
    {{ currentPage }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      total: 500,
      perPage: 20,
      limit: 7,
    };
  },
};
</script>
