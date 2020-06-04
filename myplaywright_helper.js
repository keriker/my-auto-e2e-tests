const { Helper } = codeceptjs;
const { chromium } = require('playwright');
const errors = [];

class Myplaywright extends Helper {
    page() {
        return this.helpers.Playwright.page;
    }
  // before/after hooks
  /**
   * @protected
   */
  _before() {

  }

  /**
   * @protected
   */
  _after() {
      page().on("pageerror", function(err) {
          console.log(`Page error:  ${err}`);
      });
  }

    async goBack(){
     await this.page().goBack();
  };


    // async amOnPage(url) {
    //     await this.page().goto(url);
    //     const [error] = await Promise.all([
    //         this.page().waitForEvent('pageerror')
    //     ]);
    //     console.log(error);
    // };
}

module.exports = Myplaywright;
