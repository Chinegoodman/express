const post = require('./post');
const deletefn = require('./delete');
const put = require('./put');
const get = require('./get');
module.exports = (app) => {
    // app.use('/post', post);
    // app.use('/delete', deletefn);
    // app.use('/put', put);
    // app.use('/get', get);
    app.use(post, deletefn, put, get);
}