const should = require("should");
const moment = require('moment')
const expect = require("chai").expect;
const mobileURL = "https://kbdbo-mobile-api-dev.kapitalbank.uz";
const webURl = 'https://kbdbo-web-api-dev.kapitalbank.uz';
const logn = 'TEST_LOGIN1';
const pass = '123456';
let date = moment().add(1, 'days').format('YYYY-MM-DD')
const deviceinfo = 'MacBook'
let branch = '00445';
let business = '04045399';
//var token = '0';
const cardNumber = "8600493225790884"
const kans = "1000108600032023142917093"
const kans1 = "23402000300100001010"
const senderAccountNumber = "20214000504045399001";
const senderAccountNumberOther = "20214000504045399001"
const receiverAccountNumber = "23102000400488178003"
const receiverAccountNumberOthers = "23102000004045399005"
const bidgetRecivernumber = "1000108600032023142916093"
const budgetAccountNumber = "100010860030007011501093001"
const cardAccount = "22620000004045399141"
let temp = 1555153;
var templateID = '';
let budgetid = '';
var trasureid;
var cardid;
var cardotherid;
let usersend = 10414
const auth = require("./Auth.js")

let U445_TEST;
let TEST_LOGIN1;

let U445_TEST_id;
let TEST_LOGIN1_id;



const axios = require('axios');
const { application } = require("express");
const createarray = [
    {
        name: "test22",
        myid: "",
    }, {
        name: "test23",
        myid: "",
    }, {
        name: "test24",
        myid: "",
    }
    , {
        name: "test25",
        myid: "",
    }
    , {
        name: "test26",
        myid: "",
    }
    , {
        name: "test27",
        myid: "",
    }
    , {
        name: "test28",
        myid: "",
    }
    , {
        name: "test29",
        myid: "",
    }

]
const sendarr = []
module.exports = function generate() {

    describe('TEST START', () => {
        it('TEST START PaymentOrderTemplateBFFWEB ', async () => {
            await console.log("/////////////PaymentOrderTemplateBFFWEB////////////////")
            global.console.log(token1);

        })
    })  
    describe('TemplateBFF Create Template', () => {
        it('/api/business/' + business + '/' + branch + '/paymentOrdersTemplate', async () => {
         try{
            const res = await axios.post(webURl + "/api/business" + "/" + business + '/' + branch + "/" + "paymentOrdersTemplate", { 
                name: "Hello asdf",
                senderAccountNumber: senderAccountNumber,
                receiverBranch: "00445",
                receiverAccountNumber: receiverAccountNumber,
                receiverName: "OOO  BOUN12121212TY",
                receiverInnOrPinfl: "302936161",
                paymentPurpose: "TEST Переброска для пополнения вторичного счета",
                paymentPurposeCode: "56021",
                amount: 30000,
                isAnor: false
            }, {
            headers: {
                "X-Device-Info": deviceinfo,
                Authorization: 'Bearer' + ' ' + token1
            }, 
            
            },
            ).then(res => res)
            let datahead = await res.headers.location
            const dataArr = await datahead.split('/')
            expect(res.status).equal(201)
            if (res.status == 201) {
                templateID = dataArr[dataArr.length - 1]
                // templateID = res.data.result
                // console.log("mayyyy" + templateID)
            }
         }catch(e){
            console.log(e.response)
         }
            
        });
    });

    

    describe('TemplateBFF Check Create Get Template', async () => {
        it('/api/business/' + business + '/' + branch +'/paymentOrdersTemplate/' + templateID, async () => {
            const res = await axios.get(webURl + "/api/business/" + business + '/' + branch +"/paymentOrdersTemplate/" + templateID, {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token1
                }
            }
            ).then(res => res)
            expect(res.status).equal(200)
        });
    });

    describe('TemplateBFF Template Update', () => {
        it('/api/business/' + business + '/' + branch + '/paymentOrdersTemplate/' + templateID, async () => {
            console.log(templateID)
            const res = await axios.put(webURl + '/api/business/' + business + '/' + branch + '/paymentOrdersTemplate/' + templateID, {
                name: "Hello asdf",
                senderAccountNumber: senderAccountNumber,
                receiverBranch: "00445",
                receiverAccountNumber: receiverAccountNumber,
                receiverName: "OOO  BOUN12121212TY",
                receiverInnOrPinfl: "302936161",
                paymentPurpose: "TEST Переброска для пополнения вторичного счета",
                paymentPurposeCode: "56021",
                amount: 30000,
                isAnor: false
            }, {
                headers: {
                "X-Device-Info": deviceinfo,
                Authorization: 'Bearer' + ' ' + token1
            },  
            }
            ).then(res => res)
            expect(res.status).equal(201)
        });
    });

    describe('TemplateBFF DELETE Template', () => {
        
    
        it('/api/business/' + business + '/' + branch + '/paymentOrdersTemplate', async () => {
            try{
                console.log(templateID)
                const res = await axios.delete(webURl + "/api/business" + "/" + business + '/' + branch + "/" + "paymentOrdersTemplate", {
                    headers: {
                        
                        Authorization: 'Bearer' + ' ' + token1
                    },
                    
                    data: [templateID]
                
                }
                )
                console.log(await res.data)
                expect(res.status).equal(200)

             }catch(e){
                    console.log(e)
             }

            const getresp = await axios.get(webURl + "/api/business/" + business + '/' + branch + "/paymentOrdersTemplate/" + templateID, {
                headers: {
                    
                    Authorization: 'Bearer' + ' ' + token1
                }
            }
            ).then(getresp => getresp)
            expect(getresp.data.result.state).equal(0)
        });
    });

    describe('TemplateBFF Get List Template', () => {
        it('/api/business/'+ business + '/' +branch+'/paymentOrdersTemplate/', async () => {
            const res = await axios.get(webURl + '/api/business/'+ business + '/' +branch+'/paymentOrdersTemplate/?PageNumber=1&PageSize=20', {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token1
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

    describe('TemplateBFF Budget Template', () => {
        it("/api/business/" + business + "/" + branch + "/paymentOrdersBudgetTemplate", async () => {
            const res = await axios.post(webURl + "/api/business/" + business + "/" + branch + "/paymentOrdersBudgetTemplate", {

                name: "testNameBudget",
                senderAccountNumber: senderAccountNumber,
                budgetAccountNumber: budgetAccountNumber,
                budgetInn: "200637640",
                paymentPurpose: "За таможенные услуги сог-но счет №26002 от 05.03.2022г. пред. 100%",
                paymentPurposeCode: "00900",
                amount: 35003,
                isAnor: false
                }, 
                {
                    headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token1
                }, 
            }
            ).then(res => res)
            let datahead = res.headers.location
            const dataArr = datahead.split('/')
            expect(res.status).equal(201)
            if (res.status == 201) {
                budgetid = dataArr[dataArr.length - 1]
            }
        });

        it('/api/business/' + budgetid + '/paymentOrdersBudgetTemplate BudgetTemplate PUT Update', async () => {
            const res = await axios.put(webURl + '/api/business/' + business + '/' + branch + '/paymentOrdersBudgetTemplate/' + budgetid, {
                name: "testNameBudget",
                senderAccountNumber: senderAccountNumber,
                budgetAccountNumber: budgetAccountNumber,
                budgetInn: "200637640",
                paymentPurpose: "За таможенные услуги сог-но счет №26002 от 05.03.2022г. пред. 100%",
                paymentPurposeCode: "00900",
                amount: 35003,
                isAnor: false
                },
                {
                    headers: {
                        "X-Device-Info": deviceinfo,
                        Authorization: 'Bearer' + ' ' + token1
                    },
            }
            ).then(res => res)
            expect(res.status).equal(201)
        });

        it('/api/business/' + budgetid + '/paymentOrdersBudgetTemplate BudgetTemplate BudgetTemplate GET', async () => {
            const res = await axios.get(webURl + '/api/business/' + business + '/' + branch + '/paymentOrdersTemplate/' + budgetid, {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token1
                }
            }
            ).then(res => res)
            expect(res.status).equal(200)
            if (res.status == 200) {
                expect(res.data.result.id).equal(parseInt(budgetid))
            }
        });
    });

    describe('TemplateBFF Treasure', () => {
        it('/api/business/paymentOrdersTreasureTemplate Treascure Create', async () => {
            const res = await axios.post(webURl + "/api/business/" + business + "/" + branch + "/paymentOrdersTreasureTemplate", {
                name: "TestTreasureTemplate",
                description : "test", 
                senderAccountNumber: senderAccountNumber,
                budgetAccountNumber: kans,
                paymentPurpose: "За таможенные услуги сог-но счет №26002 от 05.03.2022г. пред. 100%",
                paymentPurposeCode: "08101",
                amount: 3500,
                isAnor: false
                },
                {                
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token1
                },
            }
            ).then(res => res)
            let datahead = res.headers.location
            const dataArr = datahead.split('/')
            expect(res.status).equal(201)
            if (res.status == 201) {
                trasureid = dataArr[dataArr.length - 1]
            }
        });

        it('/api/business/' + trasureid + '/paymentOrdersTreasureTemplate BudgetTemplate Treasure Put', async () => {
            const res = await axios.put(webURl + '/api/business/' + business + '/' + branch + '/paymentOrdersTreasureTemplate/' + trasureid, {
                name: "TestTreasureTemplaffffffte",
                description : "tes3333t", 
                senderAccountNumber: senderAccountNumber,
                budgetAccountNumber: kans,
                paymentPurpose: "За таможенные услуги сог-но счет №26002 от 05.03.2022г. пред. 100%",
                paymentPurposeCode: "08101",
                amount: 3500,
                isAnor: false
                },
                {
                headers: {
                        "X-Device-Info": deviceinfo,
                        Authorization: 'Bearer' + ' ' + token1
                    },
            }
            ).then(res => res)
            expect(res.status).equal(201)
        });

        it('/api/business/' + trasureid + '/paymentOrdersTreasureTemplate BudgetTemplate Treasure GET', async () => {
            const res = await axios.get(webURl + '/api/business/' + business + '/' + branch + '/paymentOrdersTemplate/' + trasureid,
                {
                    headers: {
                        "X-Device-Info": deviceinfo,
                        Authorization: 'Bearer' + ' ' + token1
                    }
                }
            ).then(res => res)
            expect(res.status).equal(200)
            if (res.status == 200) {
                expect(res.data.result.id).equal(parseInt(trasureid))
            }
        });
    });

    describe('TemplateBFF Card', () => {
        var budgetid
        it('/api/business/paymentOrdersCardTemplate Card Create', async () => {
            const res = await axios.post(webURl + "/api/business/" + business + "/" + branch + "/paymentOrdersCardTemplate", {
                name: "test",
                senderAccountNumber: senderAccountNumber,  
                cardAccount:"22620000004045399108",
                cardNumber : "8600 49** **** 8769",
                receiverBranch: "00445",
                receiverAccountNumber: "23102000004045399005",
                receiverName: "OOO  BOUNTY",
                paymentPurpose: "Попззпзпполнение корпоративной каты согл дог№99485 от 30.06.2011г",
                paymentPurposeCode: "00601",
                amount: 4000,
                isAnor: false
                },
                {
                headers: {
                        "X-Device-Info": deviceinfo,
                        Authorization: 'Bearer' + ' ' + token1
                    },
            }
            ).then(res => res)
            let datahead = res.headers.location
            const dataArr = datahead.split('/')
            expect(res.status).equal(201)
            if (res.status == 201) {
                cardid = dataArr[dataArr.length - 1]
            }
        });

        it('/api/business/' + cardid + '/paymentOrdersCardTemplate Card Put', async () => {
            const res = await axios.put(webURl + '/api/business/' + business + '/' + branch + '/paymentOrdersCardTemplate/' + cardid, {
                name : "ватафакакака",
                senderAccountNumber: senderAccountNumber,  
                cardAccount:"22620000004045399108",
                cardNumber : "8600 49** **** 8769",
                receiverBranch: "00445",
                receiverAccountNumber: "23102000004045399005",
                receiverName: "OOO  BOUNTY",
                paymentPurpose: "Попззпзпполнение корпоративной каты согл дог№99485 от 30.06.2011г",
                paymentPurposeCode: "00601",
                amount: 1122212,
                isAnor: false
                },
                {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token1
                },
            }
            ).then(res => res)
            expect(res.status).equal(201)
        });

        it('/api/business/' + trasureid + '/paymentOrdersTreasureTemplate CARD GET', async () => {
            const res = await axios.get(webURl + '/api/business/' + business + '/' + branch + '/paymentOrdersTemplate/' + cardid,
                {
                    headers: {
                        "X-Device-Info": deviceinfo,
                        Authorization: 'Bearer' + ' ' + token1
                    }
                }
            ).then(res => res)
            expect(res.status).equal(200)
            if (res.status == 200) {
                expect(res.data.result.id).equal(parseInt(cardid))
            }
        });
    });


    describe('TemplateBFF Card Other', () => {
        it('/api/business/paymentOrdersCardOtherTemplate Card Create', async () => {
            const res = await axios.post(webURl + "/api/business/" + business + "/" + branch + "/paymentOrdersCardOtherTemplate", {
                name: "TestOtherCardTemplate",
                description : "de233232st",
                senderAccountNumber: senderAccountNumber,
                cardNumber: cardNumber,
                receiverAccountNumber: receiverAccountNumberOthers,
                receiverName: "OOO  BOUNTY",
                receiverBranch: "00445",
                paymentPurpose: "Пополнение корпоративной каты согл дог№99485 от 30.06.2011г",
                paymentPurposeCode: "00601",
                amount: 4000,
                isAnor: false
                },
                {
                    headers: {
                        "X-Device-Info": deviceinfo,
                        Authorization: 'Bearer' + ' ' + token1
                    },
            }
            ).then(res => res)
            let datahead = res.headers.location
            const dataArr = datahead.split('/')
            expect(res.status).equal(201)
            if (res.status == 201) {
                cardotherid = dataArr[dataArr.length - 1]
            }
        });

        it('/api/business/' + cardotherid + '/paymentOrdersCardTemplate Card Other Put', async () => {
            const res = await axios.put(webURl + '/api/business/' + business + '/' + branch + '/paymentOrdersCardOtherTemplate/' + cardotherid, {
                name: "TestOtherCardTemplate",
                description : "de232333232st",
                senderAccountNumber: senderAccountNumber,
                cardNumber: cardNumber,
                receiverAccountNumber: receiverAccountNumberOthers,
                receiverName: "OOO  BOUNTY",
                receiverBranch: "00445",
                paymentPurpose: "Пополнение корпоративной каты согл дог№99485 от 30.06.2011г",
                paymentPurposeCode: "00601",
                amount: 43300,
                isAnor: false
                },
                {
                    headers: {
                        "X-Device-Info": deviceinfo,
                        Authorization: 'Bearer' + ' ' + token1
                    },
            }
            ).then(res => res)
            expect(res.status).equal(201)
        });

        it('/api/business/' + cardotherid + '/paymentOrdersTreasureTemplate CARDOTHER GET', async () => {
            const res = await axios.get(webURl + '/api/business/' + business + '/' + branch + '/paymentOrdersTemplate/' + cardotherid,
                {
                    headers: {
                        "X-Device-Info": deviceinfo,
                        Authorization: 'Bearer' + ' ' + token1
                    }
                }
            ).then(res => res)
            expect(res.status).equal(200)
            if (res.status == 200) {
                expect(res.data.result.id).equal(parseInt(cardotherid))
            }
        });
    });








    describe('TemplateBFF Share', () => {



        it('/api/auth U445_TEST 01085', async () => {
            try {
                const res = await axios.post(webURl + "/api/auth", {
                    'login': "U445_TEST1",
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
                U445_TEST_id = res.data.result.userId
                
                if (res.data.result.accessToken == null){
                    it('api/confirm'), async () => {
                        const res = await axios.put(webURl + "/api/confirm",{
                            'userId': U445_TEST_id,
                            'confirmCode': confirmCode,
                            'confirmToken': res.data.result.confirmToken,
                        }, {
                        "X-Device-Info": deviceinfo,
                        "Accept-Language": "ru-RU"
                        }).then(res => res).catch((error) => {
                            console.log(error.response.data)
                            expect(error.response.status).equal(200) 
                        });
                        await expect(res.status).equal(200)
                        U445_TEST = res.data.result.confirmToken
                    }
                } else if (res.data.result.accessToken.length > 0) {
                    U445_TEST = res.data.result.accessToken
                } else 
                {
                    expect.fail('/api/auth/ dont auth accessToken');
                }
            } catch (e) {
                console.log(e)
            }
            console.log(U445_TEST + "     " + U445_TEST_id)
        });




        it('/api/auth TEST_LOGIN1 01085', async () => {
            try {
                const res = await axios.post(webURl + "/api/auth", {
                    'login': "TEST_LOGIN1",
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
                TEST_LOGIN1_id = res.data.result.userId
                
                if (res.data.result.accessToken == null){
                    it('api/confirm'), async () => {
                        const res = await axios.put(webURl + "/api/confirm",{
                            'userId': TEST_LOGIN1_id,
                            'confirmCode': confirmCode,
                            'confirmToken': res.data.result.confirmToken,
                        }, {
                        "X-Device-Info": deviceinfo,
                        "Accept-Language": "ru-RU"
                        }).then(res => res).catch((error) => {
                            console.log(error.response.data)
                            expect(error.response.status).equal(200) 
                        });
                        await expect(res.status).equal(200)
                        TEST_LOGIN1 = res.data.result.confirmToken
                    }
                } else if (res.data.result.accessToken.length > 0) {
                    TEST_LOGIN1 = res.data.result.accessToken
                } else 
                {
                    expect.fail('/api/auth/ dont auth accessToken');
                }
            } catch (e) {
                expect.fail(e)
            }
            console.log(TEST_LOGIN1 + "      "  +  TEST_LOGIN1_id)
        });

        it('/api/business/paymentOrdersTemplate CreateTemplate 8 Documents', async () => {
            try {

        
             
       

                await Promise.all(createarray.map(async (dark, index) => {

                    const event = Date.now()

                    const creatre = await axios.post(webURl + "/api/business/04045399/00445/paymentOrdersTemplate", {
                        name: event.toString(),
                        senderAccountNumber: senderAccountNumber,
                        receiverBranch: "00445",
                        receiverAccountNumber: receiverAccountNumber,
                        receiverName: "OOO  BOUN12121212TY",
                        receiverInnOrPinfl: "302936161",
                        paymentPurpose: "TEST Переброска для пополнения вторичного счета",
                        paymentPurposeCode: "56021",
                        amount: 30000,
                        isAnor: false

                    }, {
                        headers: {
                            "X-Device-Info": deviceinfo,
                            Authorization: 'Bearer' + ' ' + TEST_LOGIN1
                        }
                    },
                    ).then(creatre => creatre)
                  

                    let datahead = await creatre.headers.location
                    const dataArr = await datahead.split('/')

                    if (creatre.status == 201) {
                        let docid = await dataArr[dataArr.length - 1]
                        createarray[index].myid = docid
                        sendarr.push(parseInt(docid))
                        // mainfail(createarray.data, index) 
                        // temper()
                        // .catch(err => console.log(err));
                    }
                })
                
                )
                
                const detail = await axios.post(webURl + "/api/business/04045399/00445/paymentOrdersTemplate/Share", {

                    "ids": sendarr,
                    "userIds": [
                        U445_TEST_id
                    ]

                }, {
                    headers: {
                        
                        Authorization: 'Bearer' + ' ' + TEST_LOGIN1
                    }
                }
                ).then(detail => detail)

                expect(detail.data.result.success).equal(8)
                

                await Promise.all(createarray.map(async (dark, index) => {


                    const creatre = await axios.get(webURl + "/api/business/04045399/00445/paymentOrdersTemplate/"+dark.myid, {
                        headers: {
                            Authorization: 'Bearer' + ' ' + TEST_LOGIN1
                        }
                    },
                    ).then(creatre => creatre)

                    console.log(creatre.data.result.id)

                    //  fail(creatre.data)
                    


                }));


            } catch (e) {
                //console.log(e.response.data.errparamsor.)
                console.log(e.request)
                expect.fail(e)
            }
        });


    });




    describe('TEST END', () => {

        it('TEST END PaymentOrderTemplateBFFWEB ', async () => {

            await console.log("/////////////PaymentOrderTemplateBFFWEB////////////////")

        })


    })
}







