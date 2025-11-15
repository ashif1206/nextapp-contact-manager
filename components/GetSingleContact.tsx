'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Trash2, Pencil } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Contact {
  name: string
  email: string
  phoneNumber: string
}

function GetSingleContact({ id }: { id: string }) {
  const [singleContactData, setSingleContactData] = useState<Contact | null>(null)
  const [isEdit, setIsEdit] = useState(false)
  const router = useRouter()

  useEffect(() => {
    async function getSingleContact() {
      const { data } = await axios.get(`/api/ContactUser/${id}`)
      setSingleContactData(data.contact)
    }
    getSingleContact()
  }, [id])

  function handleChange(e: any) {
    const { name, value } = e.target
    setSingleContactData(prev => ({ ...prev!, [name]: value }))
  }

  async function handleUpdate(e: any) {
    e.preventDefault()
    try {
      await axios.put(`/api/ContactUser/${id}`, singleContactData)
      alert("Contact Updated Successfully!")
      setIsEdit(false)
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  async function handleDelete() {
    try {
      await axios.delete(`/api/ContactUser/${id}`)
      alert("Contact Deleted!")
      router.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  if (!singleContactData) return <p>Loading...</p>

  return (
    <div className="p-6 bg-white rounded-lg shadow mt-5 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
      <div className="flex gap-4 mb-5">
        {!isEdit && (
          <button
            onClick={() => setIsEdit(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
          >
            <Pencil size={18} /> Edit
          </button>
        )}

        {!isEdit && (
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded cursor-pointer"
          >
            <Trash2 size={18} /> Delete
          </button>
        )}

        {isEdit && (
          <button
            onClick={handleUpdate}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded cursor-pointer"
          >
            Update
          </button>
        )}
        <Link
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded"
         href={'/'}>Go Back</Link>
      </div>

      <div className="space-y-3 bg-gray-100 p-4 rounded-lg">

        <input
          type="text"
          name="name"
          value={singleContactData.name}
          disabled={!isEdit}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          value={singleContactData.email}
          disabled={!isEdit}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="phoneNumber"
          value={singleContactData.phoneNumber}
          disabled={!isEdit}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

      </div>
    </div>
  )
}

export default GetSingleContact
