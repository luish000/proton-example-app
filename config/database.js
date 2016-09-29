export default {

  stores: {
    mongo: {
      connection: {
        host: process.env.DB_PORT_27017_TCP_ADDR || 'localhost',
        port: process.env.DB_PORT_27017_TCP_PORT || '27017',
      },
      adapter: 'mongoose'
    }
  },

  store: 'mongo'

}
