import { useReducer, Dispatch, ReactNode } from 'react'

import GlobalContext, { initialState, GlobalStateType } from './GlobalContext'

export type GlobalActionType = { type: 'setPokemonName'; payload: string }

export type GlobalContextType = {
  state: GlobalStateType
  dispatch: Dispatch<GlobalActionType>
}

const globalContextReducer = (state: GlobalStateType, action: GlobalActionType): GlobalStateType => {
  switch (action.type) {
    case 'setPokemonName': {
      return {
        ...state,
        currentPokemonName: action.payload,
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
