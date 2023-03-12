const dummy = (blogs) => 1

const totalLikes = (blogs) => {
    return blogs.reduce((sum, a) => sum + a.likes, 0)
}

module.exports = {
    dummy,
    totalLikes
}
