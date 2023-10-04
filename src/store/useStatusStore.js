
import create from 'zustand'

const useStatusStore = create(set => ({
    online: 0,
    setOnline: (value) => set({online: value}),
}))

export default useStatusStore