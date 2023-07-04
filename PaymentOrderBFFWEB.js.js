const should = require("should");
const request = require('supertest');
const express = require('express');
const expect = require("chai").expect;
const moment = require('moment')
const mobileURL = "https://kbdbo-mobile-api-dev.kapitalbank.uz";
const webURl = 'https://kbdbo-web-api-dev.kapitalbank.uz';
const logn = 'TEST_LOGIN1';
const pass = '123456';
const deviceinfo = 'MacBook'
let branch = '00445';
let business = '04045399';
var token = '0';
const senderAccountNumber = "20214000504045399001";
const senderAccountNumberOther = "20214000504045399001"
const receiverAccountNumber = "23102000400488178003"
const bidgetRecivernumber = "1000108600032023142916093"
const cardAccount = "22620000004045399141"
var templateID = '';
const cardNumber = "8600 49** **** 0086"
const axios = require('axios');
const { doesNotThrow, notEqual } = require("should");
const app = express();
moment.locale('ru');
let date = moment().add(1, 'days').format('YYYY-MM-DD')
module.exports = function generate() {

    describe('TEST START', () => {
        it('TEST START PaymentOrderBFFWEB ', async () => {
            await console.log("/////////////PaymentOrderBFFWEB////////////////")
        })
    })
    describe('Auth Token', () => {
        var nextToken
        var category
        var tokenautorezation
        
        it('/api/auth', async () => {
            
                const res = await axios.post(webURl + "/api/auth", {
                    'login': logn,
                    'password': pass,
                }, {
                    headers: {
                        "X-Device-Info": deviceinfo,
                        "Accept-Language": "ru-RU"
                    }
                }
                ).then(res => res).catch((error) => {
                    console.log(error.response.data)
                    expect(error.response.status).equal(200)
                    });
                
                await expect(res.status).equal(200)
                
                if (res.data.result.accessToken.length > 0) {
                    token = res.data.result.accessToken
                } else {
                    expect.fail('/api/auth/ dont auth accessToken');
                }
                
            
            
        });
    });

    describe('PaymentOrderBFFWEB Create payment', () => {
        it('/api/business/' + business + '/' + branch + '/PaymentOrders', async () => {
            const res = await axios.post(webURl + "/api/business/" + business + "/" + branch + "/PaymentOrders", {
                "paymentNumber": "400ыва",
                "documentDate": date,
                "senderAccountNumber": senderAccountNumber,
                "receiverBranch": branch,
                "receiverAccountNumber": receiverAccountNumber,
                "receiverName": "OOO  BOUNTY",
                "receiverInnOrPinfl": "302936161",
                "paymentPurpose": "TEST Переброска для пополнения вторичного счета33",
                "paymentPurposeCode": "00641",
                "amount": 35000,
                "isAnor": false
            }, {
                headers: {

                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(res => res)
            let datahead = res.headers.location
            const dataArr = datahead.split('/')
            expect(res.status).equal(201)
            if (res.status == 201) {
                templateID = dataArr[dataArr.length - 1]
            }
        });
    });

    describe('PaymentOrderBFFWEB Check Create Get PO', () => {
        it('/api/business/' + business + '/' + branch + '/paymentOrders/' + templateID, async () => {
            const res = await axios.get(webURl + "/api/business/" + business + "/" + branch + "/paymentOrders/" + templateID, {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(res => res)
            expect(res.status).equal(200)
        });
    });

    describe('PaymentOrderBFFWEB Update', () => {
        it('/api/' + business + '/' + templateID + '/paymentOrders', async () => {
            const res = await axios.put(webURl + '/api/business/' + business + '/' + branch + '/paymentOrders/' + templateID, {

                "paymentNumber": "445",
                "documentDate": date,
                "senderAccountNumber": senderAccountNumber,
                "receiverBranch": branch,
                "receiverAccountNumber": receiverAccountNumber,
                "receiverName": "OOO  BOUNTY",
                "receiverInnOrPinfl": "302936161",
                "paymentPurpose": "TEST тест",
                "paymentPurposeCode": "00641",
                "amount": 350012120,
                "isAnor": false


            }, {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(res =>
                res
            )
            expect(res.status).equal(201)
        });
    });

    describe('PaymentOrderBFFWEB Get List Template', () => {
        it('/api/business/business/branch/paymentOrders/', async () => {
            const res = await axios.get(webURl + '/api/business/' + business + '/' + branch + '/paymentOrders/?PageNumber=1&PageSize=20', {
                headers: {

                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(res => res)
            if (res.status == 200 && res.data.result.error == null) {
                expect(res.status).equal(200)
            } else {
                expect.error('Error ')
            }
        });
    });

    describe('PaymentOrderBFFWEB Budget Template', () => {
        var budgetid
        it('/api/business/business/branch/budgetPaymentOrders Budget Create', async () => {
            const res = await axios.post(webURl + "/api/business/" + business + "/" + branch + "/budgetPaymentOrders/", {

                "paymentNumber": "351",
                "documentDate": date,
                "senderAccountNumber": senderAccountNumber,
                "budgetAccountNumber": "100010860030007013990199001",
                "budgetInn": "200637640",
                

                "paymentPurpose": "Еуыефывфыовлдфыовлдфыовл",
                "paymentPurposeCode": "99510",
                "amount": 3500,
                "isAnor": false

            }, {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(res => res)
            let datahead = res.headers.location
            const dataArr = datahead.split('/')
            expect(res.status).equal(201)
            if (res.status == 201) {
                budgetid = dataArr[dataArr.length - 1]
            }
        });

        it('/api/business/' + budgetid + '/paymentOrdersBudget Budget  PUT', async () => {
            const res = await axios.put(webURl + '/api/business/' + business + '/' + branch + '/budgetPaymentOrders/' + budgetid, {

                "paymentNumber": "353",
                "documentDate": date,
                "senderAccountNumber": senderAccountNumber,
                "budgetAccountNumber": "402821860262947950100182001",
                "budgetInn": "200637640",
                "paymentPurpose": "Тест апдейта",
                "paymentPurposeCode": "09510",
                "amount": 35121200,
                "isAnor": false

            }, {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(res => res)
            expect(res.status).equal(201)
        });
    });

    describe('PaymentOrderBFFWEB Treasure', () => {
        var budgetid
        it('/api/business/business/branch/treasuryPaymentOrders  Treasure Create', async () => {
            const res = await axios.post(webURl + '/api/business/' + business + '/' + branch + '/treasuryPaymentOrders', {
                "paymentNumber": "392",
                "documentDate": date,
                "senderAccountNumber": senderAccountNumber,
                "budgetAccountNumber": bidgetRecivernumber,
                "paymentPurpose": "тест работы метода",
                "paymentPurposeCode": "09510",
                "amount": 3500,
                "isAnor": false
            }, {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(res => res)
            let datahead = res.headers.location
            const dataArr = datahead.split('/')
            expect(res.status).equal(201)
            if (res.status == 201) {
                budgetid = dataArr[dataArr.length - 1]
            }
        });

        it('api/business/business/branch/treasuryPaymentOrders/ Treasure Put', async () => {
            const res = await axios.put(webURl + '/api/business/' + business + '/' + branch + '/treasuryPaymentOrders/' + budgetid, {

                "paymentNumber": "3921",
                "documentDate": date,
                "senderBranch": branch,
                "senderAccountNumber": senderAccountNumber,
                "budgetAccountNumber": bidgetRecivernumber,
                "paymentPurpose": "тест работы 13123метода",
                "paymentPurposeCode": "09510",
                "amount": 3500,
                "isAnor": false

            }, {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(res => res)
            expect(res.status).equal(201)
        });
    });

    describe('PaymentOrderBFFWEB Card', () => {
        var budgetid
        it('/api/business/paymentOrdersCard Card Create', async () => {
            const res = await axios.post(webURl + '/api/business/' + business + '/' + branch + '/cardPaymentOrders', {

                "paymentNumber": "395",
                "documentDate": date,
                "senderAccountNumber": senderAccountNumberOther,
                "cardAccount": cardAccount,
                "cardNumber": cardNumber,
                "receiverBranch": branch,
                "receiverAccountNumber": "23102000400488178003",
                "receiverName": "OOO  BOUNTY",
                "paymentPurpose": "Попззпзпполнение корпоративной каты согл дог№99485 от 30.06.2011г",
                "paymentPurposeCode": "00634",
                "amount": 4000,
                "isAnor": false

            }, {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(res => res)
            let datahead = res.headers.location
            const dataArr = datahead.split('/')
            expect(res.status).equal(201)
            if (res.status == 201) {
                budgetid = dataArr[dataArr.length - 1]
            }
        });

        it('/api/business/' + budgetid + '/paymentOrdersCard Card Put', async () => {
            const res = await axios.put(webURl + '/api/business/' + business + '/' + branch + '/cardPaymentOrders/' + budgetid, {


                "paymentNumber": "395",
                "documentDate": date,
                "senderAccountNumber": senderAccountNumberOther,
                "cardAccount": cardAccount,
                "cardNumber": cardNumber,
                "receiverBranch": branch,
                "receiverAccountNumber": "23102000004045399005",
                "receiverName": "OOO  BOUNTY",
                "paymentPurpose": "тест а12пдейтаг",
                "paymentPurposeCode": "00634",
                "amount": 40212200,
                "isAnor": false


            }, {
                headers: {
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(res => res)
            expect(res.status).equal(201)
        });
    });

    describe('PaymentOrderBFFWEB Card Other', () => {
        var budgetid
        it('/api/business/business/branch/otherCardPaymentOrders Card Other Create', async () => {
            const res = await axios.post(webURl + '/api/business/' + business + '/' + branch + '/otherCardPaymentOrders', {

                "paymentNumber": "391",
                "documentDate": date,
                "senderAccountNumber": senderAccountNumber,
                "cardNumber": "8600493287659175",
                "receiverBranch": branch,
                "receiverAccountNumber": "23120000800000445001",
                "receiverName": "OOO  BOUNTY",
                "paymentPurpose": "asdasddsaПополнение корпоративной каты согл дог№99485 от 30.06.2011г",
                "paymentPurposeCode": "00634",
                "amount": 4000,
                "isAnor": false


            }, {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(res => res)
            let datahead = res.headers.location
            const dataArr = datahead.split('/')
            expect(res.status).equal(201)
            if (res.status == 201) {
                budgetid = dataArr[dataArr.length - 1]
            }
        });

        it('{{host}}/api/business/business/branch/otherCardPaymentOrders Card Other Put', async () => {
            const res = await axios.put(webURl + '/api/business/' + business + '/' + branch + '/otherCardPaymentOrders/' + budgetid, {

                "paymentNumber": "391",
                "documentDate": date,
                "senderAccountNumber": senderAccountNumber,
                "cardNumber": "8600493287659175",
                "receiverBranch": branch,
                "receiverAccountNumber": "23120000800000445001",
                "receiverName": "OOO  BOUNTY",
                "paymentPurpose": "va корпоративной каты согл дог№99485 от 30.06.2011г",
                "paymentPurposeCode": "00634",
                "amount": 4000,
                "isAnor": false


            }, {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(res => res)
            expect(res.status).equal(201)
        });
        describe('TEST END', () => {
            it('TEST END PaymentOrderBFFWEB ', async () => {
                await console.log("/////////////PaymentOrderBFFWEB////////////////")

            })
        })

    });
}