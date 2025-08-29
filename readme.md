1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

getElementById: IDs are always unique. getElementById(id) will return the element whose ID attribute matches the string we provide.

getElementsByClassName: The class may not be unique. getElementsByClassName(className) returns a live HTMLCollection (an array-like object) containing all elements whose class attribute matches the string we provided.

querySelector: querySelector() is a JavaScript DOM method that returns the first element that matches the CSS selector we provide. If no element is found, it returns null.

querySelectorAll: querySelectorAll() is a JavaScript DOM method that returns a static NodeList of all elements that match a given CSS selector. This NodeList does not automatically update when the DOM changes.

2. How do you **create and insert a new element into the DOM**?

There are three main ways to insert a new element into the DOM in JavaScript. Such as: 
i. Add at end
ii. Add at start
iii. Insert before reference element

Step-01: Create element
const el = document.createElement('tagName');

Step-02: Set content / attributes
el.textContent = 'Our text here'; 
el.id = 'myId';
el.className = 'myClass';
el.setAttribute('data-type', 'info');

Step-03: Insert into DOM
const parent = document.getElementById('container');
parent.appendChild(el);
parent.prepend(el); 
const ref = document.getElementById('reference');
parent.insertBefore(el, ref);

For Example
const p = document.createElement('p');
p.textContent = 'Farjana Akter Mim';
document.getElementById('container').appendChild(p);

3. What is **Event Bubbling** and how does it work?

Event bubbling is the process where an event triggered on a child element flows upward through its ancestor elements in the DOM hierarchy.
When we click on a nested element, the event fires on that element first (target), then bubbles up to its parent, then grandparent, and so on up to the document root.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Event delegation is a technique where a single event listener is set on a parent (or ancestor) element to handle events triggered by its child elements, instead of adding individual listeners to each child.
Event Delegation is useful because we don’t need to add separate event listeners to each element. We just add one listener to the parent, and when any child is clicked (or another event happens), it bubbles up to the parent. So, we don’t have to write extra code again and again. Even if new elements are added later, the event will still work.It makes the code shorter, cleaner, and faster.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault(): It stops the default action of an element from happening. For example: Clicking a link normally takes us to another page or submitting a form normally reloads the page but preventDefault() stops that.

stopPropagation(): It stops the event from bubbling up (or going down in capture phase) in the DOM tree. The event will only run on the current target, not on parents.
