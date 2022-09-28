import React from "react";
import  ImgCard from './ImgCard'
const ImgData=(props)=>{
    const ImgList=props.imagelist.map((data,index)=>{
            return <ImgCard key={data.id} data={data}/>
    })
    console.log(ImgList)
return(
    <>
       
            {ImgList}
     
    </>
);
}

export default ImgData;