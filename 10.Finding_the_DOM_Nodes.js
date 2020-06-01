<!doctype html>
<html lang="en-US">
  <head>
    <title>On the River</title>
  </head>
  <body>
    <h1>On The River</h1>
    <p>The sun is low</p>
    <p>The waters flow</p>
    <script>
      var pElements = [];
      function walk(node, callback) {
        callback(node);

        var i;
        for (i = 0; i < node.childNodes.length; i += 1) {
          walk(node.childNodes[i], callback);
        }
      }

      walk(document, function(node) {
        if (node.nodeName === 'P') {
          pElements.push(node);
        }
      });

      console.log(pElements);
    </script>
  </body>
</html>