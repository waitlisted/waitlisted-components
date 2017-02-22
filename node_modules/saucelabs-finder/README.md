# SaucelabsFinder [![NPM version][npm-image]][npm] [![Build Status][travis-image]][travis] [![Coverage Status][cover-image]][cover]

> is SauceLabs webdriver finder

## Installation
```bash
$ npm install saucelabs saucelabs-finder --save
```

# API
## finder.load(object)

Load the [webdrivers](https://saucelabs.com/rest/v1/info/platforms/webdriver) object.
Requirement to initialize of finder.

## finder.find(`api_name`,`versions`='latest',`os`=null) -> `browsers`

Return the browsers if match the arguments in loaded object.

```js
// Dependencies
var Saucelabs= require('saucelabs');
var saucelabs= new Saucelabs;
var finder= require('saucelabs-finder');

// Setup finder
saucelabs.getWebDriverBrowsers(function(error,browsers){
  if(error){throw error}
  finder.load(browsers);

  // Start
  var browsers= finder.find('chrome');
  console.log(browsers);
  // {
  //   "chrome@43": {
  //     "short_version": "43",
  //     "long_name": "Google Chrome",
  //     "api_name": "chrome",
  //     "long_version": "43.0.2357.65.",
  //     "latest_stable_version": "",
  //     "automation_backend": "webdriver",
  //     "os": "Mac 10.6"
  //   }
  // }

  var browsers= finder.find('ie','6..latest');
  console.log(browsers);
  //{
  //  "internet explorer@6": {
  //    "short_version": "6",
  //    "long_name": "Internet Explorer",
  //    "api_name": "internet explorer",
  //    "long_version": "6.0.3790.3959.",
  //    "latest_stable_version": "",
  //    "automation_backend": "webdriver",
  //    "os": "Windows 2003"
  //  },
  //  ...
  //  "internet explorer@11": {
  //    "short_version": "11",
  //    "long_name": "Internet Explorer",
  //    "api_name": "internet explorer",
  //    "long_version": "11.0.9600.17801.",
  //    "latest_stable_version": "",
  //    "automation_backend": "webdriver",
  //    "os": "Windows 2012 R2"
  //  }
  //}

  var browsers= finder.find('firefox','35,latest','Linux');
  console.log(browsers);
  //{
  //  "firefox@35": {
  //    "short_version": "35",
  //    "long_name": "Firefox",
  //    "api_name": "firefox",
  //    "long_version": "35.0.",
  //    "latest_stable_version": "",
  //    "automation_backend": "webdriver",
  //    "os": "Linux"
  //  },
  //  "firefox@38": {
  //    "short_version": "38",
  //    "long_name": "Firefox",
  //    "api_name": "firefox",
  //    "long_version": "38.0.1.",
  //    "latest_stable_version": "",
  //    "automation_backend": "webdriver",
  //    "os": "Linux"
  //  }
  //}
})
```

## finder.available(all=false) -> [api_name:{versions,platforms},...]

Return the available versions and platforms in loaded object.

```js
finder.load(browsers);
finder.available();
// {
//   "chrome":{"versions":["26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","beta","dev"],"platforms":["Linux","Mac","Windows"]},
//   "internet explorer":{"versions":["10","11","6","7","8","9"],"platforms":["Windows"]},
//   "firefox":{"versions":["10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","3.0","3.5","3.6","30","31","32","33","34","35","36","37","38","4","5","6","7","8","9","beta","dev"],"platforms":["Linux","Mac","Windows"]},
//   "safari":{"versions":["5","6","7","8"],"platforms":["Mac","Windows"]},
//   "iphone":{"versions":["4.3","5.0","5.1","6.0","6.1","7.0","7.1","8.0","8.1","8.2"],"platforms":["Mac"]},
//   "ipad":{"versions":["4.3","5.0","5.1","6.0","6.1","7.0","7.1","8.0","8.1","8.2"],"platforms":["Mac"]},
//   "android":{"versions":["4.0","4.1","4.2","4.3","4.4","5.0","5.1"],"platforms":["Linux"]},
// }
```

License
---
[MIT][License]

[License]: http://59naga.mit-license.org/

[sauce-image]: http://soysauce.berabou.me/u/59798/saucelabs-finder.svg
[sauce]: https://saucelabs.com/u/59798
[npm-image]:https://img.shields.io/npm/v/saucelabs-finder.svg?style=flat-square
[npm]: https://npmjs.org/package/saucelabs-finder
[travis-image]: http://img.shields.io/travis/59naga/saucelabs-finder.svg?style=flat-square
[travis]: https://travis-ci.org/59naga/saucelabs-finder
[cover-image]: http://img.shields.io/coveralls/59naga/saucelabs-finder.svg?style=flat-square
[cover]: https://coveralls.io/r/59naga/saucelabs-finder?branch=master