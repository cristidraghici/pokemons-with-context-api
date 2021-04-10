import { render } from '@testing-library/react'
import Search from '../Search'

describe('./components/Search', () => {
  it('matches snapshot', () => {
    const { container } = render(<Search />)
    expect(container).toMatchSnapshot()
  })
})
