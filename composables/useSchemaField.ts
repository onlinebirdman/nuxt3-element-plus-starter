import { createSchemaField } from '@formily/vue'
import * as ElementPlusFormily from '@formily/element-plus'
import Switch from '~/components/formily/element-plus/Switch'
import Select from '~/components/formily/element-plus/Select.vue'
import Submit from '~/components/formily/element-plus/Submit'
export default () => {
  return createSchemaField({
    components: {
      ...ElementPlusFormily,
      Switch,
      Select,
      Submit
    },
  })
}