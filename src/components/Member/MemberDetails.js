import React, { Component } from 'react'
import './Member.css'
import Button from './../../ui/NavButton/NavButton'

class MemberDetails extends Component{
    constructor(props){
        super(props);

        this.state = {
            details:{
                id:1,
                name:'First Member',
                age:23,
                phoneNumber:'9876543210',
                email:'test@example.com'
            }
        };
    }
    render(){
        return (
            <div>
                <h3>Member Details</h3>
                <h4>{this.state.details.name}</h4>
                <h4>{this.state.details.age}</h4>
                <h4>{this.state.details.phoneNumber}</h4>
                <h4>{this.state.details.email}</h4>
                <Button name='<- Back to list' link={`/members`} />
            </div>
        );
    }
}

export default MemberDetails;