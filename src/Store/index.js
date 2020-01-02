import create from 'zustand'
import produce from 'immer'

export const [useStore] = create(set => ({
    darkTheme: false,
    set: fn => set(produce(fn))
}))