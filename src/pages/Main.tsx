import {
	Avatar,
	Box,
	Button,
	Center,
	Container,
	HStack,
	Image,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tooltip,
	Tr,
	useDisclosure,
	useToast,
	VStack,
} from '@chakra-ui/react';

import MapSelector from '../components/main/selector/MapSelector';
import RegionSelector from '../components/main/selector/RegionSelector';
import TeamCreateModal from '../components/main/TeamCreateModal';
import LoginModal from '../components/global/LoginModal';
import usePostStore from '../store/usePostStore';

import strip from '../resource/texture/strip.png';
import bg from '../resource/texture/bg.png';
import kr from '../resource/flag/kr.png';
import us from '../resource/flag/us.png';
import jp from '../resource/flag/jp.png';
import rs from '../resource/flag/rs.png';
import aus from '../resource/flag/aus.png';

import gun from '../resource/icon/gun.png';
import money from '../resource/icon/money.png';
import boss from '../resource/icon/boss.png';
import quest from '../resource/icon/quest.png';
import discord from '../resource/icon/discord.png';
import sherpa from '../resource/icon/sherfa.png';

import PlayTypeSelector from '../components/main/selector/PlayTypeSelector';
import { useEffect } from 'react';
import { API_SERVER } from '../application';
import axios from 'axios';
import useFilterStore from '../store/useFilterStore';
import FunctionMenu from '../components/main/FunctionMenu';
import { BrowserView, MobileView } from 'react-device-detect';
import SherfaSelector from 'components/main/selector/SherfaSelector';
import NoticeBox from 'components/main/remaster/NoticeBox';

export default function Main() {
	
	const toast = useToast();
	const loginModal = useDisclosure();
	const teamModal = useDisclosure();
	
	const { posts, initPosts } = usePostStore();
	const { map, server, type, isSherfa } = useFilterStore();
	
	const openModal = () => {
		const token = localStorage.getItem('squadObject');
		
		if (token === null) {
			loginModal.onOpen();
			return;
		}
		
		teamModal.onOpen();
	}
	
	const handleCopyClipBoard = async (e: any) => {
		try {
			await navigator.clipboard.writeText(e.target.innerHTML);
			
			toast({
				title: '디스코드 아이디가 복사되었어요',
				status: 'info',
			})
		} 
		catch (error) {
			alert('클립보드 복사에 실패하였습니다.');
		}
	}
	
	const searchQueryGenerator = () => {
		const query = new URLSearchParams();

		if (map !== null) {
			query.append('map', map);
		}
		if (server !== null) {
			query.append('server', server);
		}
		if (type !== null) {
			query.append('type', type);
		}
		if (isSherfa === true) {
			query.append('sherpa', isSherfa.toString())
		}

		return query.toString();
	}
	
	useEffect(() => {
		axios.get(API_SERVER + '/post?' + searchQueryGenerator()).then((res) => {
			initPosts(res.data.content);
		});
	}, [map, server, type, isSherfa]);
	
	return (
		<>
			<BrowserView>
				<Box
					w={ '100%' }
					zIndex={ 1 }
					bgColor={ 'black' }
					pb={ '400px' }>
					<LoginModal
						onClose={ loginModal.onClose }
						isOpen={ loginModal.isOpen }
						teamModalOpen={ teamModal.onOpen }
					/>
					<TeamCreateModal onClose={ teamModal.onClose } isOpen={ teamModal.isOpen } />
					<Container maxW={ '1200px' } pt={ 8 }>
						<NoticeBox p={'0 0 20px 0'}/>
						<HStack justifyContent={ 'space-between' }>
							<HStack spacing={ 4 }>
								<PlayTypeSelector isFilter={ true } />
								<MapSelector isFilter={ true } />
								<RegionSelector isFilter={ true } />
								<SherfaSelector />
							</HStack>
							<Button
								fontSize={ '14px' }
								bgColor={ '#9A8866' }
								color={ '#29241D' }
								borderRadius={ 0 }
								fontWeight={ 'bold' }
								letterSpacing={ '-1px' }
								onClick={ openModal }
								boxShadow={ '0 0 100px rgba(65,61,52,1), 0 0 20px rgba(232,190,107,0.8)' }>
								팀원 모집
							</Button>
						</HStack>
						<Box bgColor={ '#171715' } mt={ 3 }>
							<TableContainer w={ '100%' }>
								<Table>
									<Thead bgImage={ strip }>
										<Tr>
											<Th
												textShadow={ '1px 1px 1px rgba(0,0,0,.004)' }
												w={ '250px' }
												fontSize={ '11px' }
												color={ '#9A8866' }>
												디스코드
											</Th>
											<Th
												textShadow={ '1px 1px 1px rgba(0,0,0,.004)' }
												w={ '140px' }
												fontSize={ '11px' }
												color={ '#9A8866' }>
												맵
											</Th>
											<Th
												textShadow={ '1px 1px 1px rgba(0,0,0,.004)' }
												w={ '140px' }
												fontSize={ '11px' }
												color={ '#9A8866' }
											>
												플레이 유형
											</Th>
											<Th
												textShadow={ '1px 1px 1px rgba(0,0,0,.004)' }
												w={ '150px' }
												color={ '#9A8866' }
											>
												서버
											</Th>
											<Th
												textShadow={ '1px 1px 1px rgba(0,0,0,.004)' }
												fontSize={ '11px' }
												color={ '#9A8866' }
												w={ '450px' }
											>
												메모
											</Th>
											<Th
												textShadow={ '1px 1px 1px rgba(0,0,0,.004)' }
												fontSize={ '11px' }
												color={ '#9A8866' }
											>
												등록 시간
											</Th>
											<Th
												textShadow={ '1px 1px 1px rgba(0,0,0,.004)' }
												fontSize={ '11px' }
												color={ '#9A8866' }
											>
												기능
											</Th>
										</Tr>
									</Thead>
									<Tbody>
										{ posts &&
											posts.map((p: any) => (
												<Tr fontSize={ '12px' } bgColor={ '#151515' }>
													<Td>
														<HStack spacing={ 2 }>
															<Avatar
																// boxShadow={ p.isSherpa ? '0 0 20px rgba(65,61,52,1), 0 0 10px rgba(232,190,107,0.8)' : '' }
																size={ 'sm' } src={ p.avatar_url } />
															<VStack
																spacing={ 0 }
																alignItems={ 'flex-start' }>
																<HStack>
																	<Tooltip
																		fontSize={ '12px' }
																		bgColor={ '#9a8866' }
																		color={ '#373128' }
																		fontWeight={ 'bold' }
																		label={ '아이디 복사' }>
																		<Text
																			color={'#9A8866' }
																			cursor={ 'pointer' }
																			fontWeight={ 'bold' }
																			onClick={ handleCopyClipBoard }>
																			{ p.nickname }
																		</Text>
																	</Tooltip>
																	<Image
																		position={ 'relative' }
																		top={ '1px' }
																		left={ '-2px' }
																		src={ p.verify ? discord : null }
																		width={ '15px' }
																	/>
																	{/* { p.isSherpa === true &&
																		<Tooltip label={ '쉐르파 유저' }
																		         fontWeight={ 'bold' }
																		         color={ '#90ee90' }
																		         letterSpacing={ '-1px' }
																		         fontSize={ '11px' }
																		         bgColor={ '#151515' }>
																			<Image
																				position={ 'relative' }
																				top={ '1px' }
																				left={ '-2px' }
																				src={ sherpa }
																				width={ '15px' }>
																			</Image>
																		</Tooltip> } */}
																</HStack>
																{ p.verify &&
																	<Text letterSpacing={ '-1px' } fontSize={ '12px' } color={ 'gray' }>인증됨</Text> }
															</VStack>
														</HStack>
													</Td>
													
													<Td color={ '#AEAEB0' } fontWeight={ 'bold' }>
														{ p.map }
													</Td>
													
													{ p.type === '' && <Td color={ 'gray' }>미지정</Td> }
													{ p.type === '파밍' && (
														<Td color={ 'gold' }>
															<Tooltip
																bgColor={ '#9a8866' }
																color={ '#373128' }
																fontSize={ '12px' }
																label={ '파밍 위주 플레이' }>
																<Image
																	alt="파밍"
																	ml={ 2 }
																	src={ money }
																	h={ '21px' }
																	w={ '18px' }
																/>
															</Tooltip>
														</Td>
													) }
													{ p.type === '보스런' && (
														<Td color={ 'crimson' }>
															<Tooltip
																bgColor={ '#9a8866' }
																color={ '#373128' }
																fontSize={ '12px' }
																label={ '보스만 목표로 달린다' }
															>
																<Image
																	alt="보스런"
																	ml={ 1 }
																	src={ boss }
																	h={ '24px' }
																	w={ '24px' }
																/>
															</Tooltip>
														</Td>
													) }
													{ p.type === '교전' && (
														<Td color={ 'crimson' }>
															<Tooltip
																bgColor={ '#9a8866' }
																color={ '#373128' }
																fontSize={ '12px' }
																label={ '교전 위주 플레이' }
															>
																<Image
																	alt="교전"
																	ml={ 2 }
																	src={ gun }
																	h={ '27px' }
																	w={ '25px' }
																/>
															</Tooltip>
														</Td>
													) }
													{ p.type === '퀘스트' && (
														<Td color={ 'crimson' }>
															<Tooltip
																bgColor={ '#9a8866' }
																color={ '#373128' }
																fontSize={ '12px' }
																label={ '퀘스트 위주 플레이' }
															>
																<Image
																	alt="퀘스트"
																	ml={ 2 }
																	src={ quest }
																	h={ '20px' }
																	w={ '19px' }
																/>
															</Tooltip>
														</Td>
													) }
													
													{ p.server === '한국' && (
														<Td>
															<HStack>
																<Image alt="한국" w={ '18px' } h={ '18px' } src={ kr } />
																<Text color={ '#AEAEB0' }>{ p.server }</Text>
															</HStack>
														</Td>
													) }
													{ p.server === '호주' && (
														<Td>
															<HStack>
																<Image alt="호주" w={ '18px' } h={ '18px' } src={ aus } />
																<Text color={ '#AEAEB0' }>{ p.server }</Text>
															</HStack>
														</Td>
													) }
													{ p.server === '북미' && (
														<Td color={ '#AEAEB0' }>
															<HStack>
																<Image alt="북미" w={ '18px' } h={ '18px' } src={ us } />
																<Text color={ '#AEAEB0' }>{ p.server }</Text>
															</HStack>
														</Td>
													) }
													{ p.server === '일본' && (
														<Td color={ '#AEAEB0' }>
															<HStack>
																<Image alt="일본" w={ '18px' } h={ '18px' } src={ jp } />
																<Text color={ '#AEAEB0' }>{ p.server }</Text>
															</HStack>
														</Td>
													) }
													{ p.server === '러시아' && (
														<Td color={ '#AEAEB0' }>
															<HStack>
																<Image
																	alt="러시아"
																	w={ '18px' }
																	h={ '18px' }
																	src={ rs }
																/>
																<Text color={ '#AEAEB0' }>{ p.server }</Text>
															</HStack>
														</Td>
													) }
													{ p.server === '상관없음' && (
														<Td color={ '#AEAEB0' }>
															<HStack>
																<Text color={ '#AEAEB0' }>{ p.server }</Text>
															</HStack>
														</Td>
													) }
													
													<Td wordBreak={ 'break-all' } pr={ 10 }>
														<Tooltip fontSize={ '12px' }
														         bgColor={ '#a98866' }
														         color={ '#373128' }
														         lineHeight={ '16px' }
														         fontWeight={ 'bold' }
														         label={ p.memo }
														         p={ '8px 12px 8px 12px' } borderRadius={ 10 }>
															<Box
																cursor={ 'pointer' }
																bgColor={ '#9a8866' }
																borderRadius={ 5 }
																p={ '8px 10px 8px 10px' }
															>
																<Text
																	lineHeight={ '16px' }
																	color={ '#373128' }
																	whiteSpace={ 'normal' }
																	fontWeight={ 'bold' }
																	style={ {
																		overflow: 'hidden',
																		display: '-webkit-box',
																		WebkitLineClamp: 2,
																		WebkitBoxOrient: 'vertical',
																		textOverflow: 'ellipsis',
																	} }
																>
																	{ p.memo }
																</Text>
															</Box>
														</Tooltip>
													</Td>
													<Td color={ 'gray' }>{ p.time }</Td>
													<Td>
														<FunctionMenu UUID={ p.uuid } postId={ p.postId } />
													</Td>
												</Tr>
											)) }
									</Tbody>
								</Table>
							</TableContainer>
							{ posts && posts.length <= 0 ? (
								<>
									<Center h={ '100%' } p={ '200px 0 200px' }>
										<Text
											fontSize={ '24px' }
											color={ '#9A8866' }
											letterSpacing={ '-1px' }
										>
											아무런 데이터가 없음
										</Text>
									</Center>
								</>
							) : null }
						</Box>
					</Container>
				</Box>
			</BrowserView>
			<MobileView>
				<LoginModal
					onClose={ loginModal.onClose }
					isOpen={ loginModal.isOpen }
					teamModalOpen={ teamModal.onOpen }
				/>
				<TeamCreateModal onClose={ teamModal.onClose } isOpen={ teamModal.isOpen } />
				<Box bgColor={ 'black' } w={ '100%' } p={ '24px 10px 0 10px' } fontSize={ '11px' }>
					<VStack alignItems={ 'flex-start' } w={ '100%' }>
						<HStack justifyContent={ 'space-between' } w={ '100%' }>
							<PlayTypeSelector isFilter={ true } />
							<Button
								fontSize={ '11px' }
								bgColor={ '#9A8866' }
								color={ '#29241D' }
								borderRadius={ 0 }
								fontWeight={ 'bold' }
								letterSpacing={ '-1px' }
								onClick={ openModal }
								boxShadow={ '0 0 100px rgba(65,61,52,1), 0 0 20px rgba(232,190,107,0.8)' }>
								팀원 모집
							</Button>
						</HStack>
						<HStack>
							<HStack wrap={'wrap'}>
								<MapSelector isFilter={ true } />
								<RegionSelector isFilter={ true } />
								<SherfaSelector />
							</HStack>
						</HStack>
					</VStack>
					<Box bgColor={ '#171715' } mt={ 6 }>
						<TableContainer w={ '100%' }>
							<Table w={ '100%' }>
								<Thead bgImage={ strip } w={ '100%' }>
									<Tr>
										<Th
											fontSize={ '11px' }
											color={ '#9A8866' }
										>
											디스코드
										</Th>
										<Th
											fontSize={ '11px' }
											color={ '#9A8866' }
										>
											맵
										</Th>
										<Th
											fontSize={ '11px' }
											color={ '#9A8866' }
										>
											플레이 유형
										</Th>
										<Th
											color={ '#9A8866' }
										>
											서버
										</Th>
										<Th
											fontSize={ '11px' }
											w={ '270' }
											color={ '#9A8866' }
										>
											메모
										</Th>
										<Th
											fontSize={ '11px' }
											color={ '#9A8866' }
										>
											등록 시간
										</Th>
										<Th
											fontSize={ '11px' }
											color={ '#9A8866' }
										>
											기능
										</Th>
									</Tr>
								</Thead>
								<Tbody>
									{ posts &&
										posts.map((p: any) => (
											<Tr fontSize={ '12px' } bgColor={ '#151515' }>
												<Td>
													<HStack spacing={ 2 }>
														<Avatar size={ 'sm' } src={ p.avatar_url }
														        boxShadow={ p.isSherpa ? '0 0 100px rgba(65,61,52,1), 0 0 15px rgba(232,190,107,0.8)' : '' }
														/>
														<VStack
															spacing={ 0 }
															alignItems={ 'flex-start' }>
															<HStack>
																<Tooltip
																	fontSize={ '12px' }
																	bgColor={ '#9a8866' }
																	color={ '#373128' }
																	fontWeight={ 'bold' }
																	label={ '아이디 복사' }>
																	<Text
																		color={ '#9A8866' }
																		cursor={ 'pointer' }
																		fontWeight={ 'bold' }
																		onClick={ handleCopyClipBoard }>
																		{ p.nickname }
																	</Text>
																</Tooltip>
																<Image
																	position={ 'relative' }
																	src={ p.verify ? discord : null }
																	width={ '15px' } />
																{ p.isSherpa === true &&
																	<Tooltip label={ '쉐르파 유저' }
																	         fontWeight={ 'bold' }
																	         color={ '#90ee90' }
																	         letterSpacing={ '-1px' }
																	         fontSize={ '11px' }
																	         bgColor={ '#151515' }>
																		<Image
																			position={ 'relative' }
																			top={ '1px' }
																			left={ '-2px' }
																			src={ sherpa }
																			width={ '15px' }>
																		</Image>
																	</Tooltip> }
															</HStack>
															{ p.verify &&
																<Text letterSpacing={ '-1px' } fontSize={ '11px' } color={ 'gray' }>인증됨</Text> }
														</VStack>
													</HStack>
												</Td>
												
												<Td color={ '#AEAEB0' } fontWeight={ 'bold' }>
													{ p.map }
												</Td>
												
												{ p.type === '' && <Td color={ 'gray' }>미지정</Td> }
												{ p.type === '파밍' && (
													<Td color={ 'gold' }>
														<Tooltip
															bgColor={ '#9a8866' }
															color={ '#373128' }
															fontSize={ '12px' }
															label={ '파밍 위주 플레이' }
														>
															<Image
																alt="파밍"
																ml={ 2 }
																src={ money }
																h={ '21px' }
																w={ '18px' }
															/>
														</Tooltip>
													</Td>
												) }
												{ p.type === '보스런' && (
													<Td color={ 'crimson' }>
														<Tooltip
															bgColor={ '#9a8866' }
															color={ '#373128' }
															fontSize={ '12px' }
															label={ '보스만 목표로 달린다' }
														>
															<Image
																alt="보스런"
																ml={ 1 }
																src={ boss }
																h={ '24px' }
																w={ '24px' }
															/>
														</Tooltip>
													</Td>
												) }
												{ p.type === '교전' && (
													<Td color={ 'crimson' }>
														<Tooltip
															bgColor={ '#9a8866' }
															color={ '#373128' }
															fontSize={ '12px' }
															label={ '교전 위주 플레이' }
														>
															<Image
																alt="교전"
																ml={ 2 }
																src={ gun }
																h={ '27px' }
																w={ '25px' }
															/>
														</Tooltip>
													</Td>
												) }
												{ p.type === '퀘스트' && (
													<Td color={ 'crimson' }>
														<Tooltip
															bgColor={ '#9a8866' }
															color={ '#373128' }
															fontSize={ '12px' }
															label={ '퀘스트 위주 플레이' }
														>
															<Image
																alt="퀘스트"
																ml={ 2 }
																src={ quest }
																h={ '20px' }
																w={ '19px' }
															/>
														</Tooltip>
													</Td>
												) }
												
												{ p.server === '한국' && (
													<Td>
														<HStack>
															<Image alt="한국" w={ '18px' } h={ '18px' } src={ kr } />
															<Text color={ '#AEAEB0' }>{ p.server }</Text>
														</HStack>
													</Td>
												) }
												{ p.server === '호주' && (
													<Td>
														<HStack>
															<Image alt="호주" w={ '18px' } h={ '18px' } src={ aus } />
															<Text color={ '#AEAEB0' }>{ p.server }</Text>
														</HStack>
													</Td>
												) }
												{ p.server === '북미' && (
													<Td color={ '#AEAEB0' }>
														<HStack>
															<Image alt="북미" w={ '18px' } h={ '18px' } src={ us } />
															<Text color={ '#AEAEB0' }>{ p.server }</Text>
														</HStack>
													</Td>
												) }
												{ p.server === '일본' && (
													<Td color={ '#AEAEB0' }>
														<HStack>
															<Image alt="일본" w={ '18px' } h={ '18px' } src={ jp } />
															<Text color={ '#AEAEB0' }>{ p.server }</Text>
														</HStack>
													</Td>
												) }
												{ p.server === '러시아' && (
													<Td color={ '#AEAEB0' }>
														<HStack>
															<Image
																alt="러시아"
																w={ '18px' }
																h={ '18px' }
																src={ rs }
															/>
															<Text color={ '#AEAEB0' }>{ p.server }</Text>
														</HStack>
													</Td>
												) }
												{ p.server === '상관없음' && (
													<Td color={ '#AEAEB0' }>
														<HStack>
															<Text color={ '#AEAEB0' }>{ p.server }</Text>
														</HStack>
													</Td>
												) }
												
												<Td wordBreak={ 'break-all' } pr={ 10 }>
													<Box
														bgColor={ '#9a8866' }
														borderRadius={ 5 }
														w={ '270px' }
														p={ '8px 10px 8px 10px' }
													>
														<Text
															lineHeight={ '16px' }
															color={ '#373128' }
															whiteSpace={ 'normal' }
															fontWeight={ 'bold' }
															style={ {
																overflow: 'hidden',
																display: '-webkit-box',
																WebkitLineClamp: 2,
																WebkitBoxOrient: 'vertical',
																textOverflow: 'ellipsis',
															} }
														>
															{ p.memo }
														</Text>
													</Box>
												</Td>
												<Td color={ 'gray' }>{ p.time }</Td>
												<Td>
													<FunctionMenu UUID={ p.uuid } postId={ p.postId } />
												</Td>
											</Tr>
										)) }
								</Tbody>
							</Table>
						</TableContainer>
						{ posts && posts.length <= 0 ? (
							<>
								<Center h={ '100%' } p={ '200px 0 200px' }>
									<Text
										fontSize={ '24px' }
										color={ '#9A8866' }
										letterSpacing={ '-1px' }
									>
										아무런 데이터가 없음
									</Text>
								</Center>
							</>
						) : null }
					</Box>
				</Box>
			</MobileView>
		</>
	);
}
