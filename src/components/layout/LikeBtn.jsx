import React, { useContext } from 'react';
import UserContext from '../userContext';

const LikeBtn = ({ product }) => {
    const { onLike } = useContext(UserContext)

    // let likeClass = "fa fa-2x fa-heart"
    // if (!product.like) likeClass += "-o"
    // // OR
    const likeClass = `fa-heart fa-${!product.like ? "regular" : "solid"}`
    return (
      <button className="like_btn" onClick={() => onLike(product)}>
        <i className={likeClass} />
      </button>
    );
};

export default LikeBtn;