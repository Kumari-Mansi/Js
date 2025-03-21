// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 5
switch (month) {
    case 1:
        console.log("January");
        break;

        // press shift + alt + downArrow for duplication
    case 2:
        console.log("Febuary");
        break;    
    case 3:
        console.log("March");
        break;    
    case 4:
        console.log("April");
        break;    
    case 5:
        console.log("May");
        break;    
// in the absence of break all cases will execute deafault

    default:
        console.log('Default case');
        break;
}