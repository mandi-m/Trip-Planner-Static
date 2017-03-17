

var Restaurant = db.define('restaurants', {
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    cuisine: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    }
});

module.exports = Restaurant;