import { useState, useId } from 'react';
import './Subscribe.css';
import { useRef } from "react";


function Subscribe() {
  const dialogRef = useRef();

  const [name, setName] = useState('');
  const id = useId();
  const [email, setEmail] = useState('');
  const [confirmEmail, setconfirmEmail] = useState('');
  // const [isInvalid, setisInvalid] = useState(false);
  
  const isInvalid = (email.search("@") === -1 || confirmEmail !== email);
  // const invalidEmail = isInvalid ? 'register__email--invalid' : '';



  return (
    <main id="main">
      <form className="register__form" onSubmit={(e) => {
        e.preventDefault();
        // setisInvalid = (email.search("@") === -1)
      }}>
        <h2 className="register__title">Register Form</h2>
        <p className="register__text">* means required</p>
        <div className="register__name">
          <label htmlFor={`${id}-name`}>
            Name*:
            <input id={`${id}-name`} type="text" onChange={(e) => {
              setName(e.target.value);
            }}
              value={name} />
          </label>
        </div>
        <div className="register__email">
          {isInvalid && (<span className={"register-email__error"}
          >This field be a valid email address including a @</span>)}
          <label htmlFor={`${id}-email`}>
            Email*:
            <input id={`${id}-email`} type="text" onChange={(e) => {
              setEmail(e.target.value);
            }}
              value={email} />
          </label>
        </div>
        <div className="register__confirm">
          {isInvalid && (<span className="register-confirm__error">This field must match the email.</span>)}
          <label htmlFor={`${id}-conemail`}>Confirm Email*:
            <input id={`${id}-conemail`} type="text" onChange={(e) => {
              setconfirmEmail(e.target.value);
            }}
              value={confirmEmail} />
          </label>
        </div>
        <div className="register__submit">
          <button type="submit" className="register__submit"
            disabled={(!name) || (!confirmEmail) || (!email)}
            onClick={() => dialogRef.current.showModal()}>
            Submit
          </button>

          <dialog ref={dialogRef} >
            <span>Submission Successful</span>
            <br />
            <button onClick={() => dialogRef.current.close()}>
              Close
            </button>
          </dialog>
        </div>
      </form>
    </main>
  );
}

export default Subscribe;
