var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');
var Login = require('./components/Login.jsx');

ReactDOM.render(<Login />, document.getElementById('mainBody'));
ReactDOM.render((<div><h2>Ingredient List</h2><List /></div>), document.getElementById('ingredients'));

