<template>
  <el-form-item
    :label="config.label"
    :class="config.customClass"
    :prop="config.field"
    :rules="config.rules"
    v-bind="config.options"
  >
    <el-input v-model="modelValue" :placeholder="config.placeholder" v-on="config.eventsCallback" />
  </el-form-item>
</template>

<script setup lang="ts">
interface typeProps {
  config: {
    placeholder: string
    label: string
    field: string
    deps: []
    depsFunc?: (deps: []) => {}
    customClass?: string
    options?: { [propertyName: string]: unknown }
    eventsCallback?: { [propertyName: string]: Function }
    rules?: Array<unknown>
  }
}
const props = withDefaults(defineProps<typeProps>(), {
  config: () => ({ placeholder: '', label: '', field: '', deps: [] })
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
