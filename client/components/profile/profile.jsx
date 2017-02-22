Profile = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        let data = {};
        data.currentUser = Meteor.user();
        return data;
    },
    getInitialState(){
        return {
            klass:'img-circle img-responsive custom-input-file',
            editmode:false,
            email:this.data && this.data.currentUser && this.data.currentUser.emails ? this.data.currentUser.emails[0].address:'you@yourdomain.com'
        }
    },
    componentDidMount(){
        this.setState({email:this.data.currentUser ? Meteor.user().emails[0].address:''});
    },
    uploadFile(e){
        e.preventDefault();
        var that = this;
        var image;
        FS.Utility.eachFile(e, function (file) {
            Images.insert(file, function (err, fileObj) {
                Meteor.call('changeAvatar', Meteor.user(), fileObj._id);
                setTimeout(function(){
                    that.setState({klass:'img-circle img-responsive custom-input-file updated'});
                },100)
            });
        });
    },

    render() {
        return (
            <div className="row">
                <div className="col-md-2 hidden-xs">
                    <Avatar user={this.data.currentUser ? this.data.currentUser._id : ''} klass={this.state.klass} />
                    <div>
                        <label>
                            <div className="inputWrapper">
                                <input onChange={this.uploadFile} id="avatar" name="avatar" type="file" className="fileInput change-avatar" />
                            </div>
                        </label>
                    </div>
                </div>
                <div className="col-md-9 col-xs-9">
                    <h2>NicoAudy</h2>
                    <table className="table table-user-information">
                        <tbody>
                            <tr>
                                <td>Email :</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

});
