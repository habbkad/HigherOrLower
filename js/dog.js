class Dog extends Animal { 
    speak() {
       console.log(this.name + 'barks'); 
    } 
  }
  
  let dog = new Dog('Tiger'); dog.speak();
  