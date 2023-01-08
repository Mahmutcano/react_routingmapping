import { useStateValue } from 'context/StateProvider.js'
import { useState } from 'react'
import { actionTypes } from 'reducer/store.js'

const Form = () => {
  const [, dispatch] = useStateValue()
  const [form, setForm] = useState({
    name: '',
    latitude: '',
    longitude: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setForm((prevProps) => ({
      ...prevProps,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch({
      type: actionTypes.SET_ADD_FRIEND,
      value: form,
    })
  }

  return (
    <div>
      <h6 className='mb-6 font-bold'>Arkadaş Ekle</h6>
      <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          İsim
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="İsim"
          value={form.name}
          onChange={(event) => handleInputChange(event)}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="latitude"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Latitude
        </label>
        <input
          type="text"
          id="latitude"
          name="latitude"
          value={form.latitude}
          onChange={(event) => handleInputChange(event)}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="longitude"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Longitude
        </label>
        <input
          type="text"
          id="longitude"
          name="longitude"
          value={form.longitude}
          onChange={(event) => handleInputChange(event)}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Kaydet
      </button>
    </form>
    </div>
  )
}

export default Form
