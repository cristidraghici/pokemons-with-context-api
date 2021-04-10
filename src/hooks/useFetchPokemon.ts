import { useEffect } from 'react'
import { useGlobalContext } from '../contexts'

const useFetchPokemon = () => {
  const {
    state: { pokemonName },
    dispatch,
  } = useGlobalContext()

  useEffect(() => {
    let isCurrent = true

    if (pokemonName.length < 3) {
      return
    }

    dispatch({
      type: 'setIsLoading',
      payload: true,
    })

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
      .then((res) => res.json())
      .then((res) => {
        if (isCurrent && !!res.sprites && !!res.sprites.front_default) {
          dispatch({
            type: 'setPokemonAvatar',
            payload: res.sprites.front_default,
          })
        }
      })
      .catch((e) => {
        dispatch({ type: 'setError', payload: e.message || e })
      })
      .finally(() => {
        dispatch({
          type: 'setIsLoading',
          payload: false,
        })
      })

    return () => {
      isCurrent = false
    }
  }, [pokemonName, dispatch])
}

export default useFetchPokemon
