import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { Box } from "@chakra-ui/react";
import Callback from './pages/Discord'
import { useEffect, useState } from "react";

import { WEB_SOCKET } from "./application";

function App() {
  


  useEffect(() => {
    const ws = new WebSocket(WEB_SOCKET)
    ws.onopen = () => {
      console.log('conneceted!')
    }

    ws.onmessage = (data) => {
      console.log(data)
    }

    return () => {
      console.log('clean up')
      ws.close()
    }
  }, [])

  return (
    <Box w={'100%'} bgColor={'black'}>
      <Routes>
        <Route path="/"        element={<Main />} />
        <Route path="/discord" element={<Callback />} />
      </Routes>
    </Box>
  );
}

export default App;
