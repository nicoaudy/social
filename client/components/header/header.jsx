import React from 'react';

Header = React.createClass({
	render() {
		return (
			<div>
				<span className="navbar-react">
					<i className="fa fa-facebook"></i>akebook
				</span>
				<div className="collapse navbar-collapse" id="navbar">
					<form role="form" id="signin" className="navbar-form navbar-right">
						<div className="input-group">
							<span className="input-group-addon">
								<i className="fa fa-user"></i>								
							</span>							
							<input type="text" ref="email" placeholder="Email Address" id="email" className="form-control" />
						</div>
						<div className="input-group">
							<span className="input-group-addon">
								<i className="fa fa-lock"></i>								
							</span>							
							<input type="password" ref="password" placeholder="Password" id="password" className="form-control" />
						</div>
						<button type="submit" className="btn btn-primary">Signin</button>
					</form>
				</div>
			</div>
		);
	}
});