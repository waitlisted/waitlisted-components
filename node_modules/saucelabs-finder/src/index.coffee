# Dependencies
_= require 'lodash'

# Public
class Finder
  alias:
    ie: 'internet explorer'

  load: (browsers)->
    @browsers= _.sortBy browsers,(obj)-> parseFloat obj.short_version

    @types= {}
    for browser in @browsers
      type= browser.device ? browser.api_name
      @types[type]?= []
      @types[type].push browser

    @index= {}
    for type,browsers of @types
      versions= _.uniq _.pluck browsers,'short_version'
      oldest= _.min versions
      latest= _.max versions

      @index[type]= {versions,oldest,latest}

  find: (type,versions='latest',os=null)->
    type= @alias[type] if @alias[type]?

    found= {}
    return found unless @index[type]?

    versions= versions.split(',') if typeof versions is 'string'
    for version in versions
      [begin,end]= new String(version).split '..'
      begin= @index[type].oldest if begin is 'oldest' or begin is ''
      begin= @index[type].latest if begin is 'latest'
      end= @index[type].latest if end is 'latest' or end is ''

      for browser in @types[type]
        {api_name,short_version}= browser

        suitable=
          if end?
            parseFloat(begin)<= short_version <= parseFloat(end)
          else
            short_version is begin
        continue unless suitable

        unsuitable= os? and browser.os.indexOf(os) isnt 0
        continue if unsuitable

        found[api_name+'@'+short_version]?= browser

    found

  available: (all=no)->
    available= {}
    available[type]= {} for type in ['chrome','internet explorer','firefox','safari','iphone','ipad','android']

    for type,browsers of @types
      continue unless all or available[type]?

      machines= _.uniq (
        for os in _.uniq _.pluck browsers,'os'
          [name,version...]= os.split /\s+/
          name
      )

      available[type]?= {}
      available[type].versions= _.sortBy _.uniq _.pluck browsers,'short_version'
      available[type].platforms= _.sortBy machines

    available

module.exports= new Finder
module.exports.Finder= Finder