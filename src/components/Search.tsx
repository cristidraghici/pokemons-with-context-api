import { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from '../contexts'
import debounce from '../utils/debounce'

import { useFetchPokemon } from '../hooks'

const Search = (): JSX.Element => {
  const {
    state: { pokemonName, isLoading, error },
    dispatch,
  } = useGlobalContext()
  const [searchInput, setSearchInput] = useState(pokemonName)

  useFetchPokemon()

  const init = () => setSearchInput('pikachu')

  const debounced = useRef(
    debounce((value: string) => {
      dispatch({
        type: 'setPokemonName',
        payload: value,
      })
    }, 500)
  )
  useEffect(() => init(), [])
  useEffect(() => debounced.current(searchInput), [searchInput])

  return (
    <>
      <input
        className="Search"
        type="text"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value)
          dispatch({
            type: 'setError',
            payload: '',
          })
        }}
      />
      {isLoading && <div className="Loading">Loading...</div>}
      {!!error && <div className="Error">An error occurred while retrieving the data.</div>}
    </>
  )
}
export default Search
