import React,{useState,useRef} from 'react'
import './InternTask.css'
import data from './InternData'
console.log("data is",data)
// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

export default function InsideContainer(props) {
    var myRef=useRef(null)
    
    // console.log("props is",props)
    const [EllapseButton,setEllapseButtton]=useState(true);

    function EllapseTrue(){
        setEllapseButtton(true);
    }
    function EllapseFalse(i){
        scrollToRef(myRef+id)
        // var id=document.getElementById("container"+i)
        // window.scrollTo({
        //     top:id.offsetTop,
        //     behavior:"smooth"
        // });
        setEllapseButtton(false);

    }
  return (
    <div> 
        <div className='basic' id={"contaner"+props.index} >
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
                            return (<InsideContainer props={l} index={i}/>)
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
