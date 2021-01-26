
        // deposit button lengthy process ========>
        const depositBtn = document.getElementById('addDeposit');
        depositBtn.addEventListener("click", function(){
            const depositAmount = document.getElementById("depositAmount").value;
            const depositNumber = parseFloat(depositAmount);

            const currentDeposit = document.getElementById("currentDeposit").innerText;
            const currentDepositNumber = parseFloat(currentDeposit);
            const totalDeposit = depositNumber + currentDepositNumber;
             document.getElementById("currentDeposit").innerText = totalDeposit;


            const currentBalance = document.getElementById('currentBalance').innerText;
            const currentBalanceNumber = parseFloat(currentBalance);
            const totalBalance = currentBalanceNumber + depositNumber;
            document.getElementById('currentBalance').innerText = totalBalance;

            document.getElementById("depositAmount").value ="";
        })

        // deposit button shortcut process =====>
        const depositBtn = document.getElementById("addDeposit");
        depositBtn.addEventListener("click", function(){
        const depositNumber = getInputNumber("depositAmount"); 

        updateSpanText('currentBalance', depositNumber);
        updateSpanText('currentDeposit', depositNumber);

        document.getElementById("depositAmount").value ="";


    

        // Withdraw button lengthy process ===========>

        const withdrawBtn = document.getElementById('addWithdraw');
        withdrawBtn.addEventListener('click', function(){
        //   const withdrawAmount = document.getElementById('withdrawAmount').value;
        //   const withdrawNumber = parseFloat(withdrawAmount);

        // ====> instead of writing those line we can just easily call getInputNumber function <=====

        const withdrawNumber = getInputNumber('withdrawAmount');     //same thing we can do with deposit button input part. instead of writing those line we can just call getInputNumber function.

        })

        // Withdraw button shortcut process =============>
        const withdrawBtn = document.getElementById("addWithdraw");
        withdrawBtn.addEventListener("click", function(){
            const withdrawNumber = getInputNumber("withdrawAmount");
            
            updateSpanText("currentWithdraw", withdrawNumber);
            updateSpanText("currentBalance", -1 * withdrawNumber);

            document.getElementById("withdrawAmount").value = ""
        

        // get input number function (jehetu input theke number neyar kaj bar bar hocche)
        function getInputNumber(id){
            const amount = document.getElementById(id).value;
          const amountNumber = parseFloat(amount);
          return withdrawNumber;

         // updatespantext function 
        function updateSpanText(id, depositNumber){
            const current = document.getElementById(id).innerText;
            const currentNumber = parseFloat(current);
            const totalAmount = currentNumber + depositNumber;
            document.getElementById(id).innerText = totalAmount;
        }

        }