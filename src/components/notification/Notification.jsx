import React from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.css";

function Notification() {
  return (
    <div>
        <ToastContainer position='top-left' />
    </div>
  )
}

export default Notification
