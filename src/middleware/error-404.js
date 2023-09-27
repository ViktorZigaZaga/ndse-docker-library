module.exports = ((req, res) => {
    res.render('../src/views/errors/404', {
        title: '404'
    })
});