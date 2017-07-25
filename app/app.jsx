var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory} = require('react-router');
var Main =require('Main');
var Form =require('Form');
var About =require('About');
var Example =require('Example');

ReactDOM.render(
<Router history={hashHistory}>
	<Route path='/' component={Main}>
	<Route path="about" component={About}/>
	<Route path="example" component={Example}/>
		<IndexRoute component={Form}/>
	</Route>
</Router>,
  document.getElementById('reactAdvance')
);