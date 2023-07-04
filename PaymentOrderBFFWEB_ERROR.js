const should = require("should");
const request = require('supertest');
const express = require('express');
const expect = require("chai").expect;
const moment = require('moment')
const mobileURL = "https://kbdbo-mobile-api-dev.kapitalbank.uz";
const webURl = 'https://kbdbo-web-api-dev.kapitalbank.uz';
const logn = 'TEST_LOGIN1';
const pass = '123456';
const deviceinfo = 'X-Device-Info": "iOS; 14; Apple; iPhone 14; 1.1; 3x'
let branch = '323232';
let business = '00947681';
var token = '0';
var templateID = '';
const axios = require('axios');
const { doesNotThrow, notEqual } = require("should");
const app = express();
moment.locale('ru');   
let date = moment().add(1, 'days').format('YYYY-MM-DD')
module.exports = function generate (){

    describe('TEST START',  () => { 
        it('TEST START PaymentOrderBFFWEB ', async () => {
          await console.log("/////////////PaymentOrderBFFWEB////////////////")
        })
    })
describe('Auth Token',  () => {
    var nextToken
    var category
    var tokenautorezation
    it('/api/auth', async () => {
     
        try{
            const res = await axios.post(webURl + "/api/auth", {
                'login': logn,
                'password': pass,
            }, {
                headers: {
                    "X-Device-Info": deviceinfo
                }
            }
            ).then(res => res)
            console.log(res)
            expect(res.status).equal(200)
            if (res.data.result.accessToken.length > 0) {
                token = res.data.result.accessToken
            } else {
                expect.fail('/api/auth/ dont auth accessToken');
            }
        }catch(e){
            console.log(e)
        }
    });
});

describe('PaymentOrderBFFWEB Create Template',  () => {
  ////// not date
    it('/api/business/00947681/01088/PaymentOrders', async () => {
        const res = await axios.post(webURl + "/api/business/00947681/01088/PaymentOrders", {
                "documentType": "01",
                "paymentNumber": "400",
                "documentDate": "2013-03-03",
                "senderAccountNumber": "20218000300947681001",
                "receiverBranch": "00974",
                "receiverAccountNumber": "20208000012345678001",
                "receiverName": "OOO  BOUNTY",
                "receiverInnOrPinfl": "302936161",
                "paymentPurpose": "TEST Переброска для пополнения вторичного счета33",
                "paymentPurposeCode": "00641",
                "amount": 35000,
                "isAnor": false
        }, {
            headers: {
                "X-Device-Info": deviceinfo,
                Authorization: 'Bearer' + ' ' + token
            }
        }
        ).then(res => console.log(res))
        .catch((error) => {

            expect(error.response.status).equal(400)
        });






///// senderAccountNumber

        const rest = await axios.post(webURl + "/api/business/00947681/01088/PaymentOrders", {
            "documentType": "01",
            "paymentNumber": "400",
            "documentDate": date,
            "senderAccountNumber": "20218000300947681005",
            "receiverBranch": "00974",
            "receiverAccountNumber": "20208000012345678001",
            "receiverName": "OOO  BOUNTY",
            "receiverInnOrPinfl": "302936161",
            "paymentPurpose": "TEST Переброска для пополнения вторичного счета33",
            "paymentPurposeCode": "00641",
            "amount": 35000,
            "isAnor": false
    }, {
        headers: {
            "X-Device-Info": deviceinfo,
            Authorization: 'Bearer' + ' ' + token
        }
    }
    ).then(res => console.log(res))
    .catch((error) => {

        expect(error.response.status).equal(400)
    });
        


/////not receiverBranch

    const rest1 = await axios.post(webURl + "/api/business/00947681/01088/PaymentOrders", {
        "documentType": "01",
        "paymentNumber": "400",
        "documentDate": date,
        "senderAccountNumber": "20218000300947681001",
        "receiverBranch": "10975",
        "receiverAccountNumber": "20208000012345678001",
        "receiverName": "OOO  BOUNTY",
        "receiverInnOrPinfl": "302936161",
        "paymentPurpose": "TEST Переброска для пополнения вторичного счета33",
        "paymentPurposeCode": "00641",
        "amount": 35000,
        "isAnor": false
}, {
    headers: {
        "X-Device-Info": deviceinfo,
        Authorization: 'Bearer' + ' ' + token
    }
}
).then(res => 
    // console.log(res)
res
)
.catch((error) => {

    expect(error.response.status).equal(400)
});
    










///not receiverAccountNumber


const rest2 = await axios.post(webURl + "/api/business/00947681/01088/PaymentOrders", {
    "documentType": "01",
    "paymentNumber": "400",
    "documentDate": date,
    "senderAccountNumber": "20218000300947681001",
    "receiverBranch": "00974",
    "receiverAccountNumber": "90208000012345679001",
    "receiverName": "OOO  BOUNTY",
    "receiverInnOrPinfl": "302936161",
    "paymentPurpose": "TEST Переброска для пополнения вторичного счета33",
    "paymentPurposeCode": "00641",
    "amount": 35000,
    "isAnor": false
}, {
headers: {
    "X-Device-Info": deviceinfo,
    Authorization: 'Bearer' + ' ' + token
}
}
).then(res =>
    //  console.log(res)
     res
     )
.catch((error) => {

expect(error.response.status).equal(200)
});







///// not receiverInnOrPinfl
const rest3 = await axios.post(webURl + "/api/business/00947681/01088/PaymentOrders", {
    "documentType": "01",
    "paymentNumber": "400",
    "documentDate": date,
    "senderAccountNumber": "20218000300947681001",
    "receiverBranch": "00974",
    "receiverAccountNumber": "20208000012345678001",
    "receiverName": "OOO  BOUNTY",
    "receiverInnOrPinfl": "30293615134324324",
    "paymentPurpose": "TEST Переброска для пополнения вторичного счета33",
    "paymentPurposeCode": "00641",
    "amount": 35000,
    "isAnor": false
}, {
headers: {
    "X-Device-Info": deviceinfo,
    Authorization: 'Bearer' + ' ' + token
}
}
).then(res =>
     console.log(res)
    //  res
     )
.catch((error) => {

expect(error.response.status).equal(400)
});
    











///// not receiverInnOrPinfl
const rest4 = await axios.post(webURl + "/api/business/00947681/01088/PaymentOrders", {
    "documentType": "01",
    "paymentNumber": "400",
    "documentDate": date,
    "senderAccountNumber": "20218000300947681001",
    "receiverBranch": "00974",
    "receiverAccountNumber": "20208000012345678001",
    "receiverName": "OOO  BOUNTY",
    "receiverInnOrPinfl": "302936161",
    "paymentPurpose": "TEST Переброска для пополнения вторичного счета33",
    "paymentPurposeCode": "90841",
    "amount": 35000,
    "isAnor": false
}, {
headers: {
    "X-Device-Info": deviceinfo,
    Authorization: 'Bearer' + ' ' + token
}
}
).then(res =>
    //  console.log(res)
     res
     )
.catch((error) => {

expect(error.response.status).equal(400)
});
    







///// not paymentPurpose
const rest5 = await axios.post(webURl + "/api/business/00947681/01088/PaymentOrders", {
    "documentType": "01",
    "paymentNumber": "400",
    "documentDate": date,
    "senderAccountNumber": "20218000300947681001",
    "receiverBranch": "00974",
    "receiverAccountNumber": "20208000012345678001",
    "receiverName": "OOO  BOUNTY",
    "receiverInnOrPinfl": "302936161",
    "paymentPurpose": "",
    "paymentPurposeCode": "00641",
    "amount": 35000,
    "isAnor": false
}, {
headers: {
    "X-Device-Info": deviceinfo,
    Authorization: 'Bearer' + ' ' + token
}
}
).then(res =>
     console.log(res)
    //  res
     )
.catch((error) => {
expect(error.response.status).equal(400)
});













///// not amount
const rest6 = await axios.post(webURl + "/api/business/00947681/01088/PaymentOrders", {
    "documentType": "01",
    "paymentNumber": "400",
    "documentDate": date,
    "senderAccountNumber": "20218000300947681001",
    "receiverBranch": "00974",
    "receiverAccountNumber": "20208000012345678001",
    "receiverName": "OOO  BOUNTY",
    "receiverInnOrPinfl": "302936161",
    "paymentPurpose": "2323r32r",
    "paymentPurposeCode": "00641",
    "amount": '',
    "isAnor": true
}, {
headers: {
    "X-Device-Info": deviceinfo,
    Authorization: 'Bearer' + ' ' + token
}
}
).then(res =>
    //  console.log(res)
     res
     )
.catch((error) => {
expect(error.response.status).equal(400)
});





    });


    



    
 
});
/*
describe('PaymentOrderBFFWEB Check Create Get Template',  () => {
    it('/api/business/00947681/01088/paymentOrders/' + templateID, async () => {
        const res = await axios.get(webURl + "/api/business/00947681/01088/paymentOrders/" + templateID, {
            headers: {
                "X-Device-Info": deviceinfo,
                Authorization: 'Bearer' + ' ' + token
            }
        }
        ).then(res => res)
        expect(res.status).equal(200)
    });
});

describe('PaymentOrderBFFWEB Template Update',  () => {
    it('/api/business/' + templateID + '/paymentOrders', async () => {
        const res = await axios.put(webURl + '/api/business/00947681/01088/paymentOrders/' + templateID, {
                "documentType": "01",
                "paymentNumber": "445",
                "documentDate": date,
                "senderAccountNumber": "20218000300947681001",
                "receiverBranch": "00974",
                "receiverAccountNumber": "20208000012345678001",
                "receiverName": "OOO  BOUNTY",
                "receiverInnOrPinfl": "302936161",
                "paymentPurpose": "TEST Переброска для пополнения вторичного счета33",
                "paymentPurposeCode": "00641",
                "amount": 35000,
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

describe('PaymentOrderBFFWEB Get List Template',  () => {
    it('/api/business/00947681/01088/paymentOrders/', async () => {
        const res = await axios.get(webURl + '/api/business/00947681/01088/paymentOrders/?PageNumber=1&PageSize=20', {
            headers: {
                "X-Device-Info": deviceinfo,
                Authorization: 'Bearer' + ' ' + token
            }
        }
        ).then(res => res)
        if(res.status == 200 && res.data.result.error == null)
        {
            expect(res.status).equal(200)
        }else{
            expect.error('Error ')
        }
    });
});

describe('PaymentOrderBFFWEB Budget Template',  () => {
    var budgetid
    it('/api/business/00947681/01088/budgetPaymentOrders BudgetTemplate Create', async () => {
        const res = await axios.post(webURl + "/api/business/00947681/01088/budgetPaymentOrders/", {
                "documentType": "99332322",
                "paymentNumber": "351",
                "documentDate": date,
                "senderAccountNumber": "20218000300947681001",
                "budgetAccountNumber": "992821860262947950100182001",
                "budgetInn": "200637640",
                "paymentPurpose": "За таможенные услуги сог-но счет №26002 от 05.03.2022г. пред. 100%",
                "paymentPurposeCode": "99510",
                "amount": 30000,
                "isAnor": true
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

    it('/api/business/'+budgetid+'/paymentOrdersBudgetTemplate BudgetTemplate BudgetTemplate PUT', async () => {
        const res = await axios.put(webURl + '/api/business/00947681/01088/budgetPaymentOrders/'+ budgetid, { 
            "documentType": "99",
            "paymentNumber": "353",
            "documentDate": date,
            "senderAccountNumber": "20218000300947681001",
            "budgetAccountNumber": "402821860262947950100182001",
            "budgetInn": "200637640",
            "paymentPurpose": "За таможенные услуги сог-но счет №26002 от 05.03.2022г. пред. 100%",
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

describe('PaymentOrderBFFWEB Treasure',  () => {
    var budgetid
    it('/api/business/00947681/01088/treasuryPaymentOrders BudgetTemplate Create', async () => {
        const res = await axios.post(webURl + "/api/business/00947681/01088/treasuryPaymentOrders", {
                "documentType": "98",
                "paymentNumber": "392",
                "documentDate": date,
                "senderAccountNumber": "20218000300947681001",
                "budgetAccountNumber": "1000218604034013111103093",
                "paymentPurpose": "Зазаза таможенные услуги сог-но счет №26002 от 05.03.2022г. пред. 100%",
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

    it('api/business/00947681/01088/treasuryPaymentOrders/ BudgetTemplate Treasure Put', async () => {
        const res = await axios.put(webURl + '/api/business/00947681/01088/treasuryPaymentOrders/'+budgetid, {
                "documentType": "98",
                "paymentNumber": "392",
                "documentDate": date,
                "senderAccountNumber": "20218000300947681001",
                "budgetAccountNumber": "1000218604034013111103093",
                "paymentPurpose": "За таможенные услуги сог-но счет №26002 от 05.03.2022г. пред. 100%",
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

describe('PaymentOrderBFFWEB Card',  () => {
    var budgetid
    it('/api/business/paymentOrdersCardTemplate Card Create', async () => {
        const res = await axios.post(webURl + "/api/business/00947681/01088/cardPaymentOrders", {
                "documentType": "97",
                "paymentNumber": "395",
                "documentDate": date,
                "senderAccountNumber": "20218000300947681001",
                "cardBranch" : "01033",
                "cardAccount" : "22620000904728402005",
                "receiverBranch": "00974",
                "receiverAccountNumber": "20208000012345678001",
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

    it('/api/business/'+budgetid+'/paymentOrdersCardTemplate Card Put', async () => {
        const res = await axios.put(webURl + '/api/business/00947681/01088/cardPaymentOrders/'+budgetid, {
                "documentType": "97",
                "senderBusinessCode": "00638068",
                "paymentNumber": "395",
                "documentDate": date,
                "senderBranch": "01088",
                "senderAccountNumber": "20218000300947681001",
                "cardBranch" : "01033",
                "cardAccount" : "22620000904728402005",
                "receiverBranch": "00974",
                "receiverAccountNumber": "20208000012345678001",
                "receiverName": "OOO  BOUNTY",
                "paymentPurpose": "Пополывавынение корпоративной каты согл дог№99485 от 30.06.2011г",
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
});

describe('PaymentOrderBFFWEB Card Other', () => {
    var budgetid
    it('/api/business/00947681/01088/otherCardPaymentOrders Card Create', async () => {
        const res = await axios.post(webURl + "/api/business/00947681/01088/otherCardPaymentOrders", {
                "documentType": "97",
                "paymentNumber": "391",
                "documentDate": date,
                "senderAccountNumber": "20218000300947681001",
                "cardNumber" : "8600493225790884",
                "receiverBranch": "00974",
                "receiverAccountNumber": "20208000012345678001",
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

    it('{{host}}/api/business/00947681/01088/otherCardPaymentOrders Card Other Put', async () => {
        const res = await axios.put(webURl + '/api/business/00947681/01088/otherCardPaymentOrders/'+budgetid, {
                "documentType": "97",
                "paymentNumber": "391",
                "documentDate": date,
                "senderAccountNumber": "20218000300947681001",
                "cardNumber" : "8600493225790884",
                "receiverBranch": "00974",
                "receiverAccountNumber": "20208000012345678001",
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
    describe('TEST END',  () => { 
        it('TEST END PaymentOrderBFFWEB ', async () => {
          await console.log("/////////////PaymentOrderBFFWEB////////////////")
         
        })
    })

});

*/
}