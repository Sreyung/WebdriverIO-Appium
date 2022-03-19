describe('Android element Test', ()=>{
    xit('Find element by accessibility id', async ()=> {
          const appElement =   await $('~App');
         await appElement.click();
         const actionBar =   await $('~Action Bar');
         await expect(actionBar).toBeExisting();
    });

    xit('Find element by class name', async ()=> {

      const accessibilty =   await $('android.widget.TextView')
     console.log( accessibilty.getText());
     await expect(accessibilty).toHaveText('API Demos');
}); 

xit('Find elements by xpath', async ()=> {

  const AlertButton =   await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

  const listbutton =   await $('//android.widget.Button[@content-desc="List dialog"]').click();

  const TextView =   await $('//android.widget.TextView [@text="Command two"]').click();

  const Text =   await $('//android.widget.TextView [@text="You selected: 1 , Command two"]');
 console.log( Text);
  expect(Text).toHaveText('You selected: 1 , Command two');

});

xit('Find element UIAutomator', async ()=> {

     await $('android = new Uiselector().textContains("Alert")').click();
  
});

it('Text Field', async ()=> {

  await $('~Views').click();
  await $("//android.widget.TextView[@text='Auto Complete']").click();
  await $('//android.widget.TextView[@content-desc="1. Screen Top"]').click();
  await $('//*[@resource-id="io.appium.android.apis:id/edit"]').addValue('canada');

}); 
});