import React,{useState} from 'react'
import './InternTask.css'
import data from './InternData'
//console.log("data is",data)

export default function InsideContainer(props) {
    
    // console.log("props is",props)
    const [EllapseButton,setEllapseButtton]=useState(true);

    function EllapseTrue(){
        setEllapseButtton(true);
    }
    function EllapseFalse(i){
        
        setEllapseButtton(false);

    }
  return (
    <div> 
        <div className='basic'  >
            {
                EllapseButton===false?<div>
                    <div><button onClick={EllapseTrue}>↮</button></div>
                </div>:""
            }
            <div><img src={props.props.author.avatar} width="30" height={30}></img></div>
            <div>{props.props.author.name}</div>
          
        </div>
        {
            EllapseButton===true?<div>
                <div  className='elapsed-container'>
            <div className='vr-line' onClick={()=>{EllapseFalse(props.index)}}></div>
        <div>
            <div>{props.props.author.name}</div>
            
            <div>{
                props.props.replies===undefined?"":<div>
                    {
                        props.props.replies.map((l,i)=>{
                            return (<InsideContainer props={l} />)
                        })
                    }
                </div>
                }</div>
        </div>
        
        </div>

            </div>:""
        }
    </div>
  )
}
