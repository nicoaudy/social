Signupform = React.createClass({
	render() {
		return (
			<div className="row">
				<div className="signup">
					<h1>Sign Up</h1>
					<p className="text-muted">
						Its free and always will be
					</p>
				</div>
				<form>
					<div className="col-md-9">
						<div className="row">
							<div className="col-md-6 form-group">
							<input name="first_name" placeholder="First Name" type="text" ref="first_name" className="form-control" />
							</div>							
							<div className="col-md-6 form-group">
								<input name="last_name" placeholder="Last Name" type="text" ref="last_name" className="form-control" />
							</div>	
						</div>										
						<div className="form-group">
							<input name="email" placeholder="Email Or Mobile Number" type="text" ref="email" className="form-control" />
						</div>							
						<div className="form-group">
							<input name="password" placeholder="Password" type="password" ref="password" className="form-control" />
						</div>			
						<button type="submit" className="btn btn-md btn-success">Signup</button>		
					</div>
				</form>
			</div>
		);
	}
});