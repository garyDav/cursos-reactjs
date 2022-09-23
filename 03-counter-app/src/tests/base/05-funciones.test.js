import '@testing-library/jest-dom'
import { getUser } from '../../base/05-funciones'

describe('Pruebas en 05-funciones', () => {

  test('getUser debe de retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser()
    expect( user ).toBe( userTest )
  })

})