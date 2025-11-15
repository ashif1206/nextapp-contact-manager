

import Contacts from '../components/Contacts'

interface Contact {
  _id:string,
  name:string,
  email:string,
  phoneNumber:string,
};

interface ApiResponse {
  ok:boolean,
  contact:Contact[],
}


export default async  function Home() {
  const res = await fetch(`http://localhost:3000/api/ContactUser`,{
    cache: "no-store",
  });
  const data : ApiResponse = await res.json();

  return (
    <>
    <Contacts user={data.contact}/>
    </>
  );
}
