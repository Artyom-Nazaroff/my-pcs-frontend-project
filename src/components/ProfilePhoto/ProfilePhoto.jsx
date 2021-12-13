import React, {useState} from 'react';
import stl from './ProfilePhoto.module.css';
import Modal from "../_UI/ModalWindow/Modal";

const ProfilePhoto = ({title, photo, largePhoto}) => {
    const [modal, setModal] = useState(false);


    return (
        <div>
            <button className={stl.imageBtn} onClick={() => setModal(true)}>
                <img src={photo} alt="photo"/>
                <p>{title.slice(0, 10)}</p>
            </button>
            <Modal windowState={modal} setModal={setModal}>
                <img src={largePhoto} alt="photo"/>
                <p>{title}</p>
            </Modal>
        </div>

    );
};

export default ProfilePhoto;