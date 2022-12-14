import Movie from '../../models/Movie.js'

const Mutation ={
    async createMovie(_, {input}){
        const Movies= await Movie.create(input)
        return Movies
    },
    async updateMovie(_,{input, _id}){
            return await Movie.findByIdAndUpdate(
                _id,
                input,
                {new:true}
            )
    },
    async removeMovie(_,{id}){
          await Movie.findByIdAndRemove(id)
            return await Movie.find()
    }
    
}
export default Mutation

