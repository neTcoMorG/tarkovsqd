
import { HStack, Image, Text, VStack } from "@chakra-ui/react";

interface MarketItemProps {
  name: string;
  seller: string;
  sellerAvatar: string;
  image: string;
  category: string;
  price: number;
}

export default function MarketItem (props: MarketItemProps) {
  return (
    <HStack h={'75px'} w={'100%'} bgColor={'#171715'} p={'8px 8px 8px 8px'} spacing={6}>
      <Image 
        src={props.image}
        objectFit={'cover'}
        w={'63px'}
        border={'1px solid #9a8866'}
      />
      <VStack alignItems={'flex-start'} spacing={0}>
        <Text fontSize={'14px'} color={'#AEAEB0'} letterSpacing={'-1px'}>{props.category}</Text>
        <Text fontSize={'16px'} fontWeight={'bold'} color={'#9a8866'}>{props.name}</Text>
      </VStack>
    </HStack>
  );
}
