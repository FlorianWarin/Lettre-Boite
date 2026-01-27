const mongoose = require('mongoose'); 


mongoose.connect('mongodb+srv://florianwarin05_db_user:sagisagi@lettreboite.bsrzt3s.mongodb.net/?appName=LettreBoite')
.then(() => 
    {console.log("Connection to mongoDB established")

})
.catch((err) => 
    {console.log("Connection to mongoDB failed")
})