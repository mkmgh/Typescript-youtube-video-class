class YoutubeVideoClass{

    videoTitle:string;
    directedBy:string;
    cast:string;
    singer:string;
    producedBy: string;
    numberOfViews:number;
    numberOfLikes:number;
    numberOfDislikes:number;
    numberOfSubscribes:number;
    relatedVideo:string;
    
    constructor(videoTitle:string,directedBy:string,cast:string,singer:string,producedBy: string,numberOfViews:number,numberOfLikes:number,numberOfDislikes:number,numberOfSubscribes:number,relatedVideo:string){
       
        this.videoTitle = videoTitle;
        this.directedBy = directedBy;
        this.cast = cast;
        this.singer = singer;
        this.producedBy = producedBy;
        this.numberOfViews = numberOfViews;
        this.numberOfLikes = numberOfLikes;
        this.numberOfDislikes = numberOfDislikes;
        this.numberOfSubscribes = numberOfSubscribes;
        this.relatedVideo = relatedVideo; 
    } //end of constructor

    getRelatedVideo = ()=>{

        return this.relatedVideo;

    }//end of method

    getNumberOfViews = ()=>{

        return this.numberOfViews

    }

    getNumberOfLikes = ()=>{

        return this.numberOfLikes;

    }

    getNumberOfDislikes = () =>{

        return this.numberOfDislikes;

    }

    getNumberOfSubscribers = () =>{

        return this.numberOfSubscribes;

    }


}// end of class

let video1= new YoutubeVideoClass("Padmaavat: Binte Dil Video Song","Sanjay Leela Bhansali","Ranveer Singh and Jimme Shurb","Arijeet Singh","Jackie Vanjari",32275051,235000,14000,40000000,"Padmaavat: Khalibali - Ranveer Singh");

console.log(`\n 1. The title of video is "${video1.videoTitle}"`);
console.log(`\n 2. Video directed by "${video1.directedBy}"`);
console.log(`\n 3. The cast "${video1.cast}"`);
console.log(`\n 4. Singer of the song "${video1.singer}"`);
console.log(`\n 5. Video produced by "${video1.producedBy}"`);

console.log(`\n 6. The related video is "${video1.getRelatedVideo()}"`);

console.log(`\n 7. This video has been viewed by "${video1.getNumberOfViews()}" users`);

console.log(`\n 8. The likes on this video are "${video1.getNumberOfLikes()}"`);

console.log(`\n 9. The dislikes on this video are "${video1.getNumberOfDislikes()}"`);

console.log(`\n 10. The subscribers of this channels are "${video1.getNumberOfSubscribers()}"`);

