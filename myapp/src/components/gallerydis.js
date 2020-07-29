import React, { Component } from 'react';
import {allgallery} from "./actions/recordactions"

import {connect} from 'react-redux'
import ImageGallery from 'react-image-gallery';
class GalleryDis extends Component {
    state={
        images:[],
        original:[],
    }
    componentWillMount=()=>{
        this.props.dispatch(allgallery()).then(res=>{

            this.setState({
                images:res.payload
            })
            this.state.images.map((item,i)=>{
                this.state.original.push(item.images[0])
            })
            this.state.original.splice(0,1)
            
            console.log(this.state.original)
        }).catch(err=>console.log(err))
    }
    render() {
        return (
            
            <ImageGallery items={this.state.original} />
        );
    }
}


const mapStateToProps=(state)=>{
    
       
    return{
      record:state.record,
    }
      
}
export default connect(mapStateToProps)(GalleryDis);