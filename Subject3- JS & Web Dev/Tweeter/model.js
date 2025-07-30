export const Tweeter = function () {
    const initialPosts = [
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't worry second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
]
    let posts = JSON.parse(JSON.stringify(initialPosts));
    let postIdCounter = posts.length;
    let commentIdCounter = posts.reduce((count, post) => count + post.comments.length, 0);

    const getPosts = function () {
        return posts;
    };

    const addPost = function (text) {
        const post = {
            text: text,
            id: "p" + ++postIdCounter,
            comments: []
        };
        posts.push(post);
    };

    const removePost = function (postID) {
        const index = posts.findIndex(p => p.id === postID);
        if (index !== -1) {
            posts.splice(index, 1);
        }
    };

    const addComment = function (postID, text) {
        const post = posts.find(p => p.id === postID);
        if (post) {
            const comment = {
                id: "c" + commentIdCounter++,
                text: text
            };
            post.comments.push(comment);
        }
        else{
            console.error("Post not found for comment:", postID);
        }
    };

    const removeComment = function (postID, commentID) {
        const post = posts.find(p => p.id === postID);
        if (post) {
            const index = post.comments.findIndex(c => c.id === commentID);
            if (index !== -1) {
                post.comments.splice(index, 1);
            }
            else {
                console.error("Comment not found:", commentID);
            }
        } else {
            console.error("Post not found for comment removal:", postID);
        }
    };

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    };
};