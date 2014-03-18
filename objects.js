var Person= (function(){
	this.firstName = "";
	this.lastName = "";
	this.gender = "male";
	this.birthdate = "01/01/1900";
	this.weight = 1;
	this.height = 1;
	this.country = "Israel";
	this.alpah = /[^a-zA-Z]/;
	this.numericReg = /[^0-9]/;
	this.birthdateReg= /[0-9]{2}[\/][0-9]{2}[\/][1-9]{1}[0-9]{3}/;
	
	return {get firstName(){
		return firstName;
	},
	
	set firstName(name){
		if(!name.match(this.alpah)){
			firstName = name;
		}
	},

	get lastName(){
		return lastName;
	},
	
	set lastName(name){
		if(!name.match(this.alpah)){
			lastName = name;
		}
	},
	
	get gender (){
		return gender;
	},
	
	set gender(str){
		if(str == "male" || str == "female"){
			gender = str;
		} else {
			console.log("no such gender: " + str);
		}
	},
	
	get birthdate(){
		return birthdate;
	},
	
	set birthdate (str){
		if(str.match(this.birthdateReg)){
			birthdate = str;
		}
	},
	
	get weight(){
		return weight;
	},
	
	set weight(str){
			weight = str;
	},
	
	get height(){
		return height;
	},
	
	set height(str){
			height = str;
	},
	
	get country (){
		return country;
	},
	
	set country (str){
		if(!str.match(this.alpah)){
			country = str;
		}
	},
	
	fullName : function(){
		return this.firstName + " " + this.lastName;
	},
	
	age : function(){
		var today = new Date();
		var myBirthdate = this.birthdate.split("/");
		myBirthdate = new Date(myBirthdate[2],myBirthdate[1].valueOf()-1,myBirthdate[0]);
		age = today.getTime() - myBirthdate.getTime();
		return Math.round(age/(1000*60*60*24*365));
	}
	};
});


var Avi = Person();
Avi.birthdate ="20/09/1982";
alert("My age is " + Avi.age());