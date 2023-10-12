const MODE = 'prod';

let API_SERVER = '';
let WEB_SOCKET = '';
let DISCORD_LOGIN_URL = '';
let WEB = '';

if (MODE === 'internal') {
	WEB = 'http://localhost:3000';
	API_SERVER = 'http://localhost:8080';
	WEB_SOCKET = 'ws://192.168.55.123:8080/ws';
	DISCORD_LOGIN_URL = 'https://discord.com/api/oauth2/authorize?client_id=1159029609552171049&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdiscord&response_type=code&scope=identify';
} 
if (MODE === "prod") {
	WEB = 'https://squad.devdev.kr';
	API_SERVER = 'https://apisquad.devdev.kr';
	WEB_SOCKET = 'wss://apisquad.devdev.kr/ws';
	DISCORD_LOGIN_URL = 'https://discord.com/api/oauth2/authorize?client_id=1159029609552171049&redirect_uri=https%3A%2F%2Fsquad.devdev.kr%2Fdiscord&response_type=code&scope=identify';
}
if (MODE === "external") {
	WEB = 'http://localhost.3000';
	API_SERVER = 'https://apisquad.devdev.kr';
	WEB_SOCKET = 'wss://apisquad.devdev.kr/ws';
	DISCORD_LOGIN_URL = 'https://discord.com/api/oauth2/authorize?client_id=1159029609552171049&redirect_uri=https%3A%2F%2Fsquad.devdev.kr%2Fdiscord&response_type=code&scope=identify';
}

export { API_SERVER, WEB_SOCKET, DISCORD_LOGIN_URL, WEB };
