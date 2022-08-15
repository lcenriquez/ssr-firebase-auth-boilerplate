import express from 'express';
import { currentUser, privateRoute } from '../controllers/auth';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Auth API',
  });
});

router.post('/current-user', currentUser);
router.get('/private-route', privateRoute);

module.exports = router;
