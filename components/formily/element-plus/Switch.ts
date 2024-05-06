import { connect, mapProps } from '@formily/vue'
import { ElSwitch} from 'element-plus';

export const Switch = connect(ElSwitch, mapProps({
  value: 'modelValue',
}))

export default Switch
