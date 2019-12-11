import create from 'zustand'
import produce from 'immer'

export const [useStore] = create(set => ({
    count: { a: { b: 999 } },
    //   increase: () => set(state => ({ count: state.count + 1 })),
    set: (fn) => set(produce(fn))
}))