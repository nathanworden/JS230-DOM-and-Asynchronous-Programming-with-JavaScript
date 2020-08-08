/*
DOM objects come in different types: Nodes, Elements, Text, and more. The Element type is further broken down into dozens of subtypes. Trying to determine the exact object type can be confusing. Here's what you need to know

 - All DOM objects are Nodes
 - All DOM objects have a type that inherits from Node, which means they all have properties and methods they inherit from Node.
  - The most common DOM object types you will use are Element and Text


  Here is what you need to remember about the different types:
   - EventTarget provides the event-handling behavior that supports interactive web applications.
   - Node provides common behavior to all nodes
   - Text and Element are the cheif subtypes of Node
         - Text nodes hold text
         - Element nodes represent HTML tags
   - Most HTML tags map to specific element subtypes that inherit from HTMLElement
   - Other element types exist, such as SVGElement and its subtypes

   Determining the Node Type

   JavaScript provides two useful ways to determine a node type: one works best in interactive console sessions using the browser's development tools, while the other works best from a program.

   The technique most useful on the console uses the toString method or the String constructor on the node; you can read the name from the display:

   p.toString();
   "[object HTMLParagraphElement]"
*/

