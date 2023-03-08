const profile = async(req, res) => {
    return res.render('profile',{
        body : 'This is user profile page',
        title: 'User-Profile'
    });
}

module.exports = {
    profile
}