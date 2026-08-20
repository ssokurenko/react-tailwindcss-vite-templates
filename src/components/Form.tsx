import { useState } from "react"
import Button from "./Button"

interface FormValues {
  name: string
  email: string
  message: string
}

const emptyValues: FormValues = { name: '', email: '', message: '' }

const Form = ({ title = 'Contact Us' }: { title?: string }) => {
  const [values, setValues] = useState<FormValues>(emptyValues)
  const [submitted, setSubmitted] = useState<FormValues | null>(null)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(values)
    setValues(emptyValues)
  }

  const inputClass = "w-full bg-gray-800 text-gray-100 px-3 py-2 rounded border border-gray-700 focus:outline-none focus:border-blue-500"

  return (
    <form className="w-full max-w-md text-left space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold">{title}</h2>

      <label className="block">
        <span className="block mb-1 text-sm text-gray-400">Name</span>
        <input
          className={inputClass}
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>

      <label className="block">
        <span className="block mb-1 text-sm text-gray-400">Email</span>
        <input
          className={inputClass}
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>

      <label className="block">
        <span className="block mb-1 text-sm text-gray-400">Message</span>
        <textarea
          className={inputClass}
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
        />
      </label>

      <Button>Submit</Button>

      {submitted && (
        <p className="text-sm text-green-400">
          Thanks {submitted.name}, we will reply to {submitted.email}.
        </p>
      )}
    </form>
  )
}

export default Form
