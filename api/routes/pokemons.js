import Router from 'koa-router'

const router = new Router({ prefix: '/pokemons' })

const { PokemonController } = proton.app.controllers

router.get('/', PokemonController.find)
router.post('/', PokemonController.create)

module.exports = router
