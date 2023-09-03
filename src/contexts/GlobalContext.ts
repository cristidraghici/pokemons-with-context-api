import { createContext } from 'react'
import { GlobalContextType } from './GlobalProvider'

export type GlobalStateType = {
  pokemonName: string
  pokemonAvatar: string

  error: string
  isLoading: boolean
}

/**
 * The initial state
 */
export const initialState: GlobalStateType = {
  pokemonName: '',
  pokemonAvatar: '',

  error: '',
  isLoading: false,
}

/**
 * The context
 */
export const GlobalContext = createContext<GlobalContextType>({
  state: initialState,
  dispatch: () => undefined,
})

export default GlobalContext
