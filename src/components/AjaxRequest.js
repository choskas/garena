import React, { Component } from 'react'

export default class AjaxRequest extends Component {
    
    state = {
        something: {}
    }


    //Native ajax Request
    componentDidMount(){
        fetch('https://theapi.com/api/something')
        .then(res => res.json())
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
