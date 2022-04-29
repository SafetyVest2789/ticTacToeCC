let hashmap = {
    1: 'upperLeft',
    2: 'upperMid',
    3: 'upperRight',
    4: 'middleLeft',
    5: 'middleMid',
    6: 'middleRight',
    7: 'bottomLeft',
    8: 'bottomMid',
    9: 'bottomRight',
}

let ticTacToe = {
    upperLeft : '1',
    upperMid : '2',
    upperRight : '3',
    middleLeft : '4',
    middleMid : '5',
    middleRight : '6',
    bottomLeft : '7',
    bottomMid : '8',
    bottomRight : '9',

    printBoard(){
        console.log(`${this.upperLeft}${this.upperMid}${this.upperRight}\n${this.middleLeft}${this.middleMid}${this.middleRight}\n${this.bottomLeft}${this.bottomMid}${this.bottomRight}`)

    },

    putPiece(symbol,position){
        this[hashmap[position]] = symbol.toUpperCase()
        this.printBoard()
        this.checkWin()
    },

    resetBoard(){
        let i = 1
        for(const key in ticTacToe){
            if(typeof this[key] == 'string'){
                this[key] = i.toString()
                i++
            }
        }
    },

    checkWin(){
        if(this.upperLeft == this.upperMid && this.upperRight == this.upperMid && (this.upperLeft == 'X' || this.upperLeft == 'O')){
            console.log(`${this.upperLeft} won!`)
            this.resetBoard()
            this.printBoard()
        }else if(this.middleLeft == this.middleMid && this.middleRight == this.middleMid && (this.middleLeft == 'X' || this.middleLeft == 'O')){
            console.log(`${this.upperLeft} won!`)
            this.resetBoard()
            this.printBoard()
        }else if(this.bottomLeft == this.bottomMid && this.bottomRight == this.bottomMid && (this.bottomLeft == 'X' || this.bottomLeft == 'O')){
            console.log(`${this.upperLeft} won!`)
            this.resetBoard()
            this.printBoard()
        }else if(this.upperLeft == this.middleLeft && this.middleLeft == this.bottomLeft && (this.upperLeft == 'X' || this.upperLeft == 'O')){
            console.log(`${this.upperLeft} won!`)
            this.resetBoard()
            this.printBoard()
        }else if(this.upperMid == this.middleMid && this.middleMid == this.bottomMid && (this.upperMid == 'X' || this.upperMid == 'O')){
            console.log(`${this.upperLeft} won!`)
            this.resetBoard()
            this.printBoard()
        }else if(this.upperRight == this.middleRight && this.middleRight == this.bottomRight && (this.upperRight == 'X' || this.upperRight == 'O')){
            console.log(`${this.upperLeft} won!`)
            this.resetBoard()
            this.printBoard()
        }else if(this.upperLeft == this.middleMid && this.middleMid == this.bottomRight && (this.upperLeft == 'X' || this.upperLeft == 'O')){
            console.log(`${this.upperLeft} won!`)
            this.resetBoard()
            this.printBoard()
        }else if(this.upperRight == this.middleMid && this.middleMid == this.bottomLeft && (this.upperRight == 'X' || this.upperRight == 'O')){
            console.log(`${this.upperLeft} won!`)
            this.resetBoard()
            this.printBoard()
        } 
    }
}

ticTacToe.resetBoard()
ticTacToe.printBoard()