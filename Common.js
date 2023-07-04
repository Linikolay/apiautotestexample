const should = require("should");

const moment = require('moment')
const expect = require("chai").expect;
const mobileURL = "https://kbdbo-mobile-api-dev.paymart.uz";
const webURl = 'https://kbdbo-web-api-dev.kapitalbank.uz';
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
        it('TEST START Common GET ', async () => {
            await console.log("///////////// COMMON GET ////////////////")

        })
    })


    describe('Common GET ​/api​/common​/nonBusinessDays', () => {
        
        it('​/api​/common​/nonBusinessDays', async () => {
         try{
            const res =  await axios.get(webURl + "/api/common/nonBusinessDays" , {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(getresp => getresp)


            // console.log(res.data)
            
             expect(res.status).equal(200)
             
             if(res.data.result.length){
                
             }else{
                expect.fail('error')
             }
         }catch(e){
            console.log(e)
            expect.fail(e)
         }
                
             

          
        });
    });
    
    






    describe('Common GET ​/api/common/'+branch+'/businessDay', () => {
        
        it('/api/common/'+branch+'/businessDay', async () => {
         try{
            const res =  await axios.get(webURl + "/api/common/"+branch+"/businessDay" , {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(getresp => getresp)


            // console.log(res.data)
            const mydata = res.data.result
            
             expect(res.status).equal(200)
             if(mydata.curDate && mydata.state && mydata.description){

             }else{
                expect.fail('error')
             }
          
         }catch(e){
            console.log(e)
            expect.fail(e)
         }
        });
    });



    

  

    describe('Common GET /api/common/documentTypes', () => {
        
        it('​/api/common/documentTypes', async () => {
         try{
            const res =  await axios.get(webURl + "/api/common/documentTypes" , {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(getresp => getresp)
             expect(res.status).equal(200)
             if(res.data.result.length){
             }else{
                expect.fail('error')
             }
         }catch(e){
            console.log(e)
            expect.fail(e)
         }
        });
    });




    describe('Common GET /api/common/paymentDestinationCodes', () => {
        
        it('​/api/common/paymentDestinationCodes', async () => {
         try{
            const list =  await axios.get(webURl + "/api/common/documentTypes" , {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            })
            const newmgs = list.data.result
           
         
            
               const mainfail = await ((error)=>{
                expect.fail(error)
                console.log("fdsfdsf")
               })
                
                
            await Promise.all(newmgs.map(async (dark) => {
                    const res = await axios.get(webURl + "/api/common/paymentDestinationCodes?documentType="+dark.code+"&searchString=0" , {
                        headers: {
                            "X-Device-Info": deviceinfo,
                            Authorization: 'Bearer' + ' ' + token
                        }
                    }
                    ).then(data => {     
                        if(data.data.error == null){
                            
                          }else{
                            mainfail(data.data.error)
                          }
                    })
                    .catch(err => console.log(err))
              }));
         }catch(e){
            console.log(e)
            expect.fail(e)
         }
        });
    });







     

    describe('Common GET /api/common/paymentStates', () => {
        
        it('/api/common/paymentStates', async () => {
         try{
            const res =  await axios.get(webURl + "/api/common/paymentStates" , {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(getresp => getresp)
            
             expect(res.status).equal(200)
             if(res.data.result.length){
                
             }else{
                expect.fail('error')
             }
         }catch(e){
            console.log(e)
            expect.fail(e)
         }
        });
    });










      

    describe('Common GET /api/treasury/requisites', () => {
        
        it('/api/treasury/requisites (DEFAULT)', async () => {
         try{
            const res =  await axios.get(webURl + "/api/treasury/requisites" , {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(getresp => getresp)
            
             expect(res.status).equal(200)
             if(res.data.result.items.length){
                
             }else{
                expect.fail('error')
             }
         }catch(e){
            console.log(e)
            expect.fail(e)
         }
        });




        it('/api/treasury/requisites&searching?SearchString=1&PageNumber=1&PageSize=1', async () => {
            try{
               const res =  await axios.get(webURl + "/api/treasury/requisites?SearchString=1&PageNumber=1&PageSize=1" , {
                   headers: {
                       "X-Device-Info": deviceinfo,
                       Authorization: 'Bearer' + ' ' + token
                   }
               }
               ).then(getresp => getresp)
               
                expect(res.status).equal(200)
                
                if(res.data.result.items.length){
                   
                }else{
                   expect.fail('error')
                }
            }catch(e){
               console.log(e)
               expect.fail(e)
            }
           });

    });








    describe('Common GET /api/treasury/'+accountNumber+'/requisites', () => {
        
        it("/api/treasury/"+accountNumber+ "/requisites", async () => {
         try{
            const res =  await axios.get(webURl + "/api/treasury/4014228601082253422949179/requisites" , {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(getresp => getresp)
                
             expect(res.status).equal(200)
             if(res.data.error != null || res.data.error != "null"){
                
             }else{
                expect.fail('error')
             }
         }catch(e){
            console.log(e)
            expect.fail(e)
         }
        });


    });










      

    describe('Common GET /api/budget/requisites', () => {
        
        it('/api/budget/requisites (DEFAULT)', async () => {
         try{
            const res =  await axios.get(webURl + "/api/budget/requisites" , {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(getresp => getresp)
            
             expect(res.status).equal(200)
             if(res.data.result.items.length){
                
             }else{
                expect.fail('error')
             }
         }catch(e){
            console.log(e)
            expect.fail(e)
         }
        });




        it('/api/budget/requisites&searching?SearchString=1&PageNumber=1&PageSize=1', async () => {
            try{
               const res =  await axios.get(webURl + "/api/budget/requisites?SearchString=1&PageNumber=1&PageSize=1" , {
                   headers: {
                       "X-Device-Info": deviceinfo,
                       Authorization: 'Bearer' + ' ' + token
                   }
               }
               ).then(getresp => getresp)
               
                expect(res.status).equal(200)
                
                if(res.data.result.items.length){
                   
                }else{
                   expect.fail('error')
                }
            }catch(e){
               console.log(e)
               expect.fail(e)
            }
           });

    });












    describe('Common GET /api/budget/'+accountNumber+'/requisites', () => {
        
        it("/api/budget/"+accountNumber+ "/requisites", async () => {
         try{
            const res =  await axios.get(webURl + "/api/budget/"+accountNumber+ "/requisites" , {
                headers: {
                    "X-Device-Info": deviceinfo,
                    Authorization: 'Bearer' + ' ' + token
                }
            }
            ).then(getresp => getresp)
                
             expect(res.status).equal(200)
             if(res.data.error != null || res.data.error != "null"){
                
             }else{
                expect.fail('error')
             }
         }catch(e){
            console.log(e)
            expect.fail(e)
         }
        });


    });




    describe('TEST END', () => {
        it('TEST END Common GET ', async () => {
            await console.log("/////////////Common GET////////////////")

        })


    })
}










