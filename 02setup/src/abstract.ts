abstract class TakePhotos {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        //some complex calculation
        return 8
    }
}


class Instagrams extends TakePhotos{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
        ){
            super(cameraMode, filter)
        }

        getSepia(): void {
            console.log("Sepia");
            
        }
        // getReelTime(): number {
        //     return 4
        // }
}

const hc = new Instagrams("test", "Test", 3)
// const hc = new TakePhoto("test", "Test") this will throws the error

hc.getReelTime()
