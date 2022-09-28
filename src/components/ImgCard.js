import React from "react";
const ImgCard=(props)=>{
   
return(
    <>
        
 
        {/* <div className="grid gird-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 d-flex justify-content-center flex-column "> */}
        {/* <div className="row ">
             <div className="col-md-3 pt-3 pt-lg-0 pl-5 order-2 order-lg-1 d-flex justify-content-center flex-column ">
        <div className="cards pl-5">
       <div className="card ">
        <img class="rounded float-left" style={{width:300, height:200}} src={props.data.urls.full}
            alt={props.data.user.name}
          />
         </div>
        </div>
        </div>

        </div> */}
       
         <div className="column-10 mx-auto ">
      
        <div className="grid gird-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-content-center">
        <div className="cards" style={{marginLeft:20, marginTop:20}}>
        <div className="card">
           <img className="rounded float-left" style={{width:300, height:300}} src={props.data.urls.full}
            alt={props.data.user.name}/>

        </div>
        </div>
        </div>
        </div>
     
    </>
);
}

export default ImgCard;