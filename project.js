
        const prompt = require("prompt-sync")();

            const deposit = () => {
                while(true) {
                    const depositAmount = prompt("Enter deposit amount: ");
                const depositNumber = parseFloat(depositAmount);
            
                if (isNaN(depositNumber) || depositNumber <= 0) {
                    console.log("Invalid amount, try again.");
                } else {
                    return depositNumber
                }
                }
                
            }

            const getNumberOfLines = () => {
                while(true) {
                    const lines = prompt("Enter number of lines: ");
                const numberOfLines = parseFloat(lines);
            
                if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
                    console.log("Invalid number of lines, try again.");
                } else {
                    return numberOfLines
                }
                }
                
            }

            const getBet = (balance, lines) => {
                while(true) {
                    const bet = prompt("Enter bet per line: ");
                const numberBets = parseFloat(bet);
            
                if (isNaN(numberBets) || numberBets <= 0 || numberBets > balance / lines) {
                    console.log("Invalid bet, try again.");
                } else {
                    return numberBets
                }
                }
                
            }



        let balance = deposit();
        const numberOfLines = getNumberOfLines();
        const numberBet = getBet(balance, numberOfLines);
        console.log(balance);
        console.log(numberOfLines);
        console.log(numberBet);
