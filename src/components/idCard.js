import React, { component } from 'react'
export class IdCard extends React.Component {

    constructor(props){
        super(props)
    }
    

    render() {

        return(
            <div class="row idCard" >
                <div class="col-md-3">
                    <img src={this.props.picture} />
                </div>
                <div class="col-md-9">
                <div class="item"><b>First Name:</b>{this.props.firstName}</div>
                <div class="item"><b>Last Name:</b>{this.props.lasttName}</div>
                <div class="item"><b>Gender:</b>{this.props.gender}</div>
                <div class="item"><b>Heigth:</b>{this.props.heigth}</div>
                <div class="item"><b>Birth:</b>{this.props.birth.toString()}</div>
                </div>
            </div>
        )
    }
}

export default IdCard;