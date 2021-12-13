import React from 'react';
import stl from './PhotoGallery.module.css'
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";


const PhotoGallery = ({photos}) => {

    return (
        <div className={stl.photosContainer}>
            {photos.map(photo =>
                <ProfilePhoto
                    key={photo.id}
                    title={photo.title}
                    photo={photo.thumbnailUrl}
                    largePhoto={photo.url}
                />
            )}
        </div>
    );
};

export default PhotoGallery;