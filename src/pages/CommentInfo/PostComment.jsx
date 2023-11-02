import axios from "axios";
import useAuth from "../../component/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";

const PostComment = () => {
    const { user } = useAuth();
    const [postCmt, setPostCmt] = useState([]);

    console.log(postCmt);
    const handlerPostSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const inputValue = form.post.value;
        const commentPost = {
            inputValue,
            user: user.displayName,
            image: user.photoURL,
        }
        axios.post(`${import.meta.env.VITE_API_URL}/comment_post`, commentPost)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Sports Class Added to the Dashboard',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
        console.log(commentPost);
    }

    const url = (`${import.meta.env.VITE_API_URL}/comment_post`)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPostCmt(data))
    }, [])



    return (
        <div className="mt-28 px-8">
            <form onSubmit={handlerPostSubmit}>
                <input
                    type="text"
                    name="post"
                    className="input_filed"
                    // autoFocus
                    placeholder="type..."
                />
                <input type="submit" value="Post" className="cursor-pointer"
                // onClick={handleText}
                />
            </form>

            <div className="mt-9">

                {
                    postCmt?.map((post) =>
                        <div key={post?._id} className="p-2 flex-col bg-slate-300 rounded-lg md:w-1/3 my-3">
                            <div className="flex items-center gap-3">
                                <div className="avatar offline">
                                    <div className="w-8 h-8 rounded-full">
                                        <img src={post?.post?.image} />
                                    </div>
                                </div>
                                <h2 className="text-base font-semibold">{post?.post?.user}</h2>
                                <p>{new Date(post.createdAt).toLocaleString()}</p>
                            </div>
                            {/* <div> */}
                            <span
                                style={{ wordWrap: "break-word" }}
                                className="focus:outline-none focus:bg-green-500 focus:text-slate-950 cursor-text pl-10"
                            >
                                {/* reply filed */}
                                {post?.post?.inputValue}

                            </span>
                            {/* </div> */}
                        </div>)
                }

                {/* edit flied section*/}

            </div>
        </div>
    );
};

export default PostComment;