<template>
  <el-form-item :label="$props.label" :rules="props.rules" :class="props.customClass">
    <el-input v-model="modelValue" :placeholder="props.placeholder" />
  </el-form-item>
</template>

<script setup lang="ts">

interface Props {
  placeholder: string
  label: string
  field: string
  customClass?: string
  rules?: Array<any>
}
const props = withDefaults(defineProps<Props>(), { placeholder: '', label: '', field: '' })

const modelValue = computed(() => {
  return props.field
})

const attrs = useAttrs() //
</script>

<style scoped></style>
