var React = require('react');

var Form =React.createClass({
		onWeatherSubmit:function(e){
		e.preventDefault();
		var city =this.refs.city.value;
		if(typeof city ==='string' && city.length >3)
			{
				this.refs.city.value='';
				//this.props.onNewValue(formValue);
				alert(city);
			}
		else
			{
				alert("Some Error in Typing City Name");
				this.refs.city.value='';
			}
	},
	render :function(){
		return (
		<div>
			<h1>Weather Report</h1>
			<form onSubmit={this.onWeatherSubmit}>
					<div><input type="text" ref="city" placeholder="Enter City Name"/></div>
					<div><button>Get Report</button></div>
			</form>
		</div>
		);
	}
});
module.exports=Form;