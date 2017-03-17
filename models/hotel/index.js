

var Hotel = db.define('hotels', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_stars: {
        type: Sequelize.NUMBER
    },
    amenities: {
        type: Sequelize.STRING
    }
});

module.exports = Hotel;