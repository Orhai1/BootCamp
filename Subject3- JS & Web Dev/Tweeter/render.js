export const Render = function () {
  const renderPosts = function (posts) {
    const $postsContainer = $("#posts");
    $postsContainer.empty();

    posts.forEach((post) => {
      const $post = $(`
        <div class="post" data-id="${post.id}">
          <div class="post-text">${post.text}</div>
          <div class="comments"></div>
          <input type="text" placeholder="Got something to say?" class="comment-input">
          <button class="comment-button">Comment</button>
          <div class="delete" data-id="${post.id}">Delete Post</div>
        </div>
      `);

      post.comments.forEach(comment => {
        const $commentWrapper = $('<div class="comment-wrapper"></div>');
        const $deleteComment = $(`<div class="delete-comment" data-id="${comment.id}"></div>`);
        const $comment = $(`<div class="comment" data-id="${comment.id}">
                <span class="delete-comment" data-id="${comment.id}">X</span>${comment.text}
            </div>`);
        $commentWrapper.append($deleteComment, $comment);

        $post.find(".comments").append($commentWrapper);
      });


      $postsContainer.append($post);
    });
  };

  return {
    renderPosts
  };
};
