import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

class Images extends React.Component{

    render(){
        const images = this.props.images;        

        return(
            <div className="image-list">
                {
                    images.map(image => {
                        return <ImageCard image={image} key={image.id} />
                    })
                }
            </div>
        );
    }
}

export default Images;
