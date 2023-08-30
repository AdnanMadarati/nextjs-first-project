import classes from "./contact-form.module.css";
import { useRef, useState, useEffect } from "react";
import Notification from "../ui/ui/notification";

export default function ContactForm() {
  const emailInput = useRef();
  const nameInput = useRef();
  const messageInput = useRef();

  const [reqStatus, setReqStatus] = useState();

  useEffect(() => {
    if (reqStatus === "success" || reqStatus === "error") {
      setTimeout(() => {
        setReqStatus(null);
      }, 3000);
    }
  }, [reqStatus]);

  async function sumbitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredName = nameInput.current.value;
    const enteredMessage = messageInput.current.value;

    const reqBody = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    };

    setReqStatus("pending");

    const response = await fetch("/api/user-message", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (!response.ok) {
      setReqStatus("error");
      return;
    }

    setReqStatus("success");
  }

  let notification;

  if (reqStatus === "pending") {
    notification = {
      status: "pending",
      title: "Pending",
      message: "Loading...",
    };
  }

  if (reqStatus === "success") {
    notification = {
      status: "success",
      title: "Success",
      message: "Done!",
    };
  }

  if (reqStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: "Failed!",
    };
  }

  return (
    <section className={classes.contact} onSubmit={sumbitHandler}>
      <h1>How can we help?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInput} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameInput} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" required rows="5" ref={messageInput} />
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}
