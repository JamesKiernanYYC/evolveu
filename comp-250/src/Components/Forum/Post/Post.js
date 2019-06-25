import React from 'react'
import './Post.css'

const Post = () => {
    return(
        <div className="postBox">
            <div className="postHeader">
                <p>Post By: Username</p>
                <p>Created On: 12/12/12</p>
            </div>
            <div className="postBody">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue erat sed porttitor gravida. Proin luctus odio libero, eu condimentum nulla porttitor sit amet. Donec quis nulla ullamcorper felis tincidunt aliquet vel sed nulla. In vulputate nulla erat, sed volutpat nisi condimentum fringilla. Curabitur vel ante ac mauris porttitor egestas sit amet cursus lectus. Praesent consectetur turpis sed faucibus maximus. Pellentesque vitae pellentesque diam, vitae aliquet elit. Aenean bibendum ipsum sit amet condimentum venenatis. Cras tempus tincidunt ligula, id fringilla leo congue quis. In hac habitasse platea dictumst. Phasellus eget aliquam purus, quis vulputate dui. Duis at imperdiet justo, eu ultrices augue. Praesent efficitur vitae ligula et euismod.
                    Proin commodo ultricies diam, consectetur gravida nunc dictum vitae. Suspendisse ut enim id leo cursus malesuada. Nulla velit erat, eleifend in imperdiet non, iaculis ac orci. Aenean euismod lacinia nisi sit amet ultricies. Donec ac dapibus sapien. Mauris volutpat consectetur erat nec molestie. Integer fermentum neque ex, quis vestibulum tortor ornare luctus. Sed hendrerit elit vel erat ornare sollicitudin. Nam pharetra nisl eget justo sodales ultrices. Praesent lectus dui, porta at posuere nec, ornare eu tortor. Nulla facilisi. Aliquam non sagittis lacus, quis pulvinar purus. Donec aliquet lobortis molestie. Suspendisse dapibus nisi id ligula venenatis, in tristique nisi faucibus. Donec id est lorem.
                    Quisque ullamcorper sagittis interdum. Mauris vulputate ullamcorper tortor, id placerat ipsum consectetur ut. Morbi quis semper tellus. Vestibulum in semper neque. Donec non orci arcu. Maecenas ut cursus est. Aenean nec erat nunc. Duis elementum augue in nibh imperdiet pretium. Proin auctor bibendum hendrerit.
                </p>
            </div>
            <div className="responseBar">
                <button>Like</button>
                <p>Likes: 2</p>
                <p>Dislikes: 2</p>
                <button>Dislike</button>
            </div>   
        </div>
    )
}

export default Post