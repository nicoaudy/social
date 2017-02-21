Main = React.createClass({
	mixins: [ReactMeteorData],
    getMeteorData(){
        let data  = {};
        data.posts  = [];
        data.ads    = [];
        data.posts  = Posts.find({}, {sort: {createdAt: -1}}).fetch();
        data.ads    = DBAds.find({}, {}).fetch();
        return data;
    },
    render() {
		var adobj = {_id: 1, text: 'My first Ad', title: 'Some Company', image: 'http://placehold.it/150x150'};
		var posts = this.data.posts.map(function(post){
            return <Post key={post._id} post={post} />
        });
        return (
			<div className="col-sm-10 col-xs-11" id="main">
                <div>
                    <div className="full col-sm-9">
                        <div className="row">
                            <div className="col-sm-9">
								<Statusform />
                                {posts}
								<button className="btn btn-md">More</button>
                            </div>
                            <div className="col-sm-3">
                                <Ad ad={adobj} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
});