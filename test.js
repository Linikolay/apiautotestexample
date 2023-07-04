const should = require("should");
const request = require('supertest');
const express = require('express');
const expect = require("chai").expect;
const auth = require('./Auth.js')
const template = require('./PaymentOrderTemplateBFFWEB')
const order = require('./PaymentOrderBFFWEB.js')
const payrolls = require('./Payrolls.js')
const common = require('./Common.js')
const businessClass = require('./Business.js')
const orderError = require('./PaymentOrderBFFWEB_ERROR')
const mobileURL = "https://kbdbo-mobile-api-dev.paymart.uz";
const webURl = 'https://kbdbo-web-api-dev.paymart.uz';
const logn = 'UCHKUNOV';
const pass = '123456';
const deviceinfo = 'X-Device-Info": "iOS; 14; Apple; iPhone 14; 1.1; 3x'
let branch = '323232';
let business = '00947681';
var token = '0';
var templateID = '';
const axios = require('axios');
const { doesNotThrow, notEqual } = require("should");
const app = express();


(async () => {

     auth()
     template()
    // order()
     //common()
    //payrolls()
    //  businessClass()


   //   orderError()
  })();

