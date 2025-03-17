"use client";
import { useEffect, useState } from "react";

const Messages = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/messages")
      .then((response) => response.json())
      .then((resp) => setData(resp.member));
  }, [] );
  
  return (
    <div>
      {data.length > 0 ? (
        data.map((message) => {
            return (
          <div key={message.id}>
            <p>
              <strong>Expéditeur:</strong> {message.expeditor}
            </p>
            <p>
              <strong>Objet :</strong> {message.object}
            </p>
            <p>
              <strong>Contenu du message :</strong> {message.content}
            </p>
            {/* <p>
              <strong>Téléphone:</strong> {message.phone}
            </p> */}
            <p>
              <strong>Envoyé le :</strong> {message.createdAt}
            </p>
          </div>
        )})
      ) : (
        <p>Aucun message disponible</p>
      )}
    </div>
  );
};

export default Messages;
