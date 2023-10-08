import create from 'zustand';

import { Map, Server, Type } from './useFilterStore';

type Post = {
	avatar_url: string;
	nickname: string;
	verify: boolean;
	map: Map;
	type: Type;
	server: Server;
	memo: string;
	time: string;
	uuid: string;
	postId: bigint;
}

interface PostStore {
	posts: Post[],
	deletePost: (postId: bigint) => void;
	setPosts: (object: Post) => void;
	initPosts: (arr: Post[]) => void;
}

const usePostStore = create<PostStore>(set => ({
	posts: [],
	deletePost: (postId) => set((prev) => ({ posts: prev.posts.filter(i => i.postId !== postId) })),
	setPosts: (object) => set((prev) => ({ posts: [ object, ...prev.posts ] })),
	initPosts: (arr) => set({ posts: arr }),
}));

export default usePostStore;
export type { Post };