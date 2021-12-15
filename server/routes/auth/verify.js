/*
    GET /api/auth/verify
*/

const verify = (req, res) => {
  res.json({
    success: true,
    info: req.decoded,
  });
};

export default verify;
