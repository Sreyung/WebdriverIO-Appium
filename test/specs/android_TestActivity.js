const { NoDriverProxyCommandError } = require("appium/build/lib/appium");
const { driverConfig } = require("appium/build/lib/cli/args");


describe('Android Activity Test', ()=>{
    it('Alert and Access an activity directly ', async ()=> {
          await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")
          await driver.pause(3000);
          expect($('//*[@text="app.AlertDialogSamples"]')).toExist();
          await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

   driver.acceptAlert();
 //driver.dismiss();
 //driver.getAlertText();
          expect($('//*[@resource-id="android:id/button1"]')).not.toExist();
        

        
         

     
    });

    it('Vertical Scrolling ', async ()=> {

        await $('~App').click();
        await $('~Activity').click();
        //more stable if you use scrollTextintoView
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")');

        //If does not work use ScrollToEnd for the element present in the bottom of the page.
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');  
       //await $('~Secure Surfaces').click();
       await expect($('~Secure Dialog')).toExist();


      
       

   
  });

  it('Horizonatal Scrolling ', async ()=> {

    await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1")
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()'); 
    await driver.pause(3000);
});

it.only('Date Picker ', async ()=> {

    

    await $('~Views').click();
    await $('~Date Widgets').click();
    await $('~1. Dialog').click();

  const currentDate =  await($('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]')).getText(); 
   await $('~change the date').click();
   await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()'); 
   await $('//*[@text="10"]').click();
  await $('//*[@resource-id="android:id/button1"]').click();
  const updatedDate =  await($('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]')).getText(); 
  expect(currentDate).not.toEqual(updatedDate);

       


});
});
