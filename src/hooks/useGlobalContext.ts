import { useContext } from 'react'

import GlobalContext from '../contexts/GlobalContext'
import type { GlobalContextType } from '../contexts/GlobalProvider'

const useGlobalContext = (): GlobalContextType => useContext(GlobalContext)

export default useGlobalContext
