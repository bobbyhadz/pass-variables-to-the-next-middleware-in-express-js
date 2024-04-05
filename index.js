import express from 'express';

// 👇️ if you use CommonJS require()
// const express = require('express')

const app = express();

function middleware1(req, res, next) {
  const site = 'bobbyhadz.com';

  // 👇️ 1) set property on res.locals
  res.locals.site = site;

  next();
}

function middleware2(req, res, next) {
  // 👇️ 2) access property from previous middleware
  console.log(res.locals.site);

  next();
}

app.get('/', middleware1, middleware2, function (req, res) {
  res.json({
    // 👇️ 3) access property from first middleware
    site: res.locals.site,
    hello: 'world',
  });
});

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
