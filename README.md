# a react apple pie test

I was listening to [a podcast](https://devchat.tv/js-jabber/194-jsj-javascript-tools-fatigue) this morning and a couple of the points raised, particularly in React's direction (in reponse to "that blog post"), was the time it takes to get set up (a week!?) and source maps!? So...being a React fanboi, I was interested in how long it really takes (granted I've done it a few times before...). The only criteria was to be honest (as possible ;-)) and to type everything out by hand at a reasonable speed. Which means I cheated on the index.html and webpack.config a little...anyways...I started my stopwatch (paused to write notes) and this is my log.

## the timeline

### 1st minute

* git cloned,
* npm init (followed steps)

### 4th minute

* npm installed (a significant chunk of the time :-( )

```javascript
npm i babel-cli babel-core babel-loader babel-preset-es2015 babel-preset-react eslint eslint-config-airbnb eslint-plugin-react mocha react react-dom webpack react-component-tester assert -SD
```

### 7th minute

* .babelrc created
* .eslintrc created

### 15th minute

* webpack set up
* built (add scripts and run)
* hello universe on screen

### 16th minute

* linting script set up,
* fixed missing semi-colon, oops

### 22nd minute

* set up test scripts
* added basic test

### 23rd minute

* pushed to git