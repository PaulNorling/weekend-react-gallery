import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList(props) {
    console.log("gallerylist!!",props)
    return (
        <div className="Gallery">
            {/* loop gallery */}
            {props.items.map(item => 
            (<GalleryItem
             key={item.id}
             item={item}
             likeClick={props.handleLikes}/>)   
            )}
        </div>
    )
}

export default GalleryList;