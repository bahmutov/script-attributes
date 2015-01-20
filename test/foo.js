(function checkFooOptions() {
  console.log('foo.js');
  console.log(checkFooOptions.toString());

  if (typeof scriptAttributes !== 'function') {
    throw new Error('Cannot find scriptAttributes');
  }

  var options = scriptAttributes('foo');
  if (options.bar !== 'baz') {
    throw new Error('Invalid bar option');
  }
}());
