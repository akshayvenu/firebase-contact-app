import Nav from "./components/Nav";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";

const App = () => {
  const [contacts, setcontacts] = useState([]);
  const [open, setopen] = useState(false);

  const onOpen = () => {
    setopen(true);
  };
  const onClose = () => {
    setopen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contact");
        const contactSnapshot = await getDocs(contactRef);
        const contactList = contactSnapshot.docs.map((docs) => {
          return {
            id: docs.id,
            ...docs.data(),
          };
        });
        setcontacts(contactList);
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Nav />
        <div className="relative flex items-center ">
          <FiSearch className="absolute ml-1 text-2xl text-white " />
          <input
            type="text"
            name="search"
            className="h-10 flex-grow rounded-md border border-white bg-transparent  pl-9 text-lg font-medium text-white"
          />
          <AiFillPlusCircle
            onClick={onOpen}
            className=" ml-3 cursor-pointer text-5xl text-white"
          />
        </div>

        <div className="mt-4 flex flex-col gap-3">
          {contacts.map((contact) => (
            <ContactCard contact={contact} key={contact.id} />
          ))}
        </div>
        
      </div>
      <AddAndUpdateContact onClose={onClose} onOpen={open}/>
    </>
  );
};

export default App;