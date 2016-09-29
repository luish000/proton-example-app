
import Controller from 'proton-controller'
import _ from 'lodash'

export default class PokemonController extends Controller {

  /**
   * @method create
   * @description A controller action that create pokemons
   * @author Luis Hernandez
   */
  * create() {
    try {
      const pokemon = yield Pokemon.create(this.request.body)
      this.status = 201
      this.body = pokemon
    } catch(err) {
      proton.log.error('An error ocurred creating the pokemon :(', err)
      this.status = 400
    }
  }

  /**
   * @method find
   * @description A controller action that find all the pokemons in the DB
   * @author Luis Hernandez
   */
  * find() {
    try {
      const pokemons = yield Pokemon.find()
      this.body = pokemons
    } catch(err) {
      proton.log.error('An error ocurred finding the pokemons :(', err)
      this.status = 400
    }
  }

}
