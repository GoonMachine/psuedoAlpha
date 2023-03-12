import type { NextPage } from "next";
import { SignInButton, ethos } from "ethos-connect";
import { useCallback, useEffect, useState } from "react";
import { Disconnect, Fund, Mint, WalletActions } from "../components";
import signUpStream from '/Users/gregorygotsis/ethos-example-app/lib/signUp';
import Input from "../components/Input";
type Props = {
  onSend: (text: string) => void;
}

const ChatInput = ({ onSend }: Props) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onSend(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your message here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};




const Home: NextPage = () => {
  const { status, wallet } = ethos.useWallet();
  const [version, setVersion] = useState<number>(0);
  const reset = useCallback(() => {
    setVersion(prev => prev + 1)
  }, []);

  useEffect(reset, [wallet?.address, reset])

  return (
  

    <><div>
  
      {!wallet ? (
        <div className="flex flex-col items-center justify-center">
                  <div className="w-64 mt-10">
            <Mint 
            version={version}
           reset={reset} />
        </div>
          <div className="w-64 h-10">
          </div>
          {signUpStream.map((item) => (
            <div
              className="stats shadow flex items-center justify-center mb-6"
              style={{ height: "120px", width: "400px" }}
              key={item.id}
            >
              <div className="stat flex items-center flex-grow">
                <div className="stat-figure text-secondary mr-4">
                  <div className="avatar online">
                    <div className="w-16 rounded-full">
                      <img src={item.image} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-grow">
                  <h2 className="text-xl">
                    {item.name}
                    <span className="badge badge-md ml-2">{item.badge}</span>
                  </h2>
                  <div className="badge badge-red mt-1">
                    {item.remaining} Remaining
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>


          <div className="flex flex-col items-center justify-center">
            <div>
            <Input></Input>

              {signUpStream.map((chat) => (
                <>
                  <div className="chat-bubble-container" style={{ display: "flex", margin: "20px 0" }}>
                    
                    <div>
                      <div className="chat-header text-left">
                        {chat.name}
                      </div>
                      <div className="chat-bubble text-left">
                        <div className="chat-image avatar" style={{ float: "left", marginRight: "10px" }}>
                          <div className="w-10 rounded-full">
                            <img src={chat.image} />
                          </div>
                        </div>
                        {chat.text}
                      </div>
                      <div className="chat-footer text-xs text-left opacity-50" style={{ margin: "2px 0" }}> Delivered |
                        <time className="text-xs">{chat.timestamp}</time>
                      </div>
                    </div>
                  </div>

                </>

              ))}
            </div>
          </div>
        </>


      )}
    </div><div className="p-12 flex-1 flex justify-end"></div></>
          
  );
};

export default Home;
