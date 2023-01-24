import { get } from 'mongoose'
import Movie from '../../models/Movie.js'

const Query= {
        async getMovies(){
        const Movies= await Movie.find()
        return Movies
    },
    async getMoviesById(_,{_id}){
        const Movies = await Movie.findById(_id)
        return Movies
    },

    async login( _, { email, password } ) {
        const verifyUser = await User.find( { email: email, password: password } );
        console.log(verifyUser)
        return verifyUser
    }
    //Pruebas en playground con login en el minuto 48 de la clase del 7 de dic


}
export default Query