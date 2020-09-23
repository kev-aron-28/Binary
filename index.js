// const convertir = num => {
//     let res = ''

//     while(num > 0){
//         if(num % 2 == 0){
//             res = '0' + res
//         } else {
//             res = '1' + res
//         }
//         num = Math.floor(num / 2)        
//   }

//     console.log(res)
// }

class Binary {
    constructor(number){
        this.num = number 
        this.res = ''
        this.writeResult = document.getElementById('result')

       
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

        this.writeResult.innerHTML = `<p class="res">Resultado : <pclass="res"> ${this.res} </pclass=></p>`
        setTimeout(() => {
            this.writeResult.innerHTML = ''
        }, 2000);
    }
}

const getInput = () => {
    let input = parseInt(document.getElementById('input').value)
    if(!input){
        alert('Input vacio')
    }
    let turnInto = new Binary(input)
    console.log(input)
    turnInto.turnIntoBinary()
}

  
