import create from 'zustand';

type Map = '맵 선택' | '전체' | '커스텀' | '리저브' | '인터체인지' | '팩토리' | '우드' | '스트리트' | '쇼어라인' | '연구실' | ''
type Server = '서버 선택' | '상관없음' | '한국' | '북미' | '일본' | '러시아' | '호주' | ''
type Type = '플레이 유형' | '파밍' | '퀘스트' | '교전' | '보스런' | ''

interface Filter {
	map: Map | null;
	server: Server | null;
	type: Type | null;
	
	setMap: (object: Map) => void;
	setServer: (object: Server) => void;
	setType: (object: Type) => void;
}

const useFilterStore = create<Filter>(set => ({
	map: null,
	setMap: (object) => set(() => ({ map: object === '맵 선택' ? null : object })),
	
	server: null,
	setServer: (object) => set(() => ({ server: object === '서버 선택' ? null : object })),
	
	type: null,
	setType: (object) => set(() => ({ type: object === '플레이 유형' ? null : object })),
}));

export default useFilterStore;
export type { Map, Type, Server };