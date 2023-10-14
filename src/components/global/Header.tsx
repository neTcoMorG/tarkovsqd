import { Box, Container, Image, HStack, Text, Tooltip, Badge } from "@chakra-ui/react";

import useStatusStore from "../../store/useStatusStore";
import { useNavigate } from "react-router";

import squad from "../../resource/brand/squad.png";
import { BrowserView, MobileView } from "react-device-detect";

export default function Header() {
  const { online } = useStatusStore();
  const navigate = useNavigate();

  return (
    <>
      <BrowserView>
        <Box
          w={"100%"}
          position={"relative"}
          bgColor={"black"}
          boxShadow={"0 0 100px rgba(65,61,52,1), 0 0 6px rgba(232,190,107,0.8)"}
          zIndex={10}
        >
          <Container maxW={"1200px"} p={"24px 16px 24px 16px"}>
            <HStack spacing={4} w={"100%"} justifyContent={"space-between"}>
              <HStack spacing={"130px"}>
                <Image onClick={() => navigate('/')} src={squad} w={"75px"} h={"auto"} cursor={'pointer'} />
                <HStack justifyContent={"space-between"} h={"100%"}>
                  <HStack spacing={12}>
                    <Tooltip label={'타르코프 데이터베이스'} fontSize={'12px'} bgColor={'#191815'}>
                      <Text
                        fontSize={"15px"}
                        color={"#9A8866"}
                        cursor={"pointer"}
                        fontWeight={'bold'}
                        position={'relative'}
                      >
                        <a href="https://tarkov.akdong.kr/"
                          target="_blank"
                          rel="noopener noreferrer">작전현황</a>
                      </Text>
                    </Tooltip>
                    <Text
                      onClick={() => navigate("/roadmap")}
                      fontSize={"15px"}
                      color={"#9A8866"}
                      letterSpacing={"-1px"}
                      cursor={"pointer"}
                      fontWeight={'bold'}
                    >
                      문의사항
                    </Text>
                  </HStack>
                </HStack>
              </HStack>
              <HStack>
                <Text color={"#9a8866"} letterSpacing={"-1px"} fontWeight={'bold'} fontSize={"14px"}>
                  현재 사용자:{" "}
                </Text>
                {online > 0 ? (
                  <Text fontWeight={"bold"} color={"green"} fontSize={"15px"}>
                    {online}
                  </Text>
                ) : (
                  <Text fontSize={"15px"} color={"gray"} fontWeight={"bold"}>
                    0
                  </Text>
                )}
              </HStack>
            </HStack>
          </Container>
        </Box>
      </BrowserView>
      <MobileView>
        <Box boxShadow={"0 0 100px rgba(65,61,52,1), 0 0 6px rgba(232,190,107,0.8)"}>
          <HStack 
            justifyContent={'space-between'} 
            p={'14px 10px 14px 10px'} w={'100%'} h={'65px'} 
            bgColor={'black'}
            zIndex={10}>
            <HStack spacing={10}>
              <Image src={squad} h={'58px'} w={'58px'} objectFit={'contain'}/>
              <HStack spacing={1}>
                <Badge fontSize={'10px'} colorScheme="red">NEW</Badge>
                <Text fontSize={'12px'} color={'#9A8866'} fontWeight={'bold'}>
                  <a href="https://tarkov.akdong.kr/">작전현황</a>
                </Text>
              </HStack>
            </HStack>
            <Box>
              <HStack fontSize={'12px'}>
                <Text color={'#9A8866'}>현재 접속자</Text>
                <Text color={'green'} fontWeight={'bold'}>{online}</Text>
              </HStack>
            </Box>
          </HStack>
        </Box>
      </MobileView>
    </>
  );
}
