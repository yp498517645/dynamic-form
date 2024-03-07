//批量注册和按需加载多个组件

const components = import.meta.glob('./form/*.vue')
const modules = new Map<string, unknown>()

for (const [k, v] of Object.entries(components)) {
  const name = k.match(/.\/form\/dy-(\S+).vue/)?.[1]
  name && modules.set(name, defineAsyncComponent(v as () => Promise<Component>))
}

export default modules
