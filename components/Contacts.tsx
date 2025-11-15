'use client';
import React from 'react';
import { Pencil,Eye, View } from 'lucide-react';
import axios from "axios";
import { useRouter } from "next/navigation";

interface Contact {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
}

interface ContactsProps {
  user: Contact[];
}

const Contacts: React.FC<ContactsProps> = ({ user }) => {
  const router = useRouter();

  function viewContact(id: string) {
    router.push(`/contact/${id}`);
  }

  return (
    <div className="p-6 mt-8">
      
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-200">
        
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          📇 All Contacts
        </h2>

        <div className="overflow-x-auto rounded-xl border border-gray-300 shadow-lg">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-amber-500/90 text-white">
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone</th>
                <th className="p-4 text-center">View Contact</th>
              </tr>
            </thead>

            <tbody>
              {user.map((item, index) => (
                <tr
                  key={item._id}
                  className={`transition-all duration-200 hover:bg-amber-50 ${
                    index % 2 !== 0 ? "bg-gray-50/50" : "bg-white"
                  }`}
                >
                  <td className="p-4 border-b border-gray-200 text-gray-800 font-medium">
                    {item.name}
                  </td>

                  <td className="p-4 border-b border-gray-200 text-gray-700">
                    {item.email}
                  </td>

                  <td className="p-4 border-b border-gray-200 text-gray-700">
                    {item.phoneNumber}
                  </td>

                  <td className="p-4 border-b border-gray-200">
                    <div className="flex justify-center gap-6">
                      <button
                        onClick={() => viewContact(item._id)}
                        className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 hover:scale-110 transition-all"
                      >
                        <View size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {user.length === 0 && (
          <p className="text-center text-lg text-gray-500 mt-6">
            No contacts found 👀
          </p>
        )}

      </div>
    </div>
  );
};

export default Contacts;
