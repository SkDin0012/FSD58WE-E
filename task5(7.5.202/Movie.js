class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;

    }
    PG(Movie){
        this.rating=rating||"PG";
        return Movie.filter(movie=>movie.rating==="PG");
    }
    getPG(){
        return "Rating" +this.rating;
    }
    toString(){
        console.log(`Titile: ${this.title},\nStudio:${this.studio},\nRating:${this.rating}`);
    }
}
const MovieTime=new Movie("Casino Royale","Eon Productions","PG­13");
console.log(MovieTime.toString());



