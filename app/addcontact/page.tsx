'use client'

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react"

interface createContactInterface{
    name:string,
    email:string,
    phoneNumber:string,
}

export default function AddContactPage(){
    const [formData,setFormData] = useState<createContactInterface>({
        name:"",
        email:"",
        phoneNumber:"",
    });

    const route = useRouter();

    function handleChange(e:any){
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});

    };
    async function handleSubmit(e:any){
        e.preventDefault();
        const {data} = await axios.post(`/api/ContactUser`,formData);
        if(data.ok){
            route.push('/')
        }
    };

    return (
      <>
        <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10 px-4">
          <div className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-xl border border-gray-200">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Add New Contact
            </h1>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                placeholder="Enter name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-400"
              />

              <input
                placeholder="Enter email"
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-400"
              />

              <input
                placeholder="Enter phone number"
                name="phoneNumber"
                type="text"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-400"
              />

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition duration-200"
              >
                Create Contact
              </button>
              <Link
                href="/"
                className="w-full md:w-auto px-6 py-3 text-center text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] active:scale-95"
                >
                Go Home
              </Link>
            </form>
          </div>
        </div>
      </>
    );
}