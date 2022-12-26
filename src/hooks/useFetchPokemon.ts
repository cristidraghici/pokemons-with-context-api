import { useEffect } from 'react'
import { useGlobalContext } from '../contexts'

const useFetchPokemon = () => {
  const {
    state: { pokemonName },
    dispatch,
  } = useGlobalContext()

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    if (pokemonName.length < 3) {
      return
    }

    dispatch({
      type: 'setIsLoading',
      payload: true,
    })

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`, { signal })
      .then((res) => res.json())
      .then((res) => {
        if (!!res.sprites && !!res.sprites.front_default) {
          dispatch({
            type: 'setPokemonAvatar',
            payload: res.sprites.front_default,
          })
        }
      })
      .catch((e) => {
        console.log({ e })
        if (e.name === 'AbortError') {
          console.log('New search performed')
          return
        }

        dispatch({ type: 'setError', payload: e.message || e })
      })
      .finally(() => {
        dispatch({
          type: 'setIsLoading',
          payload: false,
        })
      })

    return () => {
      controller.abort()
    }
  }, [pokemonName, dispatch])
}

export default useFetchPokemon
