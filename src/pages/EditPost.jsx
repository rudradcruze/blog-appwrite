import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import authService from "../appwrite/config";
import { useParams, useNavigate } from "react-router-dom";

function EditPost() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (slug) {
            authService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                }
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);
    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null;
}

export default EditPost;
