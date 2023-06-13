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
    // let allInput = displayInput.value
    let operators = ['+', '-', '/', '*'];
    
    // Prevents repetition of the dot (.) key
    if (value === '.' && lastInput.includes('.')) {
        return false;
    }
    
    // Prevents repetition of operator keys
    if (operators.includes(value)) {
        if (operators.includes(lastInput)) {
            return false;
        } else {
            return true;
        }
    }


    return true;
    
}

