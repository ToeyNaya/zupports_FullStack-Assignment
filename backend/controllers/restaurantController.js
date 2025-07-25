const db = require('../config');
const { restaurants } = require('../data/dataRestaurants');

const getRestaurants = async (req, res) => {
    const keywordRaw = req.query.q;
    const keyword = keywordRaw ? keywordRaw.trim().toLowerCase() : '';

    try {
        if (keyword) {
            const [rows] = await db.query('SELECT * FROM cache WHERE keyword = ?', [keyword]);
            if (rows.length > 0) {
                return res.status(200).json({
                    cache: true,
                    count: JSON.parse(rows[0].data).length,
                    data: JSON.parse(rows[0].data),
                });
            }

            const result = restaurants.filter(r =>
                r.name.toLowerCase().includes(keyword) ||
                r.name_en.toLowerCase().includes(keyword) ||
                r.location.toLowerCase().includes(keyword) ||
                r.location_en.toLowerCase().includes(keyword)
            );

            if (result.length === 0) {
                return res.status(204).json({ error: 'No restaurants found matching the keyword.' });
            }

            await db.query(
                'INSERT INTO cache (keyword, data) VALUES (?, ?) ON DUPLICATE KEY UPDATE data = VALUES(data)',
                [keyword, JSON.stringify(result)]
            );

            return res.json({
                cache: false,
                count: result.length,
                data: result,
            });
        }

        return res.json({
            cache: false,
            count: restaurants.length,
            data: restaurants,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching restaurants data.' });
    }
};


module.exports = { getRestaurants };