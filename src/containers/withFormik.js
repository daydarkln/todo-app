import { withFormik } from 'formik'
import { message } from 'antd'

export default withFormik({
  mapPropsToValues: () => ({
    title: '',
    description: '',
    priority: 1,
    status: 1,
    startDate: '',
    endDate: '',
  }),
  handleSubmit: (values, { props }) => {
    try {
      props.postItem(values)
      message.success('Успешно')
      props.history.push('/')
    } catch (e) {
      message.error('Произошла ошибка')
    }
  },
})
