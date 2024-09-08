const {User, Post} = require("./models");

async function deleteRecords() {
 await User.destroy({
    where: {
        id: 2
    
    }
 });

}

deleteRecords();