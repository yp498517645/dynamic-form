<template>
  <div>
    <el-form
      ref="formRef"
      style="max-width: 600px"
      :model="formModel"
      class="demo-ruleForm"
      status-icon
    >
      <template v-if="modelArr">
        <component
          :is="modules.get(item.type)"
          v-for="item in modelArr"
          :key="item.field"
          :config="item"
          v-show="handleVisibleFunc(item?.deps, item.depsFunc)"
          v-model="formModel[item.field]"
        ></component>
      </template>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { ElForm } from 'element-plus'
import { type Ref } from 'vue'
import modules from './registerFormComponents'
export type formRefType = Ref<InstanceType<typeof ElForm> | null>
type formItem = {
  field: string
  type: string
  label?: string
  deps?: Array<string>
  fieldValue?: string | number | Array<unknown> | object
  options?: { [propertyName: string]: unknown }
  [propertyName: string]: any
}
interface Props {
  jsonArr: Array<formItem>
}
export type ExposeType = { formRef: formRefType }

const { jsonArr } = defineProps<Props>()
const modelArr = ref([...jsonArr])
const formRef: formRefType = ref(null)

const createInitObj = () => {
  const obj: { [propertyNameL: string]: unknown } = {}
  jsonArr.forEach((item) => {
    obj[item.field] = item.fieldValue
  })
  return obj
}
const obj = createInitObj()
console.log('obj', obj)
const formModel = reactive(obj)

const handleVisibleFunc = (
  deps: Array<string> = [],
  callBack: (values: { [propertyName: string]: any }) => boolean
) => {
  if (deps.length === 0) return []
  const obj: { [propertyName: string]: any } = {}
  deps.forEach((field) => {
    obj[field] = formModel[field]
  })
  return callBack(obj)
}

defineExpose<ExposeType>({
  formRef
})
</script>

<style scoped></style>
