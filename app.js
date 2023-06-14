let keys = document.querySelectorAll('.key')
let displayInput = document.querySelector('.input')
let displayOutput = document.querySelector('.output')

// setting up the keys to be displayed on click


let input = ''
        for (let symbol of keys) {
            
            symbol.addEventListener('click', () => {
                let value = symbol.dataset.key; //retrives the value from (data-key attribute) in the html element
                
                
                if (value === '=') {
                    let result = eval(displayInput.value)
                    displayOutput.value = result
                    
                } else if(value === 'delete'){
                    // deletes one item per click in the input field
                    displayInput.value = displayInput.value.slice(0,-1)
                    
                } else if(value === 'reset') {
                    // clears the input and output field
                        displayInput.value = ''
                        displayOutput.value = ''
                    

                }
                
                else{
                    
                    if (validateInput(value)) {
                        input = value;
                        displayInput.value += input;
                        
                    }
                    
                }
                    
            });
        }
// function that prevents repitition of operation symbols
function validateInput(value) {
    let lastInput = displayInput.value.slice(-1);
    let operators = ['+', '-', '/', '*'];
    let lastNumber = getLastNumber(displayInput.value);

    // Prevents repetition of the dot (.) key within each number
    if (value === '.' && lastNumber.includes('.')) {
        return false;
    }
    
    // Prevents repetition of operator keys
    if (operators.includes(value)) {
        if (operators.includes(lastInput) || displayInput.value === '' || (lastInput === '' && (value === '*' || value === '/'))) {
            return false;
        } else {
            return true;
        }
    }

    return true;
}

// Helper function to get the last number in the chain of expressions
function getLastNumber(input) {
    let numbers = input.split(/[-+/*]/);
    return numbers[numbers.length - 1];
            }
