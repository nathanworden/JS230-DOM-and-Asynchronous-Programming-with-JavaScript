// Cross-Domain XMLHttpRequests with CORS

// The scheme, hostname, and port of a web page's URL define its origin. A cross-origin request occurs when the page tries to access a resource from a different origin.

// CORS - Cross Origin Resource Sharing
// Defines how the browser and server must communicate when accessing resources across origins.
// The idea behind CORS is to let the two systems know enough about each other to detemine whether the response should succeed or fail. Applications use custom HTTP request and response headers to implement this mechanism.

// According to the specification, every XMLHttpRequest sent by the browser must have an Origin header that contains the origin of the requesting page. The server uses this header to determine whether it should send a corresponding header in the response.

// The browser automatically adds the Origin header as part of an XHR. For example, if we send an XHR from a page hosted at httpL//localhost:8080, the browser adds the following request header:

//  Origin: http://localhost:8080

