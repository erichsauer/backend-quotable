const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router()
  .post('/', async (req, res, next) => {
    const profile = await ProfileService.create(req.body);
    res.send(profile);
  })
  .get('/', async (req, res, next) => {
    const profiles = await ProfileService.getAll();
    res.send(profiles);
  })
  .get('/:id', async (req, res, next) => {
    const profile = await ProfileService.getById(req.params.id);
    res.send(profile);
  });
