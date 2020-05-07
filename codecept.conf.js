exports.config = {
  tests: './tests/*_test.js',
  show: process.env.HEADLESS === 'true',
  output: './output',
  helpers: {
      Playwright: {
          browser: process.env.BROWSER || 'chromium',
          url: `https://www.${process.env.CODECEPT_URL}.ru`,
          show: process.env.HEADLESS === 'false',
          restart: true,
    }
  },
  include: {
    I: './steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'my-auto-e2e-tests',
    rerun: {
        minSuccess: 10,
        maxReruns: 10,
    },
    plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      
    },
  },
}
