function game(guess: number[], answer: number[]): number {
    let result = 0;
    for (let i = 0; i < 3; i++) {
        if (guess[i] === answer[i]) {
            result++;
        }
    }
    return result;
};