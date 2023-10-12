export default function TokenGetter() {
	const object = localStorage.getItem('squadObject');
	
	if (object === null || object === '') {
		return null;
	}
	
	return JSON.parse(object).token;
}