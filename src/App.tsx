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

function App() {
  const { setPosts, deletePost } = usePostStore();
  const { setOnline } = useStatusStore();

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

  useEffect(() => {
    if (window.Notification) { Notification.requestPermission() }

    let ws: WebSocket = new WebSocket(WEB_SOCKET);
    ws.onopen = () => {
      setInterval(() => {
        ws.send('heartbeat')
        console.log('send heartbeat')
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
    }

    return () => {
      ws.close();
    };
  }, []);

  return (
    <Box w={"100%"}>
      <Header />
      <Routes>
        <Route path={"/"}        element={<Main />} />
        <Route path={"/discord"} element={<Callback />} />
        <Route path={"/roadmap"} element={<RoadMap />} />
      </Routes>
    </Box>
  );
}

export default App;
