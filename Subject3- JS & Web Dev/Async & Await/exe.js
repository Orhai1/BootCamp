//ex1
async function getUserById(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

    if (!response.ok) {
      throw new Error('User not found')
    }

    const user = await response.json()
    console.log(`Found user: ${user.name} (${user.email})`)
    return user

  } catch (error) {
    console.error('Error fetching user:', error.message)
    return null
  }
}
//tests exe1
getUserById(5)
getUserById(999)

//ex2
async function getUserWithPosts(userId) {
  try {
    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!userRes.ok) {
      throw new Error("User not found");
    }
    const user = await userRes.json();

    const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if (!postsRes.ok) {
      throw new Error("Failed to fetch posts");
    }
    const posts = await postsRes.json();
    return {
      user,
      posts
    };

  } catch (error) {
    console.error("Error fetching user or posts:", error.message);
    return null;
  }
}
//tests exe 2
(async () => {
  console.log("Valid user (5):");
  const data1 = await getUserWithPosts(5);
  console.log(data1);

  console.log("\nInvalid user (999):");
  const data2 = await getUserWithPosts(999);
  console.log(data2);
})();

//ex3
async function getDashboardData() {
  try {
    const [usersRes, postsRes, commentsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);
    if (!usersRes.ok || !postsRes.ok || !commentsRes.ok) {
      throw new Error("One or more requests failed");
    }

    const users = await usersRes.json();
    const posts = await postsRes.json();
    const comments = await commentsRes.json();


    const totalUsers = users.length;
    const totalPosts = posts.length;
    const totalComments = comments.length;
    const avgPostsPerUser = totalPosts / totalUsers;
    const avgCommentsPerPost = totalComments / totalPosts;

    const postsByUser = {};
    posts.forEach(post => {
      if (!postsByUser[post.userId]) postsByUser[post.userId] = [];
      postsByUser[post.userId].push(post.id);
    });

    const commentsByPost = {};
    comments.forEach(comment => {
      if (!commentsByPost[comment.postId]) commentsByPost[comment.postId] = [];
      commentsByPost[comment.postId].push(comment.id);
    });

    const userPostStats = users.map(user => {
      const postIds = postsByUser[user.id] || [];
      let commentCount = 0;
      postIds.forEach(postId => {
        commentCount += (commentsByPost[postId] || []).length;
      });
      return {
        name: user.name,
        postCount: postIds.length,
        commentCount: commentCount
      };
    });

    const topUsers = userPostStats
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, 3);

    const recentPosts = posts
      .sort((a, b) => b.id - a.id)
      .slice(0, 5);

    return {
      summary: {
        totalUsers,
        totalPosts,
        totalComments,
        avgPostsPerUser,
        avgCommentsPerPost,
      },
      topUsers,
      recentPosts
    };
  } catch (err) {
    console.error("Failed to fetch dashboard data:", err.message);
    return null;
  }
}

//tests exe3
(async () => {
  const dashboard = await getDashboardData();
  console.dir(dashboard, { depth: null });
})();


