import GetSingleContact from "@/components/GetSingleContact";

 async function signleContactPage({params}:{params:{id:string}}) {
  const {id} = await params;
  return (
    <div>
      <GetSingleContact id={id}/>
    </div>
  ) 
}

export default signleContactPage