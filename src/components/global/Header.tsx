import { Box, Container, Image, HStack, Text, Tooltip, Badge } from "@chakra-ui/react";

import useStatusStore from "../../store/useStatusStore";
import { useNavigate } from "react-router";

import squad from "../../resource/brand/squad.png";

export default function Header() {
  const { online } = useStatusStore();
  const navigate = useNavigate();

  return (
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
                {/* <Text
                  onClick={() => navigate("/")}
                  fontSize={"15px"}
                  color={"#9A8866"}
                  cursor={"pointer"}
                >
                  팀원찾기
                </Text> */}
                <Tooltip label={'타르코프 데이터베이스'} fontSize={'12px'} bgColor={'#191815'}>
                  <Text
                    fontSize={"15px"}
                    color={"#9A8866"}
                    cursor={"pointer"}
                    fontWeight={'bold'}
                    position={'relative'}
                  >
                    <Badge position={'absolute'} fontWeight={'bold'} fontSize={'3px'} colorScheme="red" top={'-15px'} left={'13px'} cursor={'default'}>NEW</Badge>
                    <a href="https://tarkov.akdong.kr/"
                       target="_blank"
                       rel="noopener noreferrer">작전 현황</a>
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
            <Text color={"#9a8866"} letterSpacing={"-1px"} fontSize={"14px"}>
              실시간 스쿼드 이용자:{" "}
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
      {/* <Box w={'100%'} borderTop={'1px solid #101010'}>
				<Container maxW={'1200px'} p={'16px 16px 16px 16px'}>
					<HStack justifyContent={'space-between'} h={'100%'}>
						<HStack spacing={10}>
							<Text
								onClick={() => navigate('/')} 
								fontSize={'14px'} color={ '#9A8866' } cursor={'pointer'}>팀원찾기</Text>
							<Text 
								onClick={() => navigate('/market')}
								fontSize={'14px'} color={ '#9A8866' } cursor={'pointer'}>암시장</Text>
						</HStack>
						<Text 
							onClick={() => navigate('/market')}
							fontSize={'14px'} color={ 'green' } letterSpacing={'-1px'} cursor={'pointer'}>쉐르파 인증하기</Text>
					</HStack>
				</Container>
			</Box> */}
    </Box>
  );
}
