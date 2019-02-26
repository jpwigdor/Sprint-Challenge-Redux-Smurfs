1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map(), .filter(), and .concat()

We would use Object.assign

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

`actions` are objects that are created by `action creators`. These include a `type` property and an optional `payload` property. This is sent the the reducers.

`reducer` is a function that makes decisions on what the new state of the program should be. It compares what the current state is with what the new state will be if the `action` is implimented. Comparing the two, it always returns a new state versus updating the existing state.

The `store` houses all of the state and helps manage state in one spot versus being spread out on numerous different components for both ease of use and scalability if the project grows larger. It can be easier to expand a program with this 'single source of truth' being in one spot.


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state thats available to every component that's connected to the `store`. This is the main feature of `Redux`. Component state is only available to that component but can be passed around via props like `Vanilla React`. Component state may be useful if only a single component needs to be aware of change.

4.  What is middleware?

`Middleware` is something we can add to `Redux` which adds functionality.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` is middleware that allows us to use asyncronous functions. The `action-creators` are modified by giving access to `dispatch` which lets us decide when new actions are sent to reducers.

6.  Which `react-redux` method links up our `components` with our `redux store`?

`.connect()` connects components to the `redux store`.
