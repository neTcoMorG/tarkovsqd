
const MODE = "test"

let API_SERVER = ""
let WEB_SOCKET = ""
let DISCORD_LOGIN_URL = ""

if (MODE === "test") {
    API_SERVER = "http://localhost:8080"
    WEB_SOCKET = "ws://localhost:8080/ws"
    DISCORD_LOGIN_URL = "https://discord.com/api/oauth2/authorize?client_id=1159029609552171049&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdiscord&response_type=code&scope=identify"
}
else {
    API_SERVER = "https://api9heayo.devdev.kr"
    WEB_SOCKET = "ws://localhost:8080/ws"
    DISCORD_LOGIN_URL = "https://discord.com/api/oauth2/authorize?client_id=1159029609552171049&redirect_uri=https%3A%2F%2Fsquad.devdev.kr%2Fdiscord&response_type=code&scope=identify"
}

export {API_SERVER, WEB_SOCKET, DISCORD_LOGIN_URL, MODE}
