import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import "./modal.css"

export default function Modal() {
  return (
    <div className="modal">
        <div className="modal-header">
            Confirm
        </div>
        <button className="close-btn">
        <IoCloseSharp />
        </button>

        <div className="modal-content">Are you really want to Logout</div>
        <div className="modal-actions">
            <button>logout Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, neque esse. Quo corrupti laborum maiores architecto, cum nesciunt eveniet unde, molestiae repellendus corporis iure eum reiciendis dicta beatae quae, doloribus sit? Saepe, quod!</button>
            <button>cancel</button>
        </div>
    </div>
  )
}
