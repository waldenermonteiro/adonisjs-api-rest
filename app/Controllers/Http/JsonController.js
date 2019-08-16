'use strict'

class JsonController {
    index({ request, response, params }) {
        response.json(
            {
                name: params.name
            }
        )
    }
}

module.exports = JsonController
