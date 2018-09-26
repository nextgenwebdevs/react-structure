import React, { Component } from 'react'
import './Member.css'

class MembersListing extends Component{
    constructor(props){
        super(props);

        this.state = {
            members:[
                {
                    id:1,
                    name:'First Member'
                },
                {
                    id:2,
                    name:'Second Member'
                },
                {
                    id:3,
                    name:'Third Member'
                }
            ]
        };
    }
    membersList(){
        return this.state.members.map(member => {
            return (<li>
                <a href={`/member/${member.id}`} >{member.name}</a>
            </li>);
        });
    }
    render(){
        return (
            <ul>
                {this.membersList()}
            </ul>
        );
    }
}

export default MembersListing;