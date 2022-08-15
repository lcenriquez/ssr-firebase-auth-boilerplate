import admin from '../firebase';

export const showMessage = (req, res) => {
  res.json({
    message: 'Welcome to Firebase auth boilerplate backend',
  });
};

export const currentUser = async (req, res) => {
  if (!req.headers.token) {
    return res.status(401).json({ msg: 'Missing token' });
  }

  try {
    const firebaseUser = await admin.auth().verifyIdToken(req.headers.token);
    res.json({ firebaseUser });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      err,
      msg: 'Invalid or expired token',
    });
  }
};

export const privateRoute = async (req, res) => {
  if (!req.headers.token) {
    return res.status(401).json({ msg: 'Missing token' });
  }

  try {
    const firebaseUser = await admin.auth().verifyIdToken(req.headers.token);
    res.json({ firebaseUser });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      err,
      msg: 'Invalid or expired token',
    });
  }
};
