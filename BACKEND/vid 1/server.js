var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a);
// if you prefer something other than '-' as separator
console.log(slugify('some string', ' '))  // some_string