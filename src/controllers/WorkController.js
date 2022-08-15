const Work = require('../models/Work');

module.exports = {
    store: async (req, res) => {
        const { imdb_code, name, release_year, age_group, imdb_review } = req.body;

        const work = await Work.create({
            imdb_code,
            name,
            release_year,
            age_group,
            imdb_review
        });

        return res.status(201).json(work);
    },



}