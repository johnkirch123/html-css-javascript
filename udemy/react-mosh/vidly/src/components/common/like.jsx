import React from 'react';

const Like = ({liked, onClick}) => {
  let classes = "fa-heart";
  (liked) ? classes += " fas" : classes += " far";
  return ( 
    <i onClick={onClick} style={{cursor: 'pointer'}} className={classes}></i>
  );
  
}
 
export default Like;