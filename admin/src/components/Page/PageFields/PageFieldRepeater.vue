<template>
  <div>
    <CCard>
      <CCardHeader>{{ label }} ({{template.varName}}) </CCardHeader>
      <CCardBody>
        <AppMultiplyer
          :value="arrValue"
          @input="emitData"
          :itemClass="itemClass"
        >
          <template v-slot:default="{ idx }">
            <PageField
              :template="templateItem"
              :value="arrValue[idx][templateItem.varName]"
              @input="onFieldChange(idx, templateItem.varName, $event)"
              v-for="(templateItem, index) in fields"
              :key="index"
              :ref="`field-${idx}`"
            />
          </template>
        </AppMultiplyer>
      </CCardBody>
    </CCard>
  </div>
</template>



<script>
// value: [ {varName1: '', varName2: '} ]
// template: {settings: {fields: [ {name: '', varName1: '', type: ''}, {varName2: ''} ]  }
import Mixin from "./PageFieldMixin";
import AppMultiplyer from "@/components/AppMultiplyer";
export default {
  mixins: [Mixin],
  components: {
    AppMultiplyer,
    PageField: () => import("./PageField"),
  },
  computed: {
    fields() {
      return this.settings.fields || [];
    },
  },
  data() {
    return {
      itemClass: [],
    };
  },
  methods: {
    getFields() {
      const refs = Object.keys(this.$refs);
      const fields = refs
        .filter((item) => item.indexOf("field-") === 0)
        .map((ref) => this.$refs[ref])
        .reduce((arr, item) => arr.concat(item), []);
      return fields;
    },
    validate() {
      const itemsValid = this.getFields().map((component) => {
        return component.validate();
      });
      this.itemClass = itemsValid.map((item) => ({
        "border-danger": !item,
      }));
      return !itemsValid.includes(false);
    },
    onInput(value) {
      this.emitData(value);
    },
    onFieldChange(idx, varName, newValue) {
      const value = [...this.value];
      value[idx][varName] = newValue;
      this.$emit("input", value);
    },
  },
};
</script>

<style>
</style>