import create from 'zustand';

interface Status {
	online: number;
	setOnline: (value: number) => void;
}

const useStatusStore = create<Status>(set => ({
	online: 0,
	setOnline: (value) => set({ online: value }),
}));

export default useStatusStore;