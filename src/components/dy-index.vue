<template>
  <div>
    <el-form
      ref="ruleFormRef"
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
          v-model="formModel[item.field]"
        ></component>
      </template>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import modules from './registerFormComponents'

type formItem = {
  field: string
  type: string
  label?: string
  fieldValue?: string | number
  options?: { [propertyName: string]: unknown }
  [propertyName: string]: any
}

interface Props {
  jsonArr: Array<formItem>
}
const { jsonArr } = defineProps<Props>()

const modelArr = ref([...jsonArr])
const createInitObj = () => {
  const obj: { [propertyNameL: string]: unknown } = {}
  jsonArr.forEach((item) => {
    obj[item.field] = item.fieldValue
  })
  return obj
}
const obj = createInitObj()
const formModel = reactive(obj)
</script>

<style scoped></style>
