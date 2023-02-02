"use client"
import { XCircleIcon } from "@heroicons/react/24/outline";
import Login from "@/components/Login";
import useReducer from "../hooks/reducerHook";
import Image from "next/image";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "5px",
  },
};
const OverlayScreen = () => {
  const { overlay, setOverlay } = useReducer();
  return (
    <div>
      <Modal
        isOpen={overlay.visible}
        //onAfterOpen={afterOpenModal}
        //onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        //contentLabel="Example Modal"
        className=""
      >
        <div className="relative flex flex-col justify-between ">
          <XCircleIcon
            onClick={() => setOverlay({ ...overlay, visible: false })}
            className="absolute w-5 hover:text-blue-400 rounded-full -mt-4 -mr-2 top-2 right-0"
          />
          {/* <div>{overlay.child ? overlay.child : ""}</div> */}
          <div className="">
            <Login />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default OverlayScreen;
