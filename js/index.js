//todo add two operators
var app = new Vue({
  el: "#app",
  data: {
    currentNumber: '',
    newNumber: '',
    total: null,
    display: 0,
    operator: null,
    sign: false
  },
  methods: {
    checkLength(){
      //todo set max to 9 digit
    },
    enterNumber(num) {

        if (this.operator === null) {
            this.currentNumber += num;
            this.display = this.currentNumber;
            if(this.currentNumber !== '')
              this.sign = true;
              
            // this.display = num.toString(); // to display as string
        } else {
          // this.total = 0;
          this.newNumber += num;
          this.display = this.newNumber; // to display as string
          // console.log(num);
        }
//       } else {
//         // this.display += num.toString();
//         // this.currentNumber = parseFloat(this.display);
//           this.display += num.toString();
//           this.currentNumber = parseFloat(this.display);
       
//       }
      
    },
    
    calculate(){
      switch(this.operator) {
        case "+":
          // this.operator = "+";
          this.total = parseFloat(this.currentNumber) + parseFloat(this.newNumber);
          // this.total = this.currentNumber + this.newNumber;
          break;
        case "-":
          this.total = parseFloat(this.currentNumber) - parseFloat(this.newNumber);
          break;
        case "*":
          this.total = parseFloat(this.currentNumber) * parseFloat(this.newNumber);
          break;
        case "/":
          this.total = parseFloat(this.currentNumber) / parseFloat(this.newNumber);
          break;
      }
      this.display = this.total;
      this.currentNumber = '' + this.total + ''; 
      this.newNumber = '';
      this.operator = null;
    },
    clearAll: function() {
      this.currentNumber = '';
      this.newNumber = '';
      this.total = '';
      this.display = '';
      this.operator = null;
    },
    clearLast: function(){
      if(this.operator != null) {
        if(this.newNumber != ''){
          this.newNumber = this.newNumber.slice(0, -1);
          this.currentNumber = this.currentNumber.slice(0, -1);
        } else {
          this.operator = null;
        }
      } else {
        this.currentNumber = this.currentNumber.slice(0, -1);
        this.total = this.total.slice(0, -1);
      }
    },
    decimal: function(){
      if(this.currentNumber != ''){
        if(this.newNumber != ''){
          this.currentNumber = this.currentNumber;
          this.newNumber = (this.newNumber / 1).toFixed(1).slice(0, -1);
          // this.total = this.total.toFixed(2);
        } else {
           this.currentNumber = (this.currentNumber / 1).toFixed(1).slice(0, -1);
            // this.total = this.total.toFixed(2);
        }
      }
    }
    
    
  }
});