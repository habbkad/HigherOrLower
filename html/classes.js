console.log("hello")


class Nana {

	constructor (age){
		this.age = age
	}
}


class Tony extends Nana{



	constructor(boy,girl,age){
		super(age)
		this.boy = boy
		this.girl = girl
	}

	add(){


		return this.boy+this.girl*this.age
		
	}
}



let know = new Tony(5,6,3)

console.log(know.add())
