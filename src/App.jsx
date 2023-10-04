import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { Box } from "@chakra-ui/react";
import Callback from './pages/Discord'

function App() {
  return (
    <Box w={'100%'} bgColor={'black'}>
      <Routes>
        <Route path="/"         element={<Main />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </Box>
  );
}

export default App;
