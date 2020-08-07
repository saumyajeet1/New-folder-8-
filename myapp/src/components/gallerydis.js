import React, { Component } from 'react';
import {allgallery} from "./actions/recordactions"

import {connect} from 'react-redux'
import ImageGallery from 'react-image-gallery';
class GalleryDis extends Component {
    state={
        images:[],
    }
    componentWillMount=()=>{
        this.props.dispatch(allgallery()).then(res=>{

            this.setState({
                images:res.payload
            })
            console.log(this.state.images)
        }).catch(err=>console.log(err))
    }
    render() {
        return (
        <div>
            {
             this.state.images.length>0 ?
             this.state.images.images.map((item,i)=>(
                   <div className="row" key={i}>
                        <div className="row" id="imgBox">
                            <img src={item.images.url}/>
                             <div className="row">
                                <p>{item.name}</p>
                            </div>   
                        </div>
                   </div>
        )):null
             
            }
        </div>
        );
    }
}


const mapStateToProps=(state)=>{
    
       
    return{
      record:state.record,
    }
      
}
export default connect(mapStateToProps)(GalleryDis);