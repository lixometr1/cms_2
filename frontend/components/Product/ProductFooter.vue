<template>
  <div class="container fadeUp t-default" data-t-show="2">
    <section class="additional-block">
      <div class="single-product__preview-recomended">
       
        <ProductSimilar :item="item" />
      </div>
      <ProductReviews />
    </section>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({}),

  methods: {},
  computed: {},
};
</script>

<style lang="scss" >
</style>