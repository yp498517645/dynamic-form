export default [
  {
    type: 'select', //表单类型
    placeholder: '', //占位符
    field: 'selection1', //字段名字
    fieldValue: '', //字段值
    label: '选择1', //标签
    options: {
      'label-width': '180px',
      required: true,
      optionArr: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        }
      ]
    },
    eventsCallback: {
      change: function (e: Event) {
        console.log('change', e)
      }
    }
  },
  {
    type: 'select', //表单类型
    placeholder: '', //占位符
    field: 'selection2', //字段名字
    fieldValue: '', //字段值
    label: '选择2', //标签
    options: {
      'label-width': '180px',
      required: true,
      optionArr: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        }
      ]
    },
    eventsCallback: {
      change: function (e: Event) {
        console.log('change', e)
      }
    }
  },
  // {
  //   type: 'datepicker', //表单类型
  //   field: 'picker', //字段名字
  //   fieldValue: ['2010-10-12', '2010-10-22'], //字段值
  //   label: '时间选择器', //标签
  //   options: {
  //     'label-width': '180px',
  //     required: true
  //   },
  //   eventsCallback: {
  //     change: function (e: Event) {
  //       console.log('change', e)
  //     }
  //   }
  // },
  {
    type: 'input', //表单类型
    placeholder: '123', //占位符
    field: 'sss', //字段名字
    fieldValue: '9666', //字段值
    label: '输入', //标签
    deps: ['selection1', 'selection2'],
    depsFunc: function (values: { [propName: string]: any }) {
      console.log('values', values)
      return values.selection1 === 'Option1' && values.selection2 === 'Option2'
    },
    options: {
      'label-width': '180px',
      required: true
    },
    eventsCallback: {
      change: function (e: Event) {
        console.log('change', e)
      }
    }
  }
]
