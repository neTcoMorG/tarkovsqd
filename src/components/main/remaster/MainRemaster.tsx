import { Box, Container } from "@chakra-ui/react";
import NoticeBox from "./NoticeBox";
import PostList from "./PostList";


export default function MainRemaster () {
    return (
        <Box fontFamily={'Pretendard-Regular'} bgColor={'#080808'} pt={'200px'}>
            <Container maxW={'900px'}>
                {/* <NoticeBox /> */}
                <PostList />
            </Container>
        </Box>
    )
}