export default [
  {
    type: 'input', //表单类型
    placeholder: '123', //占位符
    field: 'sss', //字段名字
    fieldValue: '9666', //字段值
    label: 'xxzxx', //标签
    rules: [
      {
        required: true,
        message: 'Please select Activity zone',
        trigger: 'change'
      }
    ], //规则
    options: {}
  }
]
