class TicTacToe {
    constructor() {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        let count = 0;
        for (let i = 0; i<3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.board[i][j] === null) count++;
            }
        }
        return count%2 === 1 ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.board[rowIndex][columnIndex] === null) {
            this.board[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
        } else {
            return this.board[rowIndex][columnIndex];
        }
    }

    isFinished() {
        return (this.getWinner() !== null || this.isDraw() === true);
    }

    getWinner() {
        if(this.board[1][1] !== null) {
            const tic = this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2];
            const tac = this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0];
            if (tic)
                return this.board[0][0];
            else if (tac)
                return this.board[1][1];
        }
        let temp = null;
        for (let i = 0; i < 3; i++) {
            const tic = this.board[i][0] === this.board[i][1] && this.board[i][0] === this.board[i][2]
                && this.board[i][1]!== null;
            const tac = this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i]
                && this.board[1][i]!== null;

            if (tic)
                temp = this.board[i][1];
            else if (tac)
                temp = this.board[1][i];
        }
        return temp;
    }

    noMoreTurns() {
        let count = 0;
        for (let i = 0; i<3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.board[i][j] === null) count++;
            }
        }
        return(count === 0)
    }

    isDraw() {
        return (this.noMoreTurns() === true && this.getWinner() === null);
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;