const { driverConfig } = require("appium/build/lib/cli/args");

describe('ios element Test', ()=>{
    it('test to open app', async ()=> {
         await $('//*[@name ="Create list"]').click();
         await $('//*[@value ="List Name"]').addValue("To do today");
         await $('~Create').click();

          expect( $("~To do today")).toBeExisting();

         await $("~To do today").click();

         await $('//*[@name ="Create item"]').click();
         await $('//*[@value ="Title"]').addValue("buy shoes");
         await $('//*[@value ="Due"]').click();
        await  driver.pause(3000)
         await $('//*[@name="18"]').click();
         await $('//XCUIElementTypeWindow[@index=2]').click();
         await $('~Create').click();
      
         await expect($("~buy shoes")).toBeExisting();
         await expect($("~Due March 18,2022")).toBeExisting();

    });  
  });

