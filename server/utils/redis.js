import redis from "redis";

// const redisClient = redis.createClient(proces.env.REDIS_PORT);
const redisClient = redis.createClient({
  host: "localhost",
  port: 6379,
  db: 0,
  password: "1q2w3e4r!@",
});

const set = (key, value) => {
  //   redisClient.set(key, JSON.stringify(value));
  redisClient.set(key, value);
};

const get = (req, res, next) => {
  let key = req.originalUrl;

  redisClient.get(key, (error, data) => {
    if (error) {
      res.status(400).send({
        ok: false,
        message: error,
      });
    }
    if (data !== null) {
      console.log("data from redis !");
      res.status(200).send({
        ok: true,
        //   data: JSON.parse(data),
        data: data,
      });
    } else next();
  });
};

export { redisClient, set, get };
