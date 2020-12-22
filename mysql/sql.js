//sql.js
// SQL语句封裝
var music = {
    insert: 'INSERT INTO music(id, name, musicurl) VALUES(?,?,?)',
    update: 'UPDATE music SET name=?, musicurl=? WHERE id=?',
    delete: 'DELETE FROM music WHERE id=?',
    queryById: 'SELECT * FROM music WHERE id=?',
    queryAll: 'SELECT * FROM music'
};
module.exports = music;