import { Schema,model } from "mongoose"

const movieSchema = new Schema( {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },  
    image:{
        type: String,
        required: true
    }, 
    date: {
        type: String,
        required: true
    },  
    typeMovie: {
        type: String,
        
    }
} );

export default model("Movie", movieSchema)