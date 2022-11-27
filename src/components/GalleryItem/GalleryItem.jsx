import {useState} from 'react';

function GalleryItem(props) {
    
    const [isImageClicked, setIsImageClicked] = useState(false);
    
    const likeHandle = () => {
        props.likeClick(props.item)
    }
    // like count display conditional render
    const likeCount = (like) => {
        switch(like) {
            case 0:
              return "nobody likes!"
            case 1:
              return "1 person likes"
            default:
              return `${like} people like`
        }
    }

    return(
    <div  className="GalleryItem">
      <div onClick={() => setIsImageClicked(!isImageClicked)}>
        {isImageClicked ? 
          <div className="description">{props.item.description}</div> :
          <div className="img-holder"> <img className="img" src={props.item.path}/></div>
        }
      </div>
      <div>
        <button className="LikeButton"onClick={likeHandle}>Like</button>
        <div>{likeCount(props.item.likes)}</div>
      </div>
    </div>
    )
}
export default GalleryItem;