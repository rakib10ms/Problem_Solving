
function salaryWithBonus(name,salary,sales){
 let result=salary+sales*15/100;
 let final_res=result.toFixed(2);
console.log(`TOTAL = R$ ${final_res}`);

}
salaryWithBonus('JOAO',500.00,1230.30);