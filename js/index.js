//todo fixed toFixed 
var app = new Vue({
  el: "#app",
  data: {
    display: '',
    dec: false
  },
  methods: {
    enterNumber(num) {
      // TODO - set max length
        this.display += num;
        console.log('num' + this.display);
        
      
    },
    enterOp(op){
      var lastChar = this.display.slice(-1)
      if(!isNaN(lastChar)){
         this.display += op;
      } else {
        lastChar = op;
      }
      console.log(lastChar)
    },
    calculate(){
      this.display = eval(this.display).toFixed(1);
      // if(this.display.slice(-2) == .0){
      //   this.display = this.display.slice(0,1);
      // }
      
     
      // if(this.dec == true){
      //   this.display = eval(this.display).toFixed(1)
      // } else {
      //   this.display = eval(this.display);
      //    this.display = '' + this.display + '';
      //   // this.
      // }
      // this.display = this.total;
      this.dec = false;
    },
    clearAll: function() {
      this.total = '';
      this.display = '';
      this.dec = false;
    },
    clearLast: function(){
      this.display = this.display.slice(0,-1);
    },
    decimal(){
      if(this.dec == false){
        if(this.display == ''){
          this.display = "0."
          this.dec = true;
        } else {
          this.display = this.display + '.'  
          this.dec = true;
        }  
      }
    }
    
    
  }
});