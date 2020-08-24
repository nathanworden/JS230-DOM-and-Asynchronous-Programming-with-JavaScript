# JS 230 Study Guide

[toc]

## The DOM

#### Summary

- The Document Object Model, or DOM, is an in-memory object representation of an HTML document. It provides a way to interact with a web page using JavaScript, which provides the functionality required to build modern interactive user experiences.
- The DOM is a hierarchy of nodes. Each node can contain any number of child nodes.
- There are different types of nodes. The types you should be familiar with are elements and text nodes.
- The whitespace in an HTML document may result in empty text nodes in the DOM.
- Useful properties of nodes include `nodeName`, `nodeType`, `nodeValue`, and `textContent`
- Nodes have properties that traverse the DOM tree: `firstChild`, `lastChild`, `childNodes`, `nextSibling`, `previousSibling`, and `parentNode`
- Element nodes have `getAttribute`, `setAttribute`, and `hasAttribute` methods to manipulate HTML attributes.
- Elements have properties that let you read and later the `id`, `name`, `title`, and `value`
- Elements let you read and change CSS classes and style properties via the `classList` and `style` properties.
- `document.getElementById(id)` finds a single Element with the specified `id`
- `document.getElementsByTagName(name)` and `document.getElementsByClassName(name)` find any Elements with the specified `tagName` or `class`
- `document.querySelector(selector)` returns the first Element that matches a CSS selector. `document.querySelectorAll(selector)` is similar but returns all matching elements.
- Elements have properties to traverse the DOM tree: `firstElementChild`, `lastElementChild`, `children`, `nextElementSibling`, and `previousElementSibling`
- You can create new DOM nodes with `document.createElement(tagName)` or `document.createTextNode(text)`
- You can create a copy of a node with `node.cloneNode(deepClone)`
- `parent.appendChild(node)`, `parent.insertBefore(node, targetNode)`, `parent.replaceChild(node, targetNode`), `element.insertAdjacentElement(positoin, newElement)` , and `element.insertAdjacentText(position, text)` add nodes to the DOM.
- `node.remove()` and `parent.removeChild(node)` remove nodes from the DOM.



## Event-Driven and Asynchronous Programming

#### Summary

- `setTimeout(callback, delay)` invokes a function after the specified number of milliseconds.
- setInterval(callback, delay)`invokes a function repeatedly in intervals of some specified number of milliseconds. `clearInterval` clears the interval and prevents future invocations of the Function.
- An event is an object that represents some occurence and contains a variety of information about what happened and where it happened. The browser triggers some events as it loads a page and when it accomplishes some actions directed by an application. The user also triggers events where he interacts with the page.
- Code that must access the DOM shoud be invoked after the `DOMContentLoaded` event fires on `document`
- User events drive most user interfaces and can result from a user interacting with the keyboard, mouse, touchscreen, window or other devices. Examples of these user events are `click`, `mouseover`, `keydown`, and `scroll`.
- Event listeners are callbacks that the browser will invoke when a matching event occurs.
- `element.addEventListener` registeres an event listener. You can also use specific `GlobalEventHandlers` like `element.onclick`, to register an event handler.
- The Event object provides the useful properties `type` `target`, and `currentTarget`
- Keyboard events have properties like `key` (and others) describes the keys the user pressed. Mouse events similarly provide `button`, `clientX`, and `clientY`.
- Events propagate in three phases: capturing, target, and bubbling.
- `event.preventDefault` prevents default browser behavior in response to an event. `event.stopPropagation` stops the current capturing or bubbling phase, which prevents the event from firing on containing or contained elements.
- Event delegation is a technique used to handle events triggered by multipled elements using a single event handler.

## Making HTTP Requests from JavaScript

#### Summary

- AJAX is a technique used to exchange data between a browser and a server without causing a page reload.
- Modern browsers provide an API called the `XMLHttpRequest` to send AJAX requests.
- Some modern application rely exclusivley on JavaScript and `XMLHttpRequest` to communicate with the server and build up the DOM. Such applications are called single page applications.
- Sending requests through `XMLHttpRequest` mainly inovled the following steps:
  - Create a new `XMLHttpRequest` object
  - Use the `open` method on the XHR object to specify the method and URL for the request.
  - Use the `setRequestHeader` method on the XHR object to set headers you'd like to send with the request. Most of the headers will be added by the browser automatically.
  - Use the `send` method on the XHR object to trigger the whole action and on POST request we can also pass serialized data as an argument.
  - Attach an event handler for the `load` event to the XHR object to handle the response.
  - Attach an even handler for the `error` event to the XHR object to handle any connection errors. This is not required but it's a good practice.
- XHR objects send asynchronous requests by default, meaning that the rest of the code continues to execute without waiting for the request to complete.
- Important properties on an XHR object are: `responseText`, `response`, `status`, and `statusText`
- The data sent along with requests, if any, must be serialized into a widely supported format.
- The three requestserialization formats in widespread use are: 1) query string/url encoding, 2) multi-part form data, 3) and JSON.
- Its good practice to send a `Content-Type` header with XHR. This helps the server parse the request data.
- Three popular response formats are: 1) HTML, 2) JSON, 3) XML.
- The single most popular seralization format currently in use is JSON.
- To submit a form via XHR, an instance of `FormData` can be used to conveniently seralize the form into multi-part data format.
- One useful property on an XHR object is `responseType`. It's particularly useful when the reponse is expected to be JSON. When its value is set to "json", the CHR object's response propert gives us parsed JSON.
- One major constraint on XHR is the browser's same-origin policy that limits communication to the same domain, the same port, and the same protocol. Any attempt to communicate outside these limits result in a security error.
  - The standard solution for cross-origin restrictions is a W3C specification called Cross-Origin Resource sharing (CORS). CORS recommends using an `Origin` header on the request and an `Access-Control-Allow-Origin` header on the response for cross-origin communications.

## jQuery



## Putting it All Together

## Advanced jQuery and Dynamic Content Creation

## New JavaScript Features



