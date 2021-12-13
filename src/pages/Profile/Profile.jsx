import React, {useContext, useState} from 'react';
import stl from './Profile.module.css'
import Input from "../../components/_UI/Input/Input";
import Textarea from "../../components/_UI/Textarea/Textarea";
import Button from "../../components/_UI/Button/Button";
import Modal from "../../components/_UI/ModalWindow/Modal";
import {ProfileContext} from "../../context/context";

const Profile = () => {
    const {createProfile, setCreateProfile} = useContext(ProfileContext);

    const [posts, setPosts] = useState([]);
    const [postItem, setPostItem] = useState({title: '', body: ''});
    const [modal, setModal] = useState(false);

    const row = localStorage.getItem('person');
    const userInfo = JSON.parse(row);

    const addNewPost = (event) => {
        event.preventDefault();
        const newPost = {
            ...postItem,
            id: Date.now(),
        };
        if (postItem.title || postItem.body) {
            setPosts([...posts, newPost]);
            setPostItem({title: '', body: ''})
        }
    }

    const deletePage = () => {
        setCreateProfile({});
        localStorage.removeItem('person');
    }

    return (
        <div className={'container'}>
            <div className={stl.profileContainer}>
                <div className={stl.profilePic}>
                    <img src="/img/profilePhoto.jpg" alt="avatar"/>
                    <div style={{textAlign: 'center'}}><Button onClick={() => setModal(true)}>Удалить страницу</Button></div>
                    <Modal windowState={modal} setModal={setModal}>
                        <p style={{marginBottom: 15}}>Вы точно уверены, что хотите удалить страницу?</p>
                        <Button onClick={deletePage}>Удалить страницу</Button>
                    </Modal>
                </div>
                <div className={stl.profileInfo}>
                    <div className={'contentContainer'}>
                        <h2 className={'title'}>Информация о пользователе:</h2>
                        <div className={stl.gridContainer}>
                            <p>Имя:</p>
                            <div>{userInfo.firstName}</div>
                            <p>Фамилия:</p>
                            <div>{userInfo.lastName}</div>
                            <p>Город:</p>
                            <div>{userInfo.city}</div>
                            <p>Номер телефона:</p>
                            <div>{userInfo.phone}</div>
                        </div>
                    </div>
                    <div className={'contentContainer'}>
                        <h2 className={'title'}>Фото:</h2>
                        <p>У вас ещё нет ни одного фото</p>
                    </div>
                    <div className={'contentContainer'}>
                        <h2 className={'title'}>Посты:</h2>
                        <div className={stl.newPostForm}>
                            <Input
                                style={{marginBottom: 15}}
                                type="text"
                                placeholder={'Тема поста...'}
                                value={postItem.title}
                                onChange={event => setPostItem({...postItem, title: event.target.value})}
                            />
                            <Textarea
                                type="text"
                                placeholder={'Текст поста...'}
                                value={postItem.body}
                                onChange={event => setPostItem({...postItem, body: event.target.value})}
                            />
                            <Button onClick={addNewPost}>Создать</Button>
                        </div>
                        {posts.length === 0 && <div className={stl.postsWarning}>Здесь ещё нет постов</div>}
                        {posts.map(post =>
                            <div className={stl.postItem}>
                                <h3 className={stl.postTitle}>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;