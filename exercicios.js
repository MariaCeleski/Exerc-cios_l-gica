
        
        function exerciciob1()
        {
       var number = []
       var some = 0
       
     
         for (i = 0; i < 5; i++)
         {
            number[i] = Number(prompt("Digite o "  + (i+1) + " º numero:"))
            some = some + number[i]
         } 

         document.write("A soma dos valores é: " + some + "<br>")

         for (i = 0; i < 5; i++){
            document.write(number[i] + "  ")
         }
        }

        function exerciciob2()
        {

        var names = []
        var inverter = []
        
        for(i=0; i<5; i++)
        {
            names[i] = prompt("Digite o "  + (i+1) + " º nome")
        }

        for(i=0; i<5; i++)
        {                
            inverter[i] = names
            [4-i]
        }

        for(i=0;  i<5; i++)
        {
            document.write((i+1) + "  - O Nome     " + names[i] +  "  está na posição " + (i+1) +"   e tem seu inverso  " + inverter[i]+ " na posição " + (5-i) + "<br>")
        }
        }

        function exerciciob3()
        {
        var number1 = []
        var multiple = []
        for(i=0; i<6; i++)
        {
            number1[i] = prompt("Digite um número")
        }
        for(i=0; i<6; i++)
        {                
            multiple[i] = number1[i]*5
        }
        for(i=0;  i<6; i++)
        {
            document.write((i+1) + "  - O Número multiplicado   " + number1[i] +  "  x 5 -  Seu resultado é      " + multiple[i]+ "<br>")
        }
        }

        function exerciciob4()
        {
            var pares = []
        var impares = []

        var num


        for(i=0; i<6; i++) 

        {

           num = Number(prompt('Número: '))

           if(num%2==0)

           {

               pares[pares.length] = num

           }else

           {

                impares[impares.length] = num

           }

        }

            
        for(i=0; i<pares.length; i++) 

        {

            document.write((i + 1) + " - Esse número é par: " + pares[i] + "<BR><BR>")

        }
            document.write("<hr>")

        for(i=0; i<impares.length; i++) 

        {

            document.write((i + 1) + " - Esse número é impar: " + impares[i] + "<BR><BR>")

        }

        }

               
        function exerciciob5()
        {
            var números = [] 
            for(i=0; i<6; i++)
        
            números[i] = prompt("Digite um número")
        
            var pares = function (item) {
                return !(item % 2);
            }

            var impares = function (item) {
                return item % 2;
            }

            var númerosPares = números.filter(pares);
            var númerosImpares = números.filter(impares);

            document.write(" Os números pares são:" +  númerosPares  + "<br>"+ " Os números impares são: " + númerosImpares)
        }

        function exerciciob6(){
            document.write("<h1>LEGAL!!! Você chegou até aqui, mas agora acabou a bricadeira de apertar nos botões!! Quer brincar novamente? Recarregue a página.</h1>")
        }
        
             
    