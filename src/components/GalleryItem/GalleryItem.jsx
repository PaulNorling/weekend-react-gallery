import {useState} from 'react';

function GalleryItem(props) {
    
    const [isImageClicked, setIsImageClicked] = useState(false);
    
    const likeClick = () => {
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
      {/* image description toggle */}
      <div onClick={() => setIsImageClicked(!isImageClicked)}>
        {isImageClicked ? 
          <div class="description">{props.item.description}</div> :
          <div class="img-holder"> <img class="img" src={props.item.path}/></div>
        }
      </div>
      <div>
        <button class="LikeButton"onClick={likeClick}>Like</button>
        <div>{likeCount(props.item.likes)}</div>
      </div>
    </div>
    )
}
export default GalleryItem;