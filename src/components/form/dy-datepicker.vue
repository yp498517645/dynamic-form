<template>
  <el-form-item
    :label="config?.label"
    :class="config?.customClass"
    :prop="config?.field"
    :rules="config?.rules"
    ref="formItemRef"
    v-bind="config?.options ?? {}"
  >
    <el-date-picker
      v-model="modelValue"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      v-on="config?.eventsCallback ?? {}"
    />
  </el-form-item>
</template>

<script setup lang="ts">
import type { ElFormItem } from 'element-plus'
import { type Ref } from 'vue'
interface typeProps {
  config?: {
    placeholder: string
    label: string
    field: string
    customClass?: string
    options?: {
      optionArr: Array<{ value: string; label: string }>
      [propertyName: string]: unknown
    }
    eventsCallback?: { [propertyName: string]: Function }
    rules?: Array<unknown>
  }
}
export type selectFormItemType = Ref<InstanceType<typeof ElFormItem> | null>
export type ExposeSelectType = { formItemRef: selectFormItemType }
const formItemRef: selectFormItemType = ref(null)

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
defineExpose<ExposeSelectType>({
  formItemRef
})
</script>

<style scoped></style>
