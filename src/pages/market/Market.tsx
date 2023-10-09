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
import NewRegItem from "components/market/NewRegItem";
import BlackMarket from "../../resource/title/blackmarket.png";

export default function Market() {
  return (
    <Box backgroundColor={"black"} pt={10}>
      <Container maxW={"1200px"}>
        <Box style={{ padding: "20px", paddingTop: "0" }}>
          <Image
            src={BlackMarket}
            w={100}
            style={{
              marginRight: "15px",
              pointerEvents: "none",
            }}
          />
          <Text
            fontSize={"14px"}
            color={"#AEAEB0"}
            style={{ marginLeft: "10px" }}
          >
            암시장은 유저들 간 루블, 달러, 유로 같은 재화나 아이템 거래를 위한
            중계 플랫폼입니다
          </Text>
        </Box>
        <Tabs borderColor={"#202020"}>
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
              인기있는 아이템
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
              최근 판매된 아이템
            </Tab>
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
