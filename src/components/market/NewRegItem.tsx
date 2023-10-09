import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { MarketListItem } from "./MarketListItem";
import MarketItem from "./item/item";

import Stripe from "../../resource/texture/strip.png";

export default function NewRegItem() {
  return (
    <>
      <Box>
        <Flex
          padding='10px'
          w='100%'
          backgroundColor={"#171715"}
          marginBottom={"10px"}
          backgroundImage={Stripe}
        >
          <Box w='100px'>
            <Text fontSize={'14px'}  marginLeft={"5px"} borderRight={"1px solid white"}>
              이미지
            </Text>
          </Box>
          <Box>
            <Text fontSize={'14px'} marginLeft={"30px"}>상품 정보</Text>
          </Box>
        </Flex>
        <Box>
          <VStack spacing={3}>
            <MarketItem
              name='RGD-5'
              category='gun'
              image='https://assets.tarkov.dev/5448be9a4bdc2dfd2f8b456a-512.webp'
              seller='판매자1'
              price={5000}
              sellerAvatar='https://mblogthumb-phinf.pstatic.net/MjAxODExMDZfMjk1/MDAxNTQxNDgzMjQ2Njkx.nfpggc9vN0l5-p8vjtc9ddl9JZXnqDZseeiBxSEIzeMg.Dv8HMLHaYQNVqobLTNJZ-GgcsF0uylmECBzzBN1ZfJgg.JPEG.kidarinusu/1541483245673.jpg?type=w800'
              key={1}
            />
            <MarketItem
              name='RGD-5'
              category='gun'
              image='https://assets.tarkov.dev/5448be9a4bdc2dfd2f8b456a-512.webp'
              seller='판매자1'
              price={5000}
              sellerAvatar='https://mblogthumb-phinf.pstatic.net/MjAxODExMDZfMjk1/MDAxNTQxNDgzMjQ2Njkx.nfpggc9vN0l5-p8vjtc9ddl9JZXnqDZseeiBxSEIzeMg.Dv8HMLHaYQNVqobLTNJZ-GgcsF0uylmECBzzBN1ZfJgg.JPEG.kidarinusu/1541483245673.jpg?type=w800'
              key={1}
            />
            <MarketItem
              name='RGD-5'
              category='gun'
              image='https://assets.tarkov.dev/5448be9a4bdc2dfd2f8b456a-512.webp'
              seller='판매자1'
              price={5000}
              sellerAvatar='https://mblogthumb-phinf.pstatic.net/MjAxODExMDZfMjk1/MDAxNTQxNDgzMjQ2Njkx.nfpggc9vN0l5-p8vjtc9ddl9JZXnqDZseeiBxSEIzeMg.Dv8HMLHaYQNVqobLTNJZ-GgcsF0uylmECBzzBN1ZfJgg.JPEG.kidarinusu/1541483245673.jpg?type=w800'
              key={1}
            />
            <MarketItem
              name='RGD-5'
              category='gun'
              image='https://assets.tarkov.dev/5448be9a4bdc2dfd2f8b456a-512.webp'
              seller='판매자1'
              price={5000}
              sellerAvatar='https://mblogthumb-phinf.pstatic.net/MjAxODExMDZfMjk1/MDAxNTQxNDgzMjQ2Njkx.nfpggc9vN0l5-p8vjtc9ddl9JZXnqDZseeiBxSEIzeMg.Dv8HMLHaYQNVqobLTNJZ-GgcsF0uylmECBzzBN1ZfJgg.JPEG.kidarinusu/1541483245673.jpg?type=w800'
              key={1}
            />
            <MarketItem
              name='RGD-5'
              category='gun'
              image='https://assets.tarkov.dev/5448be9a4bdc2dfd2f8b456a-512.webp'
              seller='판매자1'
              price={5000}
              sellerAvatar='https://mblogthumb-phinf.pstatic.net/MjAxODExMDZfMjk1/MDAxNTQxNDgzMjQ2Njkx.nfpggc9vN0l5-p8vjtc9ddl9JZXnqDZseeiBxSEIzeMg.Dv8HMLHaYQNVqobLTNJZ-GgcsF0uylmECBzzBN1ZfJgg.JPEG.kidarinusu/1541483245673.jpg?type=w800'
              key={1}
            />
            <MarketItem
              name='RGD-5'
              category='gun'
              image='https://assets.tarkov.dev/5448be9a4bdc2dfd2f8b456a-512.webp'
              seller='판매자1'
              price={5000}
              sellerAvatar='https://mblogthumb-phinf.pstatic.net/MjAxODExMDZfMjk1/MDAxNTQxNDgzMjQ2Njkx.nfpggc9vN0l5-p8vjtc9ddl9JZXnqDZseeiBxSEIzeMg.Dv8HMLHaYQNVqobLTNJZ-GgcsF0uylmECBzzBN1ZfJgg.JPEG.kidarinusu/1541483245673.jpg?type=w800'
              key={1}
            />
          </VStack>
        </Box>
      </Box>
    </>
  );
}
