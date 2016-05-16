// ## FILTERED LS (Exercise 5 of 13)
//
//   Create a program that prints a list of files in a given directory,
//   filtered by the extension of the files. You will be provided a directory
//   name as the first argument to your program (e.g. '/path/to/dir/') and a
//   file extension to filter by as the second argument.
//
//   For example, if you get 'txt' as the second argument then you will need to
//   filter the list to only files that end with .txt. Note that the second
//   argument will not come prefixed with a '.'.
//
//   Keep in mind that the first arguments of your program are not the first
//   values of the process.argv array, as the first two values are reserved for
//   system info by Node.
//
//   The list of files should be printed to the console, one file per line. You
//   must use asynchronous I/O.
//
//  ─────────────────────────────────────────────────────────────────────────────
//
//  ## HINTS
//
//   The fs.readdir() method takes a pathname as its first argument and a
//   callback as its second. The callback signature is:
//
//      function callback (err, list) { /* ... */ }
//
//   where list is an array of filename strings.
//
//   Documentation on the fs module can be found by pointing your browser here:
//   file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html
//
//   You may also find node's path module helpful, particularly the extname
//   method.
//
//   Documentation on the path module can be found by pointing your browser
//   here:
//   file:///usr/local/lib/node_modules/learnyounode/node_apidoc/path.html
//

   var fs = require('fs');
   var path = require("path");
   var file = process.argv[2];

   fs.readdir(file, function (err, contents) {

    //  var ext = path.extname(contents[1]);

     var array = undefined;

     for (var i = 0; i < contents.length; i++){
       if (path.extname(contents[i]) == 'txt')
        array.push(contents[i]);
     console.log(array);
   };

   })