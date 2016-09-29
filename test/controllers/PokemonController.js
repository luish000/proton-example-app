import supertest from 'co-supertest'
import app from '../../server.js'

const pokemon = {
  name: 'Pikachu',
  type: 'Electric',
  height: 0.4,
  weight: 6,
  gender: 'male',
  weakness: 'earth'
}

const request = supertest(app)

describe('PokemonController', () => {

  after(function*() {
    yield Pokemon.remove()
  })

  it('Create a pokemon', function*() {

    const { body } = yield request
      .post('/pokemons')
      .send(pokemon)
      .expect(201)

    proton.log.info(`A new pokemon has been created his name is ${body.name}`)
  })

  it('Find all pokemons', function*() {

    const { body } = yield request
      .get('/pokemons')
      .expect(200)

    proton.log.info('Number of finded pokemons', body.length)
  })

})
