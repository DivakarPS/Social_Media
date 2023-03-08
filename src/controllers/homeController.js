const home = async (req, res) => {
    return res.render('home',{
        title: "HOME"
    });
}

const UserHome = async (req, res) => {
    return res.render('home',{
        title: 'User-Home'
    });
}

module.exports = {
    home,
    UserHome
}