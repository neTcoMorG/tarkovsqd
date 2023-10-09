import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

interface MarketListItemProps {
  image: string;
  name: string;
  quantity: number;
  price: number;
}

export const MarketListItem = ({
  image,
  name,
  quantity,
  price,
}: MarketListItemProps) => {
  return (
    <Box bgColor={"#16202d"}>
      <HStack justifyContent={"space-between"} paddingX={"32px"}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={"30px"}>
          <Image
            src={image}
            width={"80px"}
            border={"1px solid white"}
            padding={"10px"}
          />
          <Text fontWeight={"800"} fontSize={"20px"}>
            {name}
          </Text>
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={"30px"}
          fontSize={"18px"}
        >
          <Text>
            {quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </Text>
          <Flex
            fontSize={"15px"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text>Starting at:</Text>
            <Text fontWeight={"600"}>${price} USD</Text>
          </Flex>
        </Flex>
      </HStack>
    </Box>
  );
};
