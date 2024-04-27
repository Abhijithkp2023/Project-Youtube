import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState("");
  const dispacth = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API CALL HERE
      dispacth(
        addMessages({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "☺️",
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full border border-black ml-2 p-2"
        onSubmit={(e) => {
          console.log("on form submit" , LiveMessage);
          e.preventDefault();
          dispacth(addMessages({
            name: "Abhijith",
            message: LiveMessage
          }))
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          value={LiveMessage}
          placeholder="Message"
          className=" w-9/12 border m-2  p-2 rounded-lg border-black"
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="bg-green-200 m-1 rounded-md py-1 px-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default LiveChat;
