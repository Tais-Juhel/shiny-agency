import { formatJobList, formatQueryParams } from '.'

describe('La foncion formatJobList', () => {
  it('Ajoute une virgule à un item', () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
  })
  it('Ne met pas de virgule pour le dernier élément', () => {
    const expectedState = 'item3'
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
  })
})

describe('La fonction formatQueryParams', () => {
  it('Formate bien le param', () => {
    const expectedState = 'a1=answer1'
    expect(formatQueryParams({ 1: 'answer1' })).toEqual(expectedState)
  })
  it("Ajout d'un & entre chaque params", () => {
    const expectedState = 'a1=answer1&a2=answer2&a3=answer3'
    expect(
      formatQueryParams({ 1: 'answer1', 2: 'answer2', 3: 'answer3' }),
    ).toEqual(expectedState)
  })
})
