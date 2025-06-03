//import React from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';



function Home() {

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

    return (
        <div className= {styles.generalPostContainer}>
            <div className={styles.PostContainer1}>
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
        