
class Binary {
    constructor(number){
        this.num = number 
        this.res = ''
       
    }
    turnIntoBinary(){
        while(this.num > 0){
             if(this.num % 2 == 0){
             this.res = '0' + this.res
         } else {
             this.res = '1' + this.res
         }
         this.num = Math.floor(this.num / 2)
        }

        console.log(this.res)
    }
}

const getInput = () => {
    let input = parseInt(document.getElementById('input').value)
    let turnInto = new Binary(input)
    console.log(input)
    turnInto.turnIntoBinary()
}
