(function initScriptAttributes(root) {
  'use strict';

  function namedNodeMapToObject(map) {
    var result = {};
    Array.prototype.forEach.call(map, function (attr) {
      result[attr.name] = attr.value;
    });
    return result;
  }

  function getScriptAttributes(name) {
    if (!name) {
      throw new Error('script-attributes is missing name');
    }
    var scriptEls = document.getElementsByTagName('script');
    var found;
    Array.prototype.some.call(scriptEls, function (script) {
      if (script.attributes.name && script.attributes.name.value === name) {
        found = namedNodeMapToObject(script.attributes);
        return true;
      }
    });
    return found;
  }

  root.scriptAttributes = getScriptAttributes;
}(this));
