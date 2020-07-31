import React, { Component } from 'react'
import FormUser from './FormUser'
import ListUsers from './ListUsers'

export default class QLUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="container">
                <FormUser />
                <ListUsers />
            </div>
        )
    }
}
