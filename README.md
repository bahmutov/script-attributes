# script-attributes

> Pass options to the JavaScript using script attributes

[![NPM][script-attributes-icon] ][script-attributes-url]

[![Build status][script-attributes-ci-image] ][script-attributes-ci-url]
[![dependencies][script-attributes-dependencies-image] ][script-attributes-dependencies-url]
[![devdependencies][script-attributes-devdependencies-image] ][script-attributes-devdependencies-url]

Available on npm and bower under name `script-attributes`.

## Use

Include before your scripts, then call `scriptAttributes` to get options for script tag with the given name

```html
<script src="node_modules/script-attributes/script-attributes.js"></script>
<script src="test/foo.js" name="foo" bar="baz"></script>
```

Inside `foo.js`

```js
var options = scriptAttributes('foo');
console.log(options.bar); // "baz"
```

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/script-attributes/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[script-attributes-icon]: https://nodei.co/npm/script-attributes.png?downloads=true
[script-attributes-url]: https://npmjs.org/package/script-attributes
[script-attributes-ci-image]: https://travis-ci.org/bahmutov/script-attributes.png?branch=master
[script-attributes-ci-url]: https://travis-ci.org/bahmutov/script-attributes
[script-attributes-dependencies-image]: https://david-dm.org/bahmutov/script-attributes.png
[script-attributes-dependencies-url]: https://david-dm.org/bahmutov/script-attributes
[script-attributes-devdependencies-image]: https://david-dm.org/bahmutov/script-attributes/dev-status.png
[script-attributes-devdependencies-url]: https://david-dm.org/bahmutov/script-attributes#info=devDependencies
