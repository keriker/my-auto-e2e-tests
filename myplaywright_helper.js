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
      this.err = null;
      this.helpers.Playwright.page.on("pageerror", (e) => this.err = e);


  }

  /**
   * @protected
   */
  _after() {
      if (this.err) throw new Error(`Browser JS error ${this.err}`);

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
