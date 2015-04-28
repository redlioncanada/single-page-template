//example es6

class Parent {
	constructor(fn,ln) {
		this._firstName = fn;
		this._lastName = ln;
	}

	get Fullname() {
		return `${this._firstName}, ${this._lastName}`;
	}

	InheritedMethod() {
		return 'success';
	}
}

class Child extends Parent {
	constructor(fn,ln) {
		super(fn,ln);
	}

	get Fullname() {
		return super.Fullname.toUpperCase();
	}
}

var test = new Parent('Mr.', 'Test');
console.log(test.Fullname);

test = new Child('Mr.', 'Test');
console.log(test.InheritedMethod());
console.log(test.Fullname);

