var React = require('react');
var {Link,IndexLink} =require('react-router');

var Nav =React.createClass({
	render :function(){
		return (
		<div>
			<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:"bold"}}>GET Weather</IndexLink>
			<IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight:"bold"}}>About</IndexLink>
			<IndexLink to="/example" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Example</IndexLink>
		</div>
		);
	}
});
module.exports=Nav;
/* 
{Using this activeClassName and activeStyle attribute will not remove ,if you are moving to the next link So we Will use IndexLink}
			<Link to="/" activeClassName="active" activeStyle={{fontWeight:"bold"}}>GET Weather</Link>
			<Link to="/about" activeClassName="active" activeStyle={{fontWeight:"bold"}}>About</Link>
			<Link to="/example" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Example</Link> */