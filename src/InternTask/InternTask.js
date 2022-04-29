import React,{useState} from 'react'
import './InternTask.css'
import data from './InternData'
import InsideContainer from './InsideContainer';
console.log("data is",data)
export default function InternTask() {
    const [EllapseButton,setEllapseButtton]=useState(true);
    function EllapseTrue(){
        setEllapseButtton(true);
    }
    function EllapseFalse(){
        setEllapseButtton(false);

    }
  return (
    <div> 
        <div className='basic'>
            {
                EllapseButton===false?<div>
                    <div><button onClick={EllapseTrue}>↮</button></div>
                </div>:""
            }
            <div><img src={data.author.avatar} width="30" height={30}></img></div>
            <div>{data.author.name}</div>
          
        </div>
        {
            EllapseButton===true?<div>
                <div  className='elapsed-container'>
            <div className='vr-line' onClick={EllapseFalse}></div>
        <div>
            <div>{data.author.text}</div>
              {
                  data.replies.map((l,i)=>{
                      return(
                          <div>
                               <InsideContainer props={l} index={i} ></InsideContainer>
                          </div>
                      )
                  })
              }
            {/* <div>{<InternTask/>}</div> */}
        </div>
        
        </div>

            </div>:""
        }
    </div>
  )
}
