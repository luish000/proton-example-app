'use strict'

import Model from 'proton-mongoose-model'

export default class Pokemon extends Model {

  schema() {
    return {
      name: String,
      type: String,
      weight: Number,
      height: Number,
      gender: {
        type: String,
        enum: ['male', 'female']
      },
      weakness: String
    }
  }

}
