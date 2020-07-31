import React, { Component } from 'react';
import {QLUserReducer} from '../redux/reducer/QLUserReducer'
import {connect} from 'react-redux';

class ListUsers extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    renderListUser = (arrUsers) => {
        return arrUsers.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                        <button type="button" className="btn btn-info mr-2">Edit</button>
                        <button type="button" className="btn btn-danger" >Delete</button>
                    </td>
                </tr>
            );
        });
    }

    render() {
        const {arrUsers} = this.props;
        return (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>No.</th>
                        <th>Full name</th>
                        <th>User name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="table-striped">
                    {this.renderListUser(arrUsers)}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        arrUsers: state.QLUserReducer.arrUsers
    }
}

export default connect(mapStateToProps, null)(ListUsers)