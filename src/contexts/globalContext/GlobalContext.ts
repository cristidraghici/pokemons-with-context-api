import { createContext } from 'react'
import { GlobalContextType } from './GlobalProvider'

export type GlobalStateType = {
  currentPokemonName: string
}

/**
 * The initial state
 */
export const initialState: GlobalStateType = {
  currentPokemonName: '',
}

/**
 * The context
 */
export const GlobalContext = createContext<GlobalContextType>({
  state: initialState,
  dispatch: () => undefined,
})

export default GlobalContext
