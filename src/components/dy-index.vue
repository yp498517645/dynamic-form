<template>
  <div>
    <template v-if="props.jsonArr">
      <component
        :is="FormMap.get(item.type)"
        v-for="item in props.jsonArr"
        :key="item.field"
      ></component>
    </template>
  </div>
</template>

<script setup lang="ts">
import tempJson from './tempJson'
import FormMap from './registerFormComponents'
type JsonArrType = typeof tempJson

interface Props {
  jsonArr?: JsonArrType
}
const props = defineProps<Props>()
</script>

<style scoped></style>
