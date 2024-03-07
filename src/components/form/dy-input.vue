<template>
  <el-form-item
    :label="config.label"
    :class="config.customClass"
    :prop="config.field"
    :rules="config.rules"
    v-bind="config.options"
  >
    <el-input v-model="modelValue" :placeholder="config.placeholder" />
  </el-form-item>
</template>

<script setup lang="ts">
interface typeProps {
  config: {
    placeholder: string
    label: string
    field: string
    customClass?: string
    options?: { [propertyName: string]: unknown }
    rules?: Array<unknown>
  }
}
const props = withDefaults(defineProps<typeProps>(), {
  config: () => ({ placeholder: '', label: '', field: '' })
})
const { config } = toRefs(props)

const model = defineModel()
const modelValue = computed({
  get: () => model.value,
  set: (newValue) => {
    model.value = newValue
  }
})
</script>

<style scoped></style>
