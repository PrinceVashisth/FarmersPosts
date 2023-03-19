const mongoose = require('mongoose');
const DB = "mongodb+srv://vashisthprince9:CZjGf6zFxQX86PxY@cluster0.76qlqpb.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB)
.then((result) => {
 console.log('connection sucessfull');   
}).catch((err) => {
    console.log(err);
});