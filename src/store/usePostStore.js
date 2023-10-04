

import create from 'zustand'

const usePostStore = create(set => ({
    posts: [],
    setPosts: (object) => set((prev) => ({ posts: [object, ...prev.posts] })),
    initPosts: (arr) => set({posts: arr})
}))

export default usePostStore