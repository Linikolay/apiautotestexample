const should = require("should");

const moment = require('moment')
const expect = require("chai").expect;
const mobileURL = "https://kbdbo-mobile-api-dev.paymart.uz";
const webURl = 'https://kbdbo-web-api-dev.paymart.uz';
const logn = 'UCHKUNOV';
const pass = '123456';
let date = moment().add(1, 'days').format('YYYY-MM-DD')
const deviceinfo = 'X-Device-Info": "iOS; 14; Apple; iPhone 14; 1.1; 3x'
let branch = '01088';
let business = '00947681';
let temp = 1555153;
var token = '0';
var templateID = '';
let budgetid = '';
var trasureid;
var cardid;
const  accountNumber = "301010860334017107500018054"
var cardotherid;
let usersend = 10414

const axios = require('axios');


module.exports =  generate  =>  {

    describe('TEST START', () => {
        it('TEST START Business GET ', async () => {
            await console.log("///////////// Business GET ////////////////")

        })
    })

    describe('Auth Token',  () => {
        var nextToken
        var category
        var tokenautorezation
        it('/api/auth', async () => {
            const res = await axios.post(webURl + "/api/auth", {
                'login': logn,
                'password': pass,
            }, {
                headers: {
                    "X-Device-Info": deviceinfo
                }
            }
            ).then(res => res)
            expect(res.status).equal(200)
            if (res.data.result.accessToken.length > 0) {
                token = res.data.result.accessToken
            } else {
                expect.fail('/api/auth/ dont auth accessToken');
            }
        });
    });


    describe('Business GET /api/business/list', () => {
        
        it('/api/business/list', async () => {
         try{
            const res =  await axios.get(webURl + "/api/business/list" , {
                headers: {
                    
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(getresp => getresp)


            
            
             expect(res.status).equal(200)
             
         
         }catch(e){
            console.log(e)
            expect.fail(e)
         }
                
             

          
        });
    });
    
    


    describe('Business GET /api/business/'+business+ '/' + branch, () => {
        
        it('/api/business/'+business+ '/' + branch, async () => {
         try{
            const res =  await axios.get(webURl + '/api/business/'+business+ '/' + branch , {
                headers: {
                    
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(getresp => getresp)


            
            
            
             expect(res.status).equal(200)
             
          
         }catch(e){
            console.log(e)
            expect.fail(e)
         }
                
             

          
        });
    });








    describe('Business GET /api/business/'+business+ '/' + branch +'/paymentCards', () => {
        
        it('/api/business/'+business+ '/' + branch +'/paymentCards', async () => {
         try{
            const res =  await axios.get(webURl + '/api/business/'+business+ '/' + branch +'/paymentCards', {
                headers: {
                    
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(getresp => getresp)


            
            
            
             expect(res.status).equal(200)
             
          
         }catch(e){
            console.log(e)
            expect.fail(e)
         }
                
             

          
        });
    });


  


    describe('Business GET /api/business/'+business+ '/' + branch +'/users', () => {
        
        it('/api/business/'+business+ '/' + branch +'/users', async () => {
         try{
            const res =  await axios.get(webURl + '/api/business/'+business+ '/' + branch +'/users', {
                headers: {
                    
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(getresp => getresp)


            
            
            
             expect(res.status).equal(200)
             
          
         }catch(e){
            console.log(e)
            expect.fail(e)
         }
                
             

          
        });
    });





    describe('Business GET /api/cards/8600492900369733/requisites', () => {
        
        it('/api/cards/8600492900369733/requisites', async () => {
         try{
            const res =  await axios.get(webURl + '/api/cards/8600492900369733/requisites', {
                headers: {
                    
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(getresp => getresp)


            
            
            
             expect(res.status).equal(200)
             
          
         }catch(e){
            console.log(e)
            expect.fail(e)
         }
                
             

          
        });
    });



    describe('TEST END', () => {
        it('TEST END Business GET ', async () => {
            await console.log("/////////////Business GET////////////////")

        })


    })
}










