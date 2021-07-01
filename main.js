function income(){
				/* getting net incomr */
				var salary = document.getElementById('salary').value;
				var asalary = document.getElementById('asalary').value;
				var bsalary = document.getElementById('bsalary').value;
				var netinc = parseInt(salary)+parseInt(asalary)+parseInt(bsalary);
				console.log('Net Income = '+netinc)
				
				
				/* getting net Expenditures*/
				var house = parseInt(document.getElementById('house').value)
				var food = parseInt(document.getElementById('food').value)
				var travel = parseInt(document.getElementById('travel').value)								
				var any = parseInt(document.getElementById('anonymous').value)
				var netexp = food + travel + house + any
				console.log('Net Exp = ' + netexp)
				
				/* Getting Loans and emi */
				var loan = parseInt(document.getElementById('loan').value)									
				var emi = parseInt(document.getElementById('EMI').value)
				var netdebt = loan+ emi
				console.log('Net Loans and EMI debts = '+netdebt)
				var net =		netinc-netexp-netdebt
				if (net<0) {
							document.getElementById('change').innerHTML	='Your net Expenditures are greater than you net monthly income due to which Your Bank Account can get Empty in some time<br><br>You need to increase your income by getting a better job or investing money but start with lowering your Expenditures.';
							
				}else if (net>0) {var per = netexp/netinc
								if(per>0.4){document.getElementById('change').innerHTML='You have net income positive but your Expenditures is more than 40% of your Income.You need to lower your Expenditure to Increase your positive income';}
								else if (per<0.4) {
												document.getElementById('change').innerHTML='Your net Income is positive and you Expenditures are low too. Financial Conditions are good for Now.Increase Your Income by Investing Money.';
								}
				}
				
		









}
document.getElementById('btn').addEventListener('click',income);
