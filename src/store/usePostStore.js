

import create from 'zustand'

const usePostStore = create(set => ({
    posts: [],
    deletePost: (postId) => set((prev) => ({posts: prev.posts.filter(i => i.postId !== postId)})),
    setPosts: (object) => set((prev) => ({ posts: [object, ...prev.posts] })),
    initPosts: (arr) => set({posts: arr})
}))

export default usePostStore