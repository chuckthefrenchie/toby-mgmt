module.exports = (sequelize, Datatypes) =>{

    const Document = sequelize.define("Document", {
        name: {
            type: Datatypes.STRING,
            allowNull: true,
            // validate: {
            //     employeeFile(){
            //         if(username){
            //             return Document.name
            //         }
            //         return ("Username Does Not Match");
            //     }
            // }
        },
        src: {
            type: Datatypes.TEXT,
            allowNull: true,
            isUrl: true
        },
    });

    Document.associate = (models) =>{
        Document.belongsTo(models.Employee, {
          foreignKey: "DocumentId"
        });
    }
    return Document;
};