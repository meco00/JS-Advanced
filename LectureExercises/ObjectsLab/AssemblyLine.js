function createAssemblyLine(){

    return {
        hasClima(parameter)       
        {
            parameter.temp=21,
            parameter.tempSettings=21,
            parameter.adjustTemp = function() {
                if(parameter.temp < parameter.tempSettings){
                    parameter.temp++;
                }
                else if(parameter.temp > parameter.tempSettings)
                {
                    parameter.temp--;
                }
            }

        },
        hasAudio(parameter){
            parameter.currentTrack= { 
                name : null,
                artist : null
            },
            parameter.nowPlaying = function(){
                if(this.currentTrack.name && this.currentTrack.artist){

                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            }
        },
        hasParktronic(parameter){
            parameter.checkDistance = function(distance){
              let message='';
              if(distance<0.1){
                  message='Beep! Beep! Beep!';
              }
              else if(distance>=0.1&&distance<0.25)
              {
                message='Beep! Beep!';
              }
              else if(distance>=0.25&&distance<0.5)
              {
                message='Beep!';
              }

               console.log(message);

            }
        }

    }


}


const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};


assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);


console.log(myCar);