import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import { Box } from '@chakra-ui/react';
import Callback from './pages/Discord';
import { useEffect } from 'react';

import { WEB, WEB_SOCKET } from './application';
import usePostStore, { Post } from './store/usePostStore';
import useStatusStore from './store/useStatusStore';
import Market from 'pages/market/Market';
import Header from 'components/Header';


function App() {
	
	const { setPosts, deletePost } = usePostStore();
	const { setOnline } = useStatusStore();
	
	const sendNoti = (data: Post) => {
		if (Notification.permission !== 'granted') {
			return;
		} else {
			const notification = new Notification(data.memo, {
				body: '[디스코드] ' + data.nickname + '  ' + '[맵] ' + data.map + '  ' + '[서버] ' + data.server,
			});
			
			notification.onclick = function () {
				window.open(WEB);
			};
		}
	};
	
	useEffect(() => {
		if (window.Notification) {
			Notification.requestPermission();
		}
		
		const ws = new WebSocket(WEB_SOCKET);
		ws.onmessage = (message) => {
			const packet = JSON.parse(message.data);
			if (packet.type === 'DELETE') {
				deletePost(packet.data.key);
			}
			if (packet.type === 'UPDATE') {
				console.log('UPDATE PACKET TIME:');
				setPosts(packet.data);
				sendNoti(packet.data);
			}
			if (packet.type === 'ONLINE') {
				setOnline(packet.data);
			}
		};
		
		return () => {
			ws.close();
		};
	}, []);
	
	return (
		<Box w={ '100%' }>
			<Header />
			<Routes>
				<Route path={ '/' }        element={ <Main /> }     />
				<Route path={ '/discord' } element={ <Callback /> } />
				<Route path={ '/market' }  element={ <Market /> }   />
			</Routes>
		</Box>
	);
}

export default App;
