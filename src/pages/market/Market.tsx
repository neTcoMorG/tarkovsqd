import {
  Box,
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import strip from '../../resource/strip.png'
import NewRegItem from "components/market/NewRegItem";

export default function Market() {
  return (
    <Box backgroundColor={"black"} pt={10}>
      <Container maxW={"1200px"}>
        <Tabs borderColor={'#202020'}>
          <TabList>
            <Tab
              p={'8px 28px 8px 28px'}
              letterSpacing={'-1px'}
               color={'gray'} _selected={{
                color: "#9A8866",
                backgroundImage: strip,
                fontWeight: "bold",
              }}>신규 판매 글</Tab>
            <Tab
              p={'8px 28px 8px 28px'}
              letterSpacing={'-1px'} color={'gray'} _selected={{
                color: "#9A8866",
                backgroundImage: strip,
                fontWeight: "bold",
              }}>인기있는 아이템</Tab>
            <Tab 
              p={'8px 28px 8px 28px'}
              letterSpacing={'-1px'} color={'gray'} _selected={{
                color: "#9A8866",
                backgroundImage: strip,
                fontWeight: "bold",
              }}>최근 판매된 아이템</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <NewRegItem />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
}
