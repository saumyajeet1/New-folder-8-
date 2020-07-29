import React, { Component } from 'react';
import {connect} from 'react-redux'
import {update,validform, generatedata} from '../utils/formtions'
import {adddetails}  from './actions/recordactions'
import FormFields from '../utils/formfields';
import "./11.css"
import FileUpload from '../utils/fileupload'
class Gallery extends Component {

    state={
        formSuccess:false,
        formError:false,
        formdata:{
        images:{
            value:[],
            validation:{
                required:false
            },
            valid: false,
            touched: false,
            validationMessage:'',
            label:false
        }
    }
}

updateform=(element)=>{
    const newdata=update(element,this.state.formdata,'register')
    this.setState({
        formdata:newdata,
    })

}

submitform=(event)=>{
    event.preventDefault();
    const isformvalid=validform(this.state.formdata,'register')
    console.log(isformvalid)
    const data=generatedata(this.state.formdata,'register')
    console.log(this.props.user.member)
    if(true){
        this.props.dispatch(adddetails(data)).then((response)=>{
            if(response.payload.success){
             console.log('hurray')
                this.setState({
                    formSuccess:true,
                    formError:false
                })
            }
                else{
                    this.setState({
                        formError:true
                    })
                }
            }
        )}
    }
imageHandler=(images)=>{
    console.log(images)
    const newFormData={
        ...this.state.formdata
    }
      newFormData['images'].value=images;
      newFormData['images'].valid=true
      this.setState({
          formData:newFormData
      })

      console.log(this.state.formdata.images)
}

    render() {
        console.log(this.props)
        return (
            <div className="container">
            <div className='add'>
                <div className="headtitle row">
                    <h2 className="neon" style={{fontFamily:"sans serif"}}>ADD ARTWORK HERE</h2>
                </div>
              <div className="each">
              <FileUpload
                    imageHandler={(images)=>this.imageHandler(images)}
                    reset={this.state.formSuccess}/>
              </div>
            <div className="row"></div>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <div className="jumbotron">

          
            <div className="block row">
          <center>   
            <button style={{padding:"10px"}} onClick={(event)=> this.submitform(event)}>
                SUBMIT THIS INFORMATION
             </button>
                </center>
                 </div>
            </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    
       
    return{
      user:state.member,
    }
      
}

export default connect(mapStateToProps)(Gallery);