const router = require('express').Router();
const partyService = require('../services').partyService;

router.get('/', async (req, res) => {
  res.json(await partyService.findAll());
});

module.exports = router;
