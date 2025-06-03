//import React from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from "react"
//import CreatePostModal from "../../components/CreatePostModal"

function Home() {
    const navigate = useNavigate() // Hook para la navegación
    const [formData, setFormData] = useState({
        titulo: '',
        contenido: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Datos enviados:', formData);
    };
    return (
        <div className= {styles.generalPostContainer}>
            <div className={styles.imgBackRegis}></div>

            <div className={styles.PostContainer1}>
                <img className={styles.smallIcon} src='https://cdn-icons-png.freepik.com/512/11818/11818739.png?ga=GA1.1.1811276553.1739812746'
                     alt='small Icon'
                     onClick={() => navigate('/')}
                >
                </img>
            </div>
            
            <div className={styles.PostContainer2}>
                <div className = {styles.TitlePost}>
                    <p>MIS PUBLICACIONES</p>
                </div>
            </div>

            <div className={styles.postCardGeneral}>

                <form className={styles.post} 
                    onSubmit={onSubmit}>
                    
                    <div className = {styles.TitlePost}>
                        <p>Nueva publicación</p>
                    </div>
                    
                    <div>
                        <label  className = {styles.form_label}
                       
                        htmlFor="titulo">Titulo</label>
                        <input className={styles.form_input}
                            type="titulo" 
                            id="titulo"
                            name="titulo"
                            placeholder=""
                            value={formData.contenido}
                            onChange={handleChange}
                            required />
                    </div>
                    <div  >
                        <label className = {styles.form_label}
                        htmlFor="contenido">Contenido</label>
                        <input className={styles.form_input}
                            type="contenido"
                            id="contenido"
                            name="contenido"
                            placeholder=""
                            value={formData.contenido}
                            onChange={handleChange}
                            required />
                    </div>

                    <button
                        className={styles.form_button}
                        type="submit"
                        onClick={() => { location.pathname === '/login'; } }>
                        Publicar
                    </button>

                    <div className={styles.postLikeBtn}>
                    <button 
                        onClick={() => handleLikePost(postData.id)}>
                         <i class="bi bi-heart-fill"></i>
                    </button>
                    </div>
                </form>
            </div>
        </div>
        
    );
};
    
export default Home;












/*    const HomePost = () => {
        const [refreshPosts, setRefreshPosts] = useState(Date.now())
        const [showNewPostForm, setShowNewPostForm] = useState(false)
        const [posts, setPosts] = useState([])
        const dialogRef = useRef(null)
        const pageRef = useRef(null)
        const formRef = useRef(null)
    
        useEffect(() => {
            try {
                const retrivedPosts = logics.posts.getAllPosts()
                setPosts(retrivedPosts)
            } catch (error) {
                alert('ups, something is not working!')
                console.error(error)
            }
        }, [refreshPosts])
    
        const handleOutsideModalClick = (event) => {
            if (!formRef.current.contains(event.target)) {
                setShowNewPostForm(false)
            }
        }
    
        useEffect(() => {
            if (pageRef.current && showNewPostForm) pageRef.current.addEventListener("click", (event) => handleOutsideModalClick(event))
    
            if ((dialogRef.current && dialogRef.current.open) && !showNewPostForm) {
                dialogRef.current.close()
            } else if (!(dialogRef.current && dialogRef.current.open) && showNewPostForm) {
                dialogRef.current.showModal()
            }
    
            return () => {
                if (pageRef.current) pageRef.current.removeEventListener("click", handleOutsideModalClick);
            };
        }, [showNewPostForm, refreshPosts])
*/
/*
    const Post = ({ postData, setRefreshPosts, isMyPostsPage }) => {
        const navigate = useNavigate()
    
        const handleLikePost = (id) => {
            try {
                postData.toggleLike(id)
                setRefreshPosts(Date.now())
            } catch (error) {
                alert('Algo no va bien!')
                console.error(error)
            }
        }
    }

   /* return (
        <div className= {styles.generalPostContainer}>
           /* <div className={styles.PostContainer1}>
                <img className={styles.smallIcon} src = 'https://cdn-icons-png.freepik.com/512/11818/11818739.png?ga=GA1.1.1811276553.1739812746'
                    alt='small Icon'
                    onClick={() => navigate('/')}
                >
                </img>
            
            </div>
            <div className={styles.PostContainer2}>
                <div className = {styles.TitlePost}>
                <p>BIENVENIDOS</p>
                </div>
            </div>

            <div className={styles.postCardGeneral}>
                <div className={styles.postLikeBtn}>
                    <button 
                        onClick={() => handleLikePost(postData.id)}>
                         Me gusta
                    </button>
                </div>

            </div>
            
           
        </div>
    )
}

export default Home;


 /* 
  <div className={styles.postCard}
                key={post.id}
                onClick={() => navigate(`/posts/${post.id}`)}

            </div>
            <button onClick={() => handleLikePost(post.id)}>Me gusta</button>

    const handleDeletePost = (id) => {
        try {
            const isUserSure = confirm('you sure you want to delete?')
            if (isUserSure) {
            // logics.posts.deletePost(getLoggedUserId(), id)
                setRefreshPosts(Date.now())
            }
        } catch (error) {
            alert('Algo no va bien!')
            console.error(error)
        }
    }
}*/
        