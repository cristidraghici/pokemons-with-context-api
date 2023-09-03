import { useGlobalContext } from '../hooks'

const Avatar = (): JSX.Element => {
  const { state } = useGlobalContext()

  return <>{state.pokemonAvatar && <img src={state.pokemonAvatar} alt={state.pokemonName} />}</>
}

export default Avatar
