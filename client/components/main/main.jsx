Main = React.createClass({
	render() {
		return (
			<div className="col-sm-10 col-xs-11" id="main">
                <div>
                    <div className="full col-sm-9">
                        <div className="row">
                            <div className="col-sm-9">
								<Statusform />
								Posts
								<button className="btn btn-md">More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
});