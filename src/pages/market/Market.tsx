import {
  Box,
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Text,
} from "@chakra-ui/react";

import strip from "../../resource/texture/strip.png";
import NewRegLayout from "components/market/NewRegLayout";
import BlackMarket from "../../resource/title/blackmarket.png";
import { useEffect, useState } from "react";
import { API_SERVER } from "application";

import axios from "axios";

export default function Market() {

  const [itemCates, setItemCates] = useState()

  useEffect(() => {
    axios.get(API_SERVER + '/market/category').then(res => setItemCates(res.data))
  }, [])

  return (
    <Box backgroundColor={"black"} pt={6}>
      <Container maxW={"1200px"}>
        <Box pb={'32px'}>
          <Image
            src={BlackMarket}
            w={100}
            style={{
              marginRight: "15px",
              pointerEvents: "none",
            }}/>
          <Text
            fontSize={"14px"}
            color={"#AEAEB0"}
            style={{ marginLeft: "10px" }}>
            암시장은 유저들 간 루블, 달러, 유로 같은 재화나 아이템 거래를 위한
            중계 플랫폼입니다
          </Text>
        </Box>
        <Tabs borderColor={"#202020"} w={'100%'}>
          <TabList>
            <Tab
              p={"8px 28px 8px 28px"}
              letterSpacing={"-1px"}
              color={"gray"}
              _selected={{
                color: "#9A8866",
                backgroundImage: strip,
                fontWeight: "bold",
              }}
            >
              신규 판매 글
            </Tab>
            <Tab
              p={"8px 28px 8px 28px"}
              letterSpacing={"-1px"}
              color={"gray"}
              _selected={{
                color: "#9A8866",
                backgroundImage: strip,
                fontWeight: "bold",
              }}
            >
              내 거래
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel p={'24px 0 0 0'}>
              {itemCates && <NewRegLayout categories={itemCates} />}
            </TabPanel>
            <TabPanel p={'24px 0 0 0'}>
              <p>two!</p>
            </TabPanel>
            <TabPanel p={'24px 0 0 0'}>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
}
