import React from "react";

const style = {
  wrapper:{
    margin:8,
    padding: 8,
    display:"flex",
    flexDirection:"row",
    border:"1px solid grey",
    borderRadius:16
  },
  imageContainer:{},
  image:{
      width: 50,
      height: 50,
      borderRadius: 25
  },
  contentContainer:{
    marginLeft: 8,
    display:"flex",
    flexDirection:"column",
    justifycontent:"center,"
  },
  nameText:{
    color:"black",
    fontsize:16,
    fontWeight:"bold"
  },
  commentText:{
    color:"black",
    fontsize:16,
  }
};

function Comment(props){
  return(
        <div style={style.wrapper}>
          <div style ={style.imageContainer}>
            <img src="https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png-600x629.jpg"  style={style.image}/>
          </div>

          <div style={style.contentContainer}>
            <span style ={style.nameText}>{props.name}</span>
            <span style ={style.commentText}>{props.comment}</span>
          </div>
        </div>
  );
}

export default Comment;