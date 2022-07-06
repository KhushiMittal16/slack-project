import React from "react";
import styled from "styled-components";

export const Message = ({ message, timestamp, user, userImage }) => {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user}
          <span>{new Date(timestamp&&timestamp.toDate()).toLocaleString("en-US", {timeZone: "Asia/Kolkata"})}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    margin-top: -50px;
    >img{
        height: 50px;
        border-radius: 8px;
    }
`;

const MessageInfo = styled.div`
    padding-left: 18px;
    text-align: left;
    align-items: center;
    >h4{
        /* margin-top: -2px; */
        margin-bottom: -15px;
    }

    >h4>span{
        color: gray;
        font-weight: 300;
        margin-left: 4px;
        font-size: 10px;
    }
`;
