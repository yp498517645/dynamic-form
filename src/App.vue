<template>
  <dyIndexVue :jsonArr="JsonArrType" ref="formWrapperRef"></dyIndexVue>
  <button @click="validate">validate</button>
</template>

<script setup lang="ts">
import JsonArrType from './tempJson'
import dyIndexVue from './components/dy-index.vue'
import type { ExposeType } from './components/dy-index.vue'
import type { ExposeSelectType } from './components/form/dy-select.vue'
import dySelect from './components/form/dy-select.vue'

const formWrapperRef = ref<ExposeType | null>(null)
const selectRef = ref<ExposeSelectType | null>(null)
const validate = () => {
  if (formWrapperRef.value && formWrapperRef.value.formRef) {
    formWrapperRef.value.formRef.validate().then((res) => console.log(res))
  }
}
</script>

<style scoped></style>
