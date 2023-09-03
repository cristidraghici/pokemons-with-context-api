import { useReducer, Dispatch, ReactNode } from 'react'

import GlobalContext, { initialState, GlobalStateType } from './GlobalContext'

export type GlobalActionType =
  | {
      type: 'setPokemonName' | 'setPokemonAvatar' | 'setError'
      payload: string
    }
  | {
      type: 'setIsLoading'
      payload: boolean
    }

export type GlobalContextType = {
  state: GlobalStateType
  dispatch: Dispatch<GlobalActionType>
}

const globalContextReducer = (state: GlobalStateType, action: GlobalActionType): GlobalStateType => {
  switch (action.type) {
    case 'setPokemonName': {
      console.log(`Setting the name of the pokemon to: ${action.payload}`)

      return {
        ...state,
        pokemonName: action.payload,
        pokemonAvatar: '',
        error: '',
      }
    }
    case 'setPokemonAvatar': {
      console.log(`Updating the avatar for ${state.pokemonName}: ${action.payload}`)

      return {
        ...state,
        pokemonAvatar: action.payload,
        error: '',
      }
    }
    case 'setError': {
      console.log(action.payload ? `Error: ${action.payload}` : 'Unset error.')

      return {
        ...state,
        error: action.payload,
      }
    }
    case 'setIsLoading': {
      console.log(`Set isLoading: ${action.payload}`)

      return {
        ...state,
        isLoading: action.payload,
      }
    }
    default:
      return state
  }
}

export const GlobalProvider = (props: { children: ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer(globalContextReducer, initialState)

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
