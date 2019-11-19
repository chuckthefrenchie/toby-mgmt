module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
  
      username: {
        type: DataTypes.STRING(140),
        unique: true
      },
      hash: DataTypes.CHAR(64)
      // salt: DataTypes.CHAR(10)
    });
  
    // User.associate = function(models) {
    //   User.hasMany(models.Employee, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return User;
  };