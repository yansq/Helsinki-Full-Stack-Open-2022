const dummy = (blogs) => 1

const totalLikes = (blogs) => blogs.reduce((sum, a) => sum + a.likes, 0)

const favoriteBlog = (blogs) => {
    let mostFavoriteBlog = blogs[0]
    for (let i = 1; i < blogs.length; ++i) {
        if (blogs[i].likes > mostFavoriteBlog.likes) {
            mostFavoriteBlog = blogs[i]
        }
    }
    delete mostFavoriteBlog._id
    delete mostFavoriteBlog.url
    delete mostFavoriteBlog.__v
    return mostFavoriteBlog
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}
