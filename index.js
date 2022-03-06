function saturdayFun(satActivity = 'roller-skate') {
    return `This Saturday, I want to ${satActivity}!`
}

//console.log(saturdayFun())
//saturdayFun("bathe my dog")

function mondayWork(monActivity = 'go to the office') {
    return `This Monday, I will ${monActivity}.`
}

//mondayWork()
//mondayWork("work from home")

function wrapAdjective(wrapper = "*") {
    return (adj) => {
        return `You are ${wrapper}${adj}${wrapper}!`
    }
}

//let result = wrapAdjective()
//let emphatic = result("a dedicated programmer")

const Calculator = {
    add: (a,b) => a+b,
    subtract: (a,b) => a-b,
    multiply: (a,b) => a*b,
    divide: (a,b) => a/b
}

//console.log(Calculator.add(1,3))

function actionApplyer(integer, array) { 
    if (array.length == 0) {
        return integer
    }

    array.forEach(element => {
        integer = element(integer)
    });
    
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
    //     integer = element(integer)
    // }
    return integer
    
}

arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ]

  console.log(actionApplyer(13, arrayOfTransforms))