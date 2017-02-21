Profile = React.createClass({
    render() {
        return (
            <div className="row">
                <div className="col-md-2 hidden-xs" align="center">
                    Avatar
                    <div>
                        <label>
                            <div className="inputWrapper">
                                <input id="avatar" name="avatar" type="file" className="fileInput change-avatar" />
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