import debounce from '../debounce'

describe('./utils/debounce', () => {
  it('debounce a function for 500ms', () => {
    jest.useFakeTimers()

    const fn = jest.fn((string) => string)
    const debouncedFn = debounce(fn, 500)

    // Execute for the first time
    debouncedFn('a')

    // try to execute a 2nd time
    jest.advanceTimersByTime(100)
    debouncedFn('aa')

    // try to execute a 3rd time
    jest.advanceTimersByTime(200)
    debouncedFn('aaa')

    // try to execute a 4th time
    jest.advanceTimersByTime(300)
    debouncedFn('aaaa')

    // Fast-forward time
    jest.runAllTimers()

    expect(fn).toBeCalled()
    expect(fn).toHaveBeenCalledTimes(1)
  })
})
