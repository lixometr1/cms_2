<template>
  <div v-if="!$store.getters.isLoading">
    <CCard>
      <!-- <CCardHeader></CCardHeader> -->
      <CCardBody>
        <EditComponent
          c="EditImage"
          v="logo"
          label="Логотип"
          :changeValue.sync="values"
          :schema="schema"
          class="mb-3"
        />
        <AInput label="Телефон" v-model="values.phone" />
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import AInput from "@/components/AInput";
import EditImage from "@/components/EditImage";

export default {
  data() {
    return {
      values: {},
      schema: {},
    };
  },

  components: {
    AInput,
    EditImage,
  },
  async created() {
    this.$loading.start();
    await this.fetchItem();
    this.$loading.stop();
  },
  computed: {},
  methods: {
    async save() {
      return await this.$api.put(
        "widget",
        { slug: "header" },
        { values: this.values }
      );
   
    },
    async fetchItem() {
      try {
        const { data } = await this.$api.get("widgetAdmin", {
          slug: "header",
        });
        const values = data.values;
        this.values = Object.assign({}, this.values, values);
      } catch (err) {
        this.$error(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>