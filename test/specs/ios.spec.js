describe('Android element Test', ()=>{
    xit('test to open app', async ()=> {

    });
    
    xit('Default Search on UIkitapp', async ()=> {

       await  $('~Search').click();
      await   $('~Default').click();
        await $('//XCUIElementTypeSearchField').addValue("Sreyung");

        await $('~Clear text').click();
        await expect($('//XCUIElementTypeSearchField')).not.toHaveAttr('value');

    });

    xit('Alerts', async ()=> {

         await $('~Alert Views').click();
         await $('//*[@name="Okay / Cancel"]').click();
        const AlertTExt=    await driver.getAlertText();
         console.log(AlertTExt);
         await driver.acceptAlert();
        expect($('//*[@name="Okay / Cancel"]')).not.toExist();
 
     });
     it('Vertical Scrolling', async ()=> {

        await $('~Picker View').click();

       const redpicker =  await $('~Red color component value');
       const bluepicker =  await $('~Blue color component value');
       const greenpicker =  await $('~Green color component value');

       driver.execute('mobile:scroll',{element: redpicker.elementId,direction:"down" });

       driver.execute('mobile:scroll',{element: bluepicker.elementId,direction:"down" });
       driver.execute('mobile:scroll',{element: greenpicker.elementId,direction:"down" });

        await driver.pause(3000);
      
    });
}); 