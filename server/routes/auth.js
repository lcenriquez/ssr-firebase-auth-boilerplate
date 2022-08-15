import express from 'express';
import { currentUser } from '../controllers/auth';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Auth API',
  });
});

router.post('/current-user', currentUser);

module.exports = router;
