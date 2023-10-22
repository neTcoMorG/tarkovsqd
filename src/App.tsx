import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { Box } from "@chakra-ui/react";
import Callback from "./pages/Discord";
import { useEffect } from "react";

import { WEB, WEB_SOCKET } from "./application";
import usePostStore, { Post } from "./store/usePostStore";
import useStatusStore from "./store/useStatusStore";

import Header from "components/global/Header";
import RoadMap from "pages/roadmap/RoadMap";
import MainRemaster from "components/main/remaster/MainRemaster";
import Donate from "pages/donate/Donate";

function App() {
  const { setPosts, deletePost } = usePostStore();
  const { setOnline }            = useStatusStore();
  
  const sendNoti = (data: Post) => {
    if (Notification.permission !== "granted") {
      return;
    } 
    else {
      const notification = new Notification(data.memo, {
        body:
          "[디스코드] " +
          data.nickname +
          "  " +
          "[맵] " +
          data.map +
          "  " +
          "[서버] " +
          data.server,
      })

      notification.onclick = function () {
        window.open(WEB)
      }
    }
  };

  const initalizeWebSocket = () => {
    const ws: WebSocket = new WebSocket(WEB_SOCKET);
    ws.onopen = () => {
      console.log('connected to wss')
      setInterval(() => {
        if (ws.readyState === 1) {
          ws.send('heartbeat')
          console.log('send heartbeat')
        }
      }, 30000)      
    }

    ws.onmessage = (message) => {
      const packet = JSON.parse(message.data);
      if (packet.type === "DELETE") {
        deletePost(packet.data.key);
      }
      if (packet.type === "UPDATE") {
        setPosts(packet.data);
        sendNoti(packet.data);
      }
      if (packet.type === "ONLINE") {
        setOnline(packet.data);
      }
    };

    ws.onclose = () => {
      console.log('close wss')
      setTimeout(() => {
        console.log('trying reconnected to wss')
        initalizeWebSocket()
      }, 200)
    }

    return ws
  }

  useEffect(() => {
    if (window.Notification) { Notification.requestPermission() }
    initalizeWebSocket()
  }, [])

  return (
    <Box w={"100%"}>
      <Header />
      <Routes>
        <Route path={"/"}         element={<Main />}         />
        <Route path={"/discord"}  element={<Callback />}     />
        <Route path={"/roadmap"}  element={<RoadMap />}      />
        <Route path={'/remaster'} element={<MainRemaster />} />
        <Route path={'/donate'}   element={<Donate />}       />
      </Routes>
    </Box>
  );
}

export default App;
