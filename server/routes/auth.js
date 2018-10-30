import express from 'express';
import jwt from 'jsonwebtoken';
import middlewareJwt from '../auth/middleware';

import { plus, oauth2Client } from '../auth/google';

/**end google settings */

const router = express.Router();

router.get('/google', (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'online',
    scope: 'https://www.googleapis.com/auth/plus.me'
  });

  res.redirect(url);
});

router.get('/google/callback',
  function (req, res) {
    oauth2Client.getToken(req.query.code, (err, tokens) => {
      if (err) throw err;
      oauth2Client.setCredentials(tokens);
      
      plus.people.get({ userId: 'me', auth: oauth2Client }, (err, profile) => {
        if (err) throw err;
        console.log(profile.data); 
        let token = jwt.sign({ usr: profile.id }, process.env.JWT_SECRET);
        return res.json({ token });
      });
    });
  });

router.get('/ok-token', middlewareJwt, (req, res) => {
  return res.json({ tokenValid: true });
});

module.exports = router;