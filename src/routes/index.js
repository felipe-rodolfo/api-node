import express from 'express';
import arts from './artFramesRoutes.js';
import authors from './authorsRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "API Node"})
    })

    app.use(
        express.json(),
        arts,
        authors
    )
}

export default routes;