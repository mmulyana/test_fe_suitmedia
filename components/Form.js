import { useState } from 'react'
import { formSchema } from '../utils/schema'

export default function Form() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { value, name } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await formSchema.validate(form, { abortEarly: false })
      setErrors({})
      setForm({
        name: '',
        email: '',
        message: '',
      })
    } catch (errors) {
      const errorMessages = {}
      errors.inner.forEach((error) => {
        errorMessages[error.path] = error.message
      })
      setErrors(errorMessages)
    }
  }
  return (
    <div className='mt-4 max-w-[600px] mx-auto px-4 lg:px-0'>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='relative w-full mb-4'>
          <input
            type='text'
            value={form.name}
            name='name'
            placeholder='Name'
            className='p-2 border border-gray-300 rounded w-full'
            onChange={handleChange}
          />
          {errors.name && (
            <p className='first-letter:uppercase absolute -bottom-5 text-sm text-red-500'>
              {errors.name}
            </p>
          )}
        </div>
        <div className='relative w-full mb-4'>
          <input
            type='text'
            value={form.email}
            name='email'
            placeholder='Email'
            className='p-2 border border-gray-300 rounded w-full'
            onChange={handleChange}
          />
          {errors.email && (
            <p className='first-letter:uppercase absolute -bottom-5 text-sm text-red-500'>
              {errors.email}
            </p>
          )}
        </div>
        <div className='relative w-full mb-4'>
          <textarea
            value={form.message}
            onChange={handleChange}
            name='message'
            className='p-2 border border-gray-300 rounded w-full'
            placeholder='Message'
          ></textarea>
          {errors.message && (
            <p className='absolute -bottom-4 text-sm text-red-500'>
              {errors.message}
            </p>
          )}
        </div>

        <button className='py-3 bg-blue-900 text-white rounded' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}
