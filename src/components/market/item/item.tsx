import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

interface MarketItemProps {
  name: string;
  seller: string;
  sellerAvatar: string;
  image: string;
  category: string;
  price: number;
}

export default function MarketItem(props: MarketItemProps) {
  return (
    <Link textDecoration={"none"}>
      <Flex
        position={"relative"}
        backgroundColor={"#171715"}
        padding={"10px"}
        marginBottom={"10px"}
        borderRadius={"10px"}
        border={"0px solid #9A8866"}
        boxShadow='0px 0px 0px 0px #9A8866'
        _hover={{
          border: "1px solid #9A8866",
          boxShadow: "3px 3px 0px 0px #9A8866;",
          transform: "translateX(-3px) translateY(-3px)",
          transitionDuration: "0.5s",
          transitionTimingFunction: "ease-in-out",
        }}
      >
        <Image
          src={props.image}
          w={"100px"}
          border={"2px solid #646464"}
          borderRadius={"5px"}
        />
        <Flex
          direction='column'
          justifyContent={"center"}
          flex={3}
          padding={"10px"}
          pl={"30px"}
        >
          <Text fontSize={"13px"} color={"rgba(255, 199, 86, 0.589)"}>
            아이템
          </Text>
          <Text fontSize={"20px"}>{props.name}</Text>
          <Text fontSize={"13px"} color={"#949494"}>
            {props.category}
          </Text>
        </Flex>
        <Flex
          justifyContent={"center"}
          direction={"column"}
          flex={0.5}
          padding={"10px"}
        >
          <Flex flex={1} alignItems={"center"}>
            <Image
              w='20px'
              h='20px'
              src={props.sellerAvatar}
              borderRadius={"100%"}
              mr='10px'
            />
            <Text fontSize={"13px"}>{props.seller}</Text>
          </Flex>
          <Text flex={1}>
            {"$"}
            {props.price} ~
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
}
