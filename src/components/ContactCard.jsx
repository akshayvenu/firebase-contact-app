import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const ContactCard = ({contact}) => {


  const deleteContact = async(id)=>{
try {
  await deleteDoc(doc(db,"contact",id))
} catch (error) {
  console.log(error)
  
}
  }

  return (
    <div
    key={contact.id}
    className="flex items-center justify-between rounded-lg bg-yellow px-2 "
  >
    <div className="flex gap-1">
      <HiOutlineUserCircle className="text-4xl text-green-900 " />
      <div className="ml-3">
        <h2 className="font-medium ">{contact.name}</h2>
        <p className="text-sm">{contact.email}</p>
      </div>
    </div>
    <div className="text-3xl">
      <RiEditCircleLine />
      <IoMdTrash onClick={()=>deleteContact(contact.id)} className="text-green-900 cursor-pointer" />
    </div>
  </div>
  )
}

export default ContactCard