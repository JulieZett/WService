import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { KontaktSeksjon, KontaktWrapper } from "../KontaktSkjema/Kontaktskjema.elements";

const KontaktSkjema = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Meldingen din er blitt sendt!👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <KontaktSeksjon>
      <KontaktWrapper>
    <form className="form" onSubmit={handleSubmit}>
      <h1>Kontaktskjema</h1>

      <label>Navn</label>
      <input
        placeholder="Navn"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>E-mail</label>
      <input
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Melding</label>
      <textarea
        placeholder="Skriv her"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Send
      </button>
    </form>
    </KontaktWrapper>
    </KontaktSeksjon>
    
  );
};

export default KontaktSkjema
