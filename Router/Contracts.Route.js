const express = require('express');
const router = express.Router();
const { getContracts, postContracts, putContracts, deleteContracts } = require('../Controller/Contracts');
const asyncHandler = require('../Middleware/AsycHandler');

router.get('/contracts', asyncHandler(getContracts));
router.post('/contracts', asyncHandler(postContracts));
router.put('/contracts/:id', asyncHandler(putContracts));
router.delete('/contracts/:id', asyncHandler(deleteContracts));

module.exports = router;
