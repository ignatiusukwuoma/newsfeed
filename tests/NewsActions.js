import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import request from 'supertest';
import * as data from './testData';

const express = require('express');

const app = express();

app.get('/url', (req, res) => {
  res.status(200).json({ name: 'tobi' });
});

describe('GET news', () => {
  it('respond with json', (done) => {
    request(app)
      .get('/url')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
