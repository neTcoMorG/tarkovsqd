import { Box, Flex, Text } from "@chakra-ui/react";
import { MarketListItem } from "./MarketListItem";
import MarketItem from "./item/item";

import Stripe from "../../resource/texture/strip.png";

export default function NewRegItem() {
  return (
    <>
      <Box p={"32px 0 32px 0"}>
        <Text
          fontWeight={"bold"}
          color={"#9a8866"}
          letterSpacing={"-1px"}
          fontSize={"18px"}
        >
          신규
        </Text>
        <Text fontSize={"14px"} color={"#AEAEB0"} pt={4} mb={"30px"}>
          가장 최근에 등록된 아이템들을 보여드립니다. <br />
        </Text>
        <Flex
          padding='10px'
          w='100%'
          backgroundColor={"#171715"}
          marginBottom={"10px"}
          borderRadius={"10px"}
          backgroundImage={Stripe}
        >
          <Box w='100px'>
            <Text marginLeft={"5px"} borderRight={"1px solid white"}>
              이미지
            </Text>
          </Box>
          <Box>
            <Text marginLeft={"30px"}>상품 정보</Text>
          </Box>
        </Flex>
        <Box>
          <Box>
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
          </Box>
        </Box>
      </Box>
    </>
  );
}
