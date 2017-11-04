'use strict'

const Anuncio = require('../models/Anuncio')
const AnunciosData = require('../anuncios.json')

module.exports.initAnuncios = async function () {
  await Anuncio.remove()
  await Anuncio.insertMany(AnunciosData.anuncios)
}
