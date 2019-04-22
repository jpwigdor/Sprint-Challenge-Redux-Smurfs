1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- .map(), .filter(), and .concat(). We would use Object.assign

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- actions: Actions are events that causes change to state. Action creators are sent to the reducers.
- reducers: Reducers take in the Action Creators to mold the previous state to the new single version of State.
- store: The store is the holder of the newest version of state for the app to base itself off of.
- The store is the 'single source of truth' because there is only a single copy of 'current' state and the store is what holds the current state for the whole application to base itself off of.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state would be state that is available for the whole application to use. Something the multiple components in the component tree to pull off of without prop-drilling. Component state is state held within just the single component.
- a good time to use component state is when only a single component cares about a particular peice of state. It would be useless to add this to the application state ('redux store') if only 1 component is using this state.

4.  What is middleware?

- `Middleware` is something we can add to `Redux` which adds functionality.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- redux-thunk lets us ass asyncronous actions into our code where vanilla redux is only syncrynous. This means that we can use things like 'promises' and pulling data from APIs. The `action-creators` are modified by giving access to `dispatch` which lets us decide when new actions are sent to reducers.

6.  Which `react-redux` method links up our `components` with our `redux store`?

- `.connect()` connects components to the `redux store`.
