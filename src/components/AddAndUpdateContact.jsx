import React from "react";
import Modal from "./Modal";
import { Field, Form, Formik } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const AddAndUpdateContact = ({ onClose, onOpen }) => {
  const addContact = async (contact) => {
   try {
    const contactRef=collection(db,"contact")
    await addDoc(contactRef,contact)
   } catch (error) {
    console.log(error)
   }
  };

  return (
    <div>
      <Modal onClose={onClose} onOpen={onOpen}>
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          onSubmit={(value) => {
            console.log(value);
            addContact(value)
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="h-10 border" />
            </div>
            <button className="self-end border bg-green-950 px-3 py-1.5 text-white">
              Add Button
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;