import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, onOpen, children }) => {
  return createPortal(
    <>
      {onOpen && (
        <>
          <div className=" relative z-50 m-auto  min-h-[200px] max-w-[80%]  bg-white p-2">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={onClose}
                className="cursor-pointer text-2xl"
              />
            </div>
{children}
          
          </div>
        
          <div
            onClick={onClose}
            className="absolute top-0 z-40 h-screen w-screen backdrop-blur"
          />
        </>
      )}
    </>
  ,document.getElementById("modal-root"));
};

export default Modal;
