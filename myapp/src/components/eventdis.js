import React, { Component } from 'react';

class Eventdis extends Component {
    state={
        results:[]
    }
    componentWillMount=()=>{
        
            this.props.dispatch(searchyear(this.props.location.state.type)).then(res=>{
                this.setState({
                    results:res.payload
                })
                
            }).catch(err=>{
                console.log(err)
            })
        
    }
    render() {
        return (
            <div className="row">
                 {
             this.state.images.length>0 ?
             this.state.images.images.map((item,i)=>(
                   <div className="col-lg-6 col-sm-6 col-xs-6 col-md-6" key={i}>
                        <div className="row" id="imgBox">
                            <img src={item.images.url}/>
                             <div className="row">
                                <p>{item.name}</p>
             <p>{item.content}</p>
                            </div>   
                        </div>
                   </div>
        )):null
             
            }
            </div>
        );
    }
}

export default Eventdis;