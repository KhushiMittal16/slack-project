import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { Message } from "./Message";

function Chats() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessages, loading, error] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView();
  }, [roomId, loading]);

  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#{roomDetails?.data().name}</strong>
            </h4>
            <StarBorderOutlinedIcon />
          </HeaderLeft>

          <HeaderRight>
            <p>
              <InfoOutlinedIcon />
              Details
            </p>
          </HeaderRight>
        </Header>

        <ChatMessages>
          {roomMessages?.docs.map((doc) => {
            const { message, timestamp, user, userImage } = doc.data();

            return (
              <Message
                key={doc.id}
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userImage}
              />
            );
          })}
          <ChatBottom ref={chatRef} />
        </ChatMessages>

        <ChatInput
          chatRef={chatRef}
          channelId={roomId}
          channelName={roomDetails?.data().name}
        />
      </>
    </ChatContainer>
  );
}

export default Chats;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  ${"" /* margin-top:60px; */}
`;

const Header = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  align-self: center;
  width: 73%;
  ;
  padding: 5px;
  padding-bottom: 0px;
  background-color: #fff;
  margin-top: 50px;
  border-bottom: 1px solid lightgray; ;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 20px;
    font-weight: bolder;
    /* margin-top: 4px; */
  }
`;

const ChatMessages = styled.div`
  padding: 80px 0px;
`;

const ChatBottom = styled.div`
  padding-bottom: 50px;
  /* margin-bottom: -500px; */
`;
