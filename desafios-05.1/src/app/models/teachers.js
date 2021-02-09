const db = require('../../config/db')

module.exports = {
    all(callback) {
        const query = `SELECT * FROM teachers`
        db.query(query, (err, results) => {
            if (err)
                return res.send('Database error!')
            callback(results.rows)
        })
    },
    create() {

    }
}