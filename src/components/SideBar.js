import styled from "styled-components";
import React, { useState } from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InboxIcon from "@material-ui/icons/Inbox";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useAuthState } from "react-firebase-hooks/auth";

function SideBar() {
  const [user]= useAuthState(auth);
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  //  const [channels, setChannels ] = useState(db.collection("newRoom"));
  // const channels= db.collection("newRoom");
  // const channels= firebaseApp.firestore().collection("newRoom").get();
  // const channels= db.collection("room").get()
  // const docVal= doc(db,"newRoom", "2rezLHdoog1T21rP14TK")
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>NEW WEB</h2>
          <h3>
            <FiberManualRecordIcon />
            {user.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mention & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
      {/* {JSON.stringify(channels)} */}
      {channels?.docs.map((doc) => (
        <SidebarOption
          key={doc.id}
          id={doc.id}
          addChanelOption
          title={doc.data().name}
        />
      ))}
      
      {/* {channels?.docs.map((doc) => console.log(doc.data()))} */}
    </SidebarContainer>
  );
}
 
export default SideBar;

const SidebarContainer = styled.div`
  background-color: var(--proj-color);
  /* position: absolute; */
  margin-top: 60px;
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  height: 100%;
  /* overflow-y: scroll; */
  ${'' /* max-width: 260px; */}
  min-height:91.5vh;
  ${'' /* height: 100%; */}

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  ${"" /* padding:13px; */}

  > .MuiSvgIcon-root {
    color: #49274b;
    padding: 5px;
    font-size: 18px;
    margin-top: 4px;
    margin-right: 15px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-left: -50px;
    ${"" /* margin-bottom:px; */}
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 5px;
    margin-right: 2px;
    color: green;
  }
`;

// import React from 'react'
// import { SidebarContainer, SidebarHeader, SidebarInfo } from "../styled/SideBarStyled"
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// import CreateIcon from '@mui/icons-material/Create';
// import SidebarOptions from './SidebarOptions';
// import { Add, AddIcCallOutlined, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FileCopy, Inbox, InsertComment, PeopleAlt } from '@mui/icons-material';
// import { useCollection } from "react-firebase-hooks/firestore"
// import { db } from "../firebase"

// function Sidebar() {
//     const [channels, loading, error] = useCollection(db.collection("rooms"));

//     return (
//         <SidebarContainer>
//             <SidebarHeader>
//                 <SidebarInfo>
//                     <h2>
//                         NM SLACK
//                     </h2>
//                     <h3>
//                         <FiberManualRecordIcon />
//                         Nikhil Maurya
//                     </h3>
//                 </SidebarInfo>
//                 <CreateIcon />
//             </SidebarHeader>
//             <SidebarOptions Icon={InsertComment} title="Threads" />
//             <SidebarOptions Icon={Inbox} title="Mentions" />
//             <SidebarOptions Icon={Drafts} title="Saved Items" />
//             <SidebarOptions Icon={BookmarkBorder} title="Channel browser" />
//             <SidebarOptions Icon={PeopleAlt} title="People & groups" />
//             <SidebarOptions Icon={Apps} title="Apps" />
//             <SidebarOptions Icon={FileCopy} title="File Browser" />
//             <SidebarOptions Icon={ExpandLess} title="Show Less" />
//             <hr />
//             <SidebarOptions Icon={ExpandMore} title="Channels" />
//             <hr />
//             <SidebarOptions Icon={Add} addChanelOption title="Add channel" />

//             {channels?.docs.map(doc => (
//                 <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
//             ))}

//         </SidebarContainer>
//     )
// }

// export default Sidebar
