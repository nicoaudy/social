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
						<div className="col-md-6 form-group">
							<input name="first_name" placeholder="First Name" type="text" ref="first_name" className="form-control" />
						</div>					
					</div>
				</form>
			</div>
		);
	}
});