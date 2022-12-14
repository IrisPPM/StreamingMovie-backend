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
    }


  

}
export default Query