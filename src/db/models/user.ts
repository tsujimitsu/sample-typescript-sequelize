'use strict'
module.exports = (sequelize: any, DataTypes: any) => {
  const user = sequelize.define(
    'user',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {}
  )
  user.associate = function(models: any) {
    // associations can be defined here
  }
  return user
}
