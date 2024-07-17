import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./modal.css"
import React,  { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';
 

function StaticExample() {
  const navigate = useNavigate()
  const {setmodalopen} = useContext(LoginContext)

  const logout = () => {
    localStorage.clear()
    navigate("/")
  }


  return (
    <div className="dark-bg" onClick={()=>setmodalopen(false)}>
      <div className="modal-centered">
        <div
          className="modal show logout-modal"
          style={{ display: 'block', position: 'fixed' }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton onClick={()=>setmodalopen(false)}>
              <Modal.Title>Confirm</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Are You Really Want to Logout</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={()=>setmodalopen(false)}  >Close</Button>
              <Button variant="primary"  onClick={logout}>Logout</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </div>
    </div>
  );
}

export default StaticExample;