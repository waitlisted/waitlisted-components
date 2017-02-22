# Dependencies
finder= require '../src'
YAML= require 'yamljs'
Saucelabs= require 'saucelabs'

# Fixture
browsers= require './fixture'
zuulYaml= YAML.load __dirname+'/fixture.yml'

# Specs
describe 'API',->
  beforeAll ->
    finder.load browsers

  describe 'find',->
    it 'chrome',->
      browsers= finder.find 'chrome'
      expect(Object.keys browsers).toEqual [
        'chrome@43'
      ]

    it 'chrome 40',->
      browsers= finder.find 'chrome','40'
      expect(Object.keys browsers).toEqual [
        'chrome@40'
      ]

    it 'chrome latest',->
      browsers= finder.find 'chrome','latest'
      expect(Object.keys browsers).toEqual [
        'chrome@43'
      ]

    it 'chrome 40..',->
      browsers= finder.find 'chrome','40..'
      expect(Object.keys browsers).toEqual [
        'chrome@40'
        'chrome@41'
        'chrome@42'
        'chrome@43'
      ]

    it 'chrome oldest,latest Windows 2012',->
      browsers= finder.find 'chrome','oldest,latest','Windows 2012'
      expect(Object.keys browsers).toEqual [
        'chrome@26'
        'chrome@43'
      ]

    it 'chrome ..27',->
      browsers= finder.find 'chrome','..27'
      expect(Object.keys browsers).toEqual [
        'chrome@26'
        'chrome@27'
      ]

    it "chrome ['40..latest']",->
      browsers= finder.find 'chrome',['40..latest']
      expect(Object.keys browsers).toEqual [
        'chrome@40'
        'chrome@41'
        'chrome@42'
        'chrome@43'
      ]

    it "chrome ['40','41','42','43','latest']",->
      browsers= finder.find 'chrome',['40','41','42','43','latest']
      expect(Object.keys browsers).toEqual [
        'chrome@40'
        'chrome@41'
        'chrome@42'
        'chrome@43'
      ]

      browsers= finder.find 'chrome',['40..latest','41','42','43','latest']
      expect(Object.keys browsers).toEqual [
        'chrome@40'
        'chrome@41'
        'chrome@42'
        'chrome@43'
      ]

    it 'chrome 40..latest,dev,beta',->
      browsers= finder.find 'chrome',['40..latest','dev','beta']
      expect(Object.keys browsers).toEqual [
        'chrome@40'
        'chrome@41'
        'chrome@42'
        'chrome@43'
        'chrome@dev'
        'chrome@beta'
      ]

    it 'chrome oldest..latest,dev,beta',->
      browsers= finder.find 'chrome',['oldest..latest','dev','beta']
      expect(Object.keys browsers).toEqual [
        'chrome@26'
        'chrome@27'
        'chrome@28'
        'chrome@29'
        'chrome@30'
        'chrome@31'
        'chrome@32'
        'chrome@33'
        'chrome@34'
        'chrome@35'
        'chrome@36'
        'chrome@37'
        'chrome@38'
        'chrome@39'
        'chrome@40'
        'chrome@41'
        'chrome@42'
        'chrome@43'
        'chrome@dev'
        'chrome@beta'
      ]

  it 'available',->
    available= finder.available()
    expect(available.chrome.versions).toEqual [
      '26'
      '27'
      '28'
      '29'
      '30'
      '31'
      '32'
      '33'
      '34'
      '35'
      '36'
      '37'
      '38'
      '39'
      '40'
      '41'
      '42'
      '43'
      'beta'
      'dev'
    ]
    expect(available.chrome.platforms).toEqual [
      'Linux'
      'Mac'
      'Windows'
    ]

    available= finder.available(true)
    expect(available.opera.versions).toEqual [
      '11'
      '12'
      # (OperaDriver is unmaintained) In fact exists the 27...
    ]
    expect(available.chrome.platforms).toEqual [
      'Linux'
      'Mac'
      'Windows'
    ]

it 'Use .zuul.yml',->
  browser= zuulYaml.browsers[0]
  browsers= finder.find browser.name,browser.version
  expect(Object.keys browsers).toEqual [
    'chrome@26'
    'chrome@dev'
    'chrome@beta'
  ]

  browser= zuulYaml.browsers[1]
  browsers= finder.find browser.name,browser.version
  expect(Object.keys browsers).toEqual [
    'internet explorer@6'
    'internet explorer@11'
  ]

  browser= zuulYaml.browsers[2]
  browsers= finder.find browser.name,browser.version
  expect(Object.keys browsers).toEqual [
    'firefox@3.0'
    'firefox@3.5'
    'firefox@3.6'
    'firefox@4'
    'firefox@5'
    'firefox@6'
    'firefox@7'
    'firefox@8'
    'firefox@9'
    'firefox@10'
    'firefox@11'
    'firefox@12'
    'firefox@13'
    'firefox@14'
    'firefox@15'
    'firefox@16'
    'firefox@17'
    'firefox@18'
    'firefox@19'
    'firefox@20'
    'firefox@21'
    'firefox@22'
    'firefox@23'
    'firefox@24'
    'firefox@25'
    'firefox@26'
    'firefox@27'
    'firefox@28'
    'firefox@29'
    'firefox@30'
    'firefox@31'
    'firefox@32'
    'firefox@33'
    'firefox@34'
    'firefox@35'
    'firefox@36'
    'firefox@37'
    'firefox@38'
  ]

  browser= zuulYaml.browsers[3]
  browsers= finder.find browser.name,browser.version
  expect(Object.keys browsers).toEqual [
    'safari@5'
    'safari@6'
    'safari@7'
    'safari@8'
  ]

  browser= zuulYaml.browsers[4]
  browsers= finder.find browser.name,browser.version
  expect(Object.keys browsers).toEqual [
    'iphone@7.1'
    'iphone@8.2'
  ]

  browser= zuulYaml.browsers[5]
  browsers= finder.find browser.name,browser.version
  expect(Object.keys browsers).toEqual [
    'ipad@4.3'
  ]

  browser= zuulYaml.browsers[6]
  browsers= finder.find browser.name,browser.version
  expect(Object.keys browsers).toEqual [
    'android@5.1'
  ]
