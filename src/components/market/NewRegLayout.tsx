import { HStack, Text, VStack } from "@chakra-ui/react";
import MarketItem from "./item/item";

export default function NewRegLayout({categories}: any) {
  return (
    <>
      <HStack w={'100%'} alignItems={'flex-start'} spacing={5}>
        <VStack spacing={3} w={'70%'}>
          <MarketItem
            name='RGD-5'
            category='gun'
            image='https://assets.tarkov.dev/5448be9a4bdc2dfd2f8b456a-512.webp'
            seller='판매자1'
            price={5000}
            sellerAvatar='https://mblogthumb-phinf.pstatic.net/MjAxODExMDZfMjk1/MDAxNTQxNDgzMjQ2Njkx.nfpggc9vN0l5-p8vjtc9ddl9JZXnqDZseeiBxSEIzeMg.Dv8HMLHaYQNVqobLTNJZ-GgcsF0uylmECBzzBN1ZfJgg.JPEG.kidarinusu/1541483245673.jpg?type=w800'
            key={1} />
        </VStack>
        <VStack w={'30%'} bgColor={'#191815'} alignItems={'flex-start'} p={'12px'} spacing={3}>
            {categories.map((c: string) => 
              <Text>{c}</Text>)}
        </VStack>
      </HStack>
    </>
  );
}
