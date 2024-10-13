import { create } from "zustand"

type HeartsModalState = {
    isOpen: boolean;
    open: () => void;
    close: ()=> void;
}

export const useHeartsModal = create<HeartsModalState>((set) => ({
    isOpen:false, // TODO: Change back to false
    open: () => set({ isOpen: true}),
    close: () => set({ isOpen: false}),
}))