# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What does CRUD stand for?

  Your answer: C-create, R-read, U-update, D-delete

  Researched answer: create, read, update, and delete



2. What are the 5 HTTP verbs?

  Your answer: get post put delete patch 

  Researched answer: 
    GET: The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
    
    HEAD: The HEAD method asks for a response identical to that of a GET request, but without the response body.
    
    POST: The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
    
    PUT:The PUT method replaces all current representations of the target resource with the request payload.

    DELETE: The DELETE method deletes the specified resource.
    
    CONNECT: The CONNECT method establishes a tunnel to the server identified by the target resource.

    OPTIONS: The OPTIONS method is used to describe the communication options for the target resource.
    TRACE: The TRACE method performs a message loop-back test along the path to the target resource.

    PATCH: The PATCH method is used to apply partial modifications to a resource.



3. When creating a basic (stateless) class component in React, what are the necessary elements needed to render "Hello World" on the page?

  Your answer: <div>

  Researched answer:



4. What is JSX?

  Your answer: JSX is to write HTML in javascript

  Researched answer: JSX stands for JavaScript XML. JSX is basically a syntax extension of regular JavaScript and is used to create React elements. These elements are then rendered to the React DOM. 



5. What is the difference between React state and props?

  Your answer: State is data in the component, it can be changed within the component. Props is data passed to child component and cannot be changed in the child component.
  Researched answer:
  
    State - This is data maintained inside a component. It is local or owned by that specific component. The component itself will update the state using the setState function.

    Props - Data passed in from a parent component. props are read-only in the child component that receives them. However, callback functions can also be passed, which can be executed inside the child to initiate an update.

    The difference is all about which component owns the data. State is owned locally and updated by the component itself. Props are owned by a parent component and are read-only. Props can only be updated if a callback function is passed to the child to trigger an upstream change.

    The state of a parent component can be passed a prop to the child. They are referencing the same value, but only the parent component can update it.



6. STRETCH: What is hoisting in JavaScript?

  Your answer:

  Researched answer:  Hoisting is JavaScript's default behavior of moving declarations to the top. In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared.


  



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods
- API
- event.preventDefault()
- DOM events
