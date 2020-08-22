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
- Elements have properties to traverse the DOM tree: `firstElementChild`, `lastElementChild`, `children`, 



## Event-Driven and Asynchronous Programming

## Making HTTP Requests from JavaScript

## jQuery

## Putting it All Together

## Advanced jQuery and Dynamic Content Creation

## New JavaScript Features



