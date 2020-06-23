
// npm install chromedriver
// npm install selenium-webdriver
// https://www.lambdatest.com/blog/locators-in-selenium-webdriver-with-examples/#testid1
require("chromedriver");
let swd = require("selenium-webdriver");
// open browser
let bldr=new swd.Builder();
//open a tab
let driver=bldr.forBrowser("chrome").build();
//

let loginlink=driver.get("https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&");

loginlink.then(function(){
    let emailbox=driver.findElement(swd.By.id('ap_email'));
    return emailbox;
}).then(function(emailbox){
    let emailentered=emailbox.sendKeys("Satyap176@gmail.com");
    return emailentered;
}).then(function(){
    let continuebutton=driver.findElement(swd.By.id("continue"));
    return continuebutton;
}).then(function(continuebutton){
    let aftercontinue=continuebutton.click();
    return aftercontinue;
}).then(function(){
    let passwordbox=driver.findElement(swd.By.id("ap_password"));
    return passwordbox;
}).then(function(passwordbox){
    let filledbox=passwordbox.sendKeys("12345678");
    return filledbox;
}).then(function(){
    let signin=driver.findElement(swd.By.id("signInSubmit"));
    return signin;
}).then(function(signin){
    let signedin=signin.click();
    return signedin;
}).then(function(){
    console.log("____________________________ Signedin ____________________________________");
    let GwillBeOpendP=driver.get("https://www.amazon.in/Redmi-Note-Pro-Electric-Processor/dp/B07X2KLYSF?pf_rd_r=643521Q63D4YT4P8MKX2&pf_rd_p=d9d29f7c-4ad7-4458-9c04-e8dbfd5bee4b&pd_rd_r=a8a8c063-20f0-4e75-b22f-d30c1e6204b6&pd_rd_w=ZPnN2&pd_rd_wg=zFOjf&ref_=pd_gw_ci_mcx_mr_hp_d");
})




// .catch(function(err){
//     console.log("_____________________________"+err+"______________________________________________");
// })


