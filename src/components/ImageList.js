import React from 'react';
import './ImageList.css';

class Images extends React.Component{

    render(){
        const images = this.props.images;        

        return(
            <div className="image-list">
                {
                    images.map(({description, id, urls}) => {
                        return <img alt={description} key={id} src={urls.regular} />                      
                    })
                }
            </div>
        );
    }
}

export default Images;
