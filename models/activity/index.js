

var Activity = db.define('activities', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age_range: {
        type: Sequelize.STRING
    }
});

module.exports = Activity;