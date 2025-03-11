import { useEffect, useState } from "react";

const Messages = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/messages")
      .then((response) => response.json())
      .then((resp) => setData(resp.messages));
  }, [data] );
  
  return (
    <div>
      {data.length > 0 ? (
        data.map((message) => {
            return (
          <div key={message.id}>
            <p>
              <strong>Expéditeur:</strong> {message.first_name}{" "}
              {message.last_name}
            </p>
            <p>
              <strong>Contenu du message :</strong> {message.content}
            </p>
            <p>
              <strong>Email:</strong> {message.email}
            </p>
            <p>
              <strong>Téléphone:</strong> {message.phone}
            </p>
            <p>
              <strong>Envoyer le :</strong> {message.created_at}
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
