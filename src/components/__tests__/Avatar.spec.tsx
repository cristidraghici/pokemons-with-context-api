import { render } from '@testing-library/react'
import Avatar from '../Avatar'

describe('./components/Avatar', () => {
  it('matches snapshot', () => {
    const { container } = render(<Avatar />)
    expect(container).toMatchSnapshot()
  })
})
