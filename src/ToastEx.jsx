import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastEx() {
  const showToast = () => {
    toast.success("🟢 Success! This is a toast message.");
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default ToastEx;
