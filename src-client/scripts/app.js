const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');

const {HomeView, CardView } = require('./main-view');

ReactDOM.render(<HomeView />, document.querySelector("#app-container"));

const AppRouter = Backbone.Router.extend({
  routes: {
    ""       : "showHomePage",
    "/splash": "showSplashPage",
    "/signup": "showSignUpPage"
  },

  _showHomePage: function(){
    ReactDOM.render(<HomeView />, document.querySelector("#app-container"));
  },
  _showSplashPage: function(){
    ReactDOM.render(<SplashView />, document.querySelector("#app-container"));
  },
  _showSignUpPage: function(){
    ReactDOM.render(<SignUpView />, document.querySelector('#app-container'));
  },

  initialize: function(){
    Backbone.history.start();
  }
})

new AppRouter()
