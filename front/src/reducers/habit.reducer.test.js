import habitReducer from './habit.reducer'

describe('habit reducer test', () => {
  it('should add habit to store', () => {
    let newState = habitReducer(undefined, { type: 'RECEIVE_HABIT', payload: { name: 'added by test' } })
    expect(newState).toEqual({ habits: [ { name: 'added by test' } ] })
  })

  it('should delete habit from store', () => {
    let newState = habitReducer({ habits: [ { name: 'some habit' } ] },
      { type: 'DELETE_HABIT', payload: { name: 'some habit' } })
    expect(newState).toEqual({ habits: [ ] })
  })

  it('should delete only one habit from store', () => {
    let newState = habitReducer({ habits: [ { name: 'some habit' }, { name: 'other habit' } ] },
      { type: 'DELETE_HABIT', payload: { name: 'some habit' } })
    expect(newState).toEqual({ habits: [ { name: 'other habit' } ] })
  })
})
