const should = require("should");
const moment = require('moment')
const expect = require("chai").expect;
const mobileURL = "https://kbdbo-mobile-api-dev.kapitalbank.uz";
const webURl = 'https://kbdbo-web-api-dev.kapitalbank.uz';
const logn = 'PHARMA1087';
const pass = '123456';
let date = moment().add(1, 'days').format('YYYY-MM-DD')
const deviceinfo = 'MacBook'
let branch = '01087';
let business = '00500167';
var token = '0';
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
var token = '0';
var templateID = '';
let budgetid = '';
var trasureid;
var cardid;
var cardotherid;
let usersend = 10414

const axios = require('axios');
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
    describe(' Create Payrolls', () => {
        it('/api/business/' + business + '/' + branch + '/Payrolls', async () => {
            const res = await axios.post(webURl + "/api/business" + "/" + business + '/' + branch + "/" + "payrolls", {
                "employeeBranch": branch,
                "month": 4,
                "year": 2025
            }, {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            },
            ).then(res => res)
            
            let datahead = res.headers.location
            
            const dataArr = await datahead.split('/')
            expect(res.status).equal(201)
            if (res.status == 201) {
                templateID = dataArr[dataArr.length - 1]
                
            }
        });
    });

    


    describe('Payrolls getById', () => {
        it('/api/business/' + business + '/' + branch + '/Payrolls', async () => {
            const res = await axios.get(webURl + "/api/business" + "/" + business + '/' + branch + "/" + "payrolls"+"/"+templateID, {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            },
            ).then(res => res)
       
            expect(res.status).equal(200)
           
        });
    });

    
    
    

    describe('Payrolls ListUsers', () => {
        it('/api/business/' + business + '/' + branch + '/Payrolls', async () => {
            const res = await axios.get(webURl + "/api/business" + "/" + business + '/' + branch + "/" + "payrolls"+"/"+templateID+"/items?HideZeroAmounts=true", {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            },
            ).then(res => res)
       
            expect(res.status).equal(200)
           
        });
    });

    
    
    
    describe('Payrolls GetToSign', () => {
        it('/api/business/' + business + '/' + branch + '/Payrolls', async () => {
            const res = await axios.get(webURl + "/api/business" + "/" + business + '/' + branch + "/" + "payrolls/toSign", {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            },
            ).then(res => res)
       
            expect(res.status).equal(200)
           
        });
    });

    





    describe('Payrolls Get Prepared', () => {
        it('/api/business/' + business + '/' + branch + '/Payrolls', async () => {
            const res = await axios.get(webURl + "/api/business" + "/" + business + '/' + branch + "/" + "payrolls/prepared", {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            },
            ).then(res => res)
       
            expect(res.status).equal(200)
           
        });
    });

    
    


    describe('Payrolls Get History', () => {
        it('/api/business/' + business + '/' + branch + '/Payrolls', async () => {
            const res = await axios.get(webURl + "/api/business" + "/" + business + '/' + branch + "/" + "payrolls/history", {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            },
            ).then(res => res)
       
            expect(res.status).equal(200)
           
        });
    });


    describe('Payrolls Get Payrolls', () => {
        it('/api/business/' + business + '/' + branch + '/Payrolls', async () => {
            const res = await axios.get(webURl + "/api/business" + "/" + business + '/' + branch + "/" + "payrolls", {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            },
            ).then(res => res)
       
            expect(res.status).equal(200)
           
        });
    })






    describe('TEST END', () => {

        it('TEST END PaymentOrderTemplateBFFWEB ', async () => {

            await console.log("/////////////PaymentOrderTemplateBFFWEB////////////////")

        })


    })
}







