module.exports = (sequelize, DataTypes) => {

    const Articles = sequelize.define("Articles", {
        articlegroup: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        articlelink: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        articletitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Articles;
};