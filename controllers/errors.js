exports.got404Error = (req, res, next) => {
    // render looks for 404.ejs in ./views/404.ejs, also add object as options for dynamic variables
    res.status(404).render('404', {
        pageTitle: 'Page Not Found',
        errorMessage: 'Wanted page could not be located',
        path: ""
    });
};
