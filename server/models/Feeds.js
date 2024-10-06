module.exports = (sequelize, DataTypes) => {

    const Feeds = sequelize.define("Feeds", {
        feedname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        feedcategory: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        feedlink: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Feeds;
};