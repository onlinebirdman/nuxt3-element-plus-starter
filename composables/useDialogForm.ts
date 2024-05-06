import { FormDialog } from '~/components/formily/element-plus/FormDialog'


// 定义通用的表单数据类型接口
interface DialogFormData<T> {
  formData: T;
}
interface DialogFormOptions {
  /** dialog组件props */
  dialogProps?: any
  /** 表单组件 */
  form: Component,
  /** 表单组件props */
  formProps?: any
}
const defaultDialogProps = {
  /** 弹窗的唯一ID，需要多个弹窗同时出现时需要设置不同的uid */
  uid: 'form-dialog',
  width: "70%",
  footer: undefined
}
export default function useDialogForm<T>(options: DialogFormOptions) {
  const dialogProps = Object.assign({
    closeOnClickModal: false
  }, defaultDialogProps, options.dialogProps)
  return new Promise<DialogFormData<T>>((resolve) => {
    FormDialog(dialogProps, dialogProps.uid, options.form)
      .open(options.formProps)
      .then((formData) => {
        resolve({ formData })
      })
      .catch(console.error)
  })
}
