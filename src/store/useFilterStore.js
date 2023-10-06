

import create from 'zustand'

const useFilterStore = create(set => ({
    map: null,
    setMap: (object) => set(() => ({ map: object === "맵 선택" ? null : object})),

    server: null,
    setServer: (object) => set(() => ({server: object === "서버 선택" ? null : object})),

    type: null,
    setType: (object) => set(() => ({type: object === "플레이 유형" ? null : object}))
}))

export default useFilterStore