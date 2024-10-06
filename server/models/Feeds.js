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

    Feeds.associate = (models) => {
        Feeds.hasMany(models.Articles, {
            onDelete: "cascade",
        });
    };
    return Feeds;
};