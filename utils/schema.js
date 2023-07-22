import * as yup from 'yup'

export const formSchema = yup.object().shape({
  name: yup.string().required('name is required'),
  email: yup
    .string()
    .required('email is required')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email address'
    ),
  message: yup.string().required('message is required'),
})
