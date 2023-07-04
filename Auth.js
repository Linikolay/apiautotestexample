const should = require("should");

const moment = require('moment')
const expect = require("chai").expect;
const mobileURL = "https://kbdbo-mobile-api-dev.kapitalbank.uz";
const webURl = 'https://kbdbo-web-api-dev.kapitalbank.uz';
const logn = 'TEST_LOGIN1';
const pass = '123456';
const userId = '11182';
const confirmToken = '111111';
let date = moment().add(1, 'days').format('YYYY-MM-DD')
const deviceinfo = 'MacBook'
var token = '0';
let temp = 1555153;
var token = '0';
var templateID = '';
let budgetid = '';
var trasureid;
var cardid;
var cardotherid;
let usersend = 10414

const axios = require('axios');


module.exports =  generate  =>  {

    describe('TEST START', () => {
        it('TEST START Api', async () => {
            await console.log("///////////// Auth ////////////////")

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
                } else if (res.data.result.accessToken == null){
                    it('api/confirm'), async () => {
                        const res = await axios.put(webURl + "/api/confirm",{
                            'userId': userId,
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
                        token = res.data.result.confirmToken
                    }
                } else 
                {
                    expect.fail('/api/auth/ dont auth accessToken');
                }
                console.log(token)

                global.token1 = token
                console.log(token1);


                
            
            
        });
    });





    describe('TEST END', () => {
        it('TEST END Auth  ', async () => {
            await console.log("/////////////   Auth   ////////////////")

        })


    })
}










