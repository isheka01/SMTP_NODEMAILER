import React, { useState } from "react";
import axios from "axios"; // Import axios
import styles from "./smtp.module.css";

function EmailForm() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/send-email", {
        to,
        subject,
        description,
      });

      console.log("Email sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending email:", error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Email Sending</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="to">To:</label>
        <input
          type="email"
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}

export default EmailForm;
