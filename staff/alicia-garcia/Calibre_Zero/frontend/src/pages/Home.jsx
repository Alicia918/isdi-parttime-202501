
import React from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from "react"
import callServer from '/logic/index';
//import CreatePostModal from "../../components/CreatePostModal"

function Home() {
    const navigate = useNavigate() // Hook para la navegación
    const [posts, setPosts] = useState([]); // Estado para almacenar las publicaciones
    const [formData, setFormData] = useState({
        titulo: '',
        contenido: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    // Manejar el envío del formulario
    const onSubmit = (e) => {
        e.preventDefault();// Evita que la página se recargue
        console.log('Datos enviados:', formData); //Muestra los datos en la consola

        // Aquí llamar función que envia datos al servidor
        callServer(formData, (error, response) => {
            if (error) {
                console.error('Error al enviar los datos:', error);
                return;
            } // else callServer get posts
            console.log('Respuesta del servidor:', response);

        // Crea un nuevo bloque con los datos del formulario
        const newPost = {
            titulo: formData.titulo,
            descripcion: formData.descripcion,
        };


        // Agrega la nueva publicación al estado `posts` (falta un get)
        setPosts([newPost,
          /* setPosts((prevPosts) => [
                { titulo: response.titulo, contenido: response.contenido },
                ...prevPosts,*/
                console.log('Publicación exitosa:', response),
            ]);
            setFormData({ titulo: '', descripcion: '' }); // Limpia el formulario
        });     
       
    };
    
    return (
        <div className= {styles.generalPostContainer}>
            <div className={styles.imgBackRegis}></div>

            <div className={styles.PostContainer1}>
                <img src="precision_icon.png"
                    className="flex justify-center items-center h-auto cursor-pointer w-15 mt-5 left-3 absolute" 
                    style={{ filter:'brightness(0) saturate(100%) invert(53%) sepia(82%) saturate(749%) hue-rotate(-16deg) brightness(101%) contrast(101%)',
                    }}
                     onClick={() => navigate('/')}
                >
                </img>
            </div>
            
            <div className={styles.PostContainer2}>
                <div className = 'flex flex-col items-center text-gray-200 text-xl uppercase'
                    style={{ color: '#2c2c2c', fontFamily: 'Montserrat' }}>
                    <p>MIS PUBLICACIONES</p>
                </div>
            </div>

            <div className= 'flex flex-col items-center gap-2 rounded-lg m-auto'>

                <form className={styles.post} 
                    onSubmit={onSubmit}>

                    <div className = 'flex flex-col items-center text-teal-900 text-xl uppercase'>

                        <p>Nueva publicación</p>
                    </div>
                    
                    <div>
                        <label  className = {styles.form_label} htmlFor="titulo">Titulo</label>
                        <input className={styles.form_input}
                            type="text" 
                            id="titulo"
                            name="titulo"
                            placeholder="Escribe un título"
                            value={formData.titulo}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div  >
                        <label className = {styles.form_label}
                        htmlFor="descripcion">Descripcion</label>
                        <input className={styles.form_input}
                            type="text"
                            id="descripcion"
                            name="descripcion"
                            placeholder="Escribe una descripción"
                            value={formData.descripcion}
                            onChange={handleChange}
                            required 
                        />
                    </div>

                    <button
                        className={styles.form_button}
                        type="submit"
                        onClick={onSubmit}>
                        Publicar
                    </button>                   
                </form>

                <div className={styles.postCard}>
                    <div className={styles.publishPost}>
                        {posts.map((post, index) => (
                            // chequea post es null
                            post && (
                                <div key={index}>
                                    <p>{post.titulo}</p>
                                    <p>{post.descripcion}</p>
                                </div>
                            )
                            ))
                        }
                    </div>
                
                    <div className={styles.postLikeBtn}>
                        <button 
                            onClick={() => handleLikePost(postData.id)}>
                            <i class="bi bi-heart-fill"></i>
                        </button>
                    </div>              
                </div>
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
        