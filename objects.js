var Person= function(){
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
	
	this.getFirstName = function(){
		return this.firstName;
	}; 
	
	this.setFirstName = function(name){
		if(!name.match(this.alpah)){
			this.firstName = name;
		}
	};
	
	this.getGender = function(){
		return this.gender;
	};
	
	this.getLasrName = function(){
		return this.lastName;
	}; 
	
	this.setFirstName = function(name){
		if(!name.match(this.alpah)){
			this.lastName = name;
		}
	};
	
	this.getGender = function(){
		return this.gender;
	};
	
	this.setGender = function(str){
		if(str == "male" || str == "female"){
			this.gender = str;
		} else {
			console.log("no such gender: " + str);
		}
	};
	
	this.getBirthdate = function(){
		return this.birthdate;
	};
	
	this.setBirthdate = function(str){
		if(str.match(this.birthdateReg)){
			this.birthdate = str;
		}
	};
	
	this.getWeight = function(){
		return this.weight;
	};
	
	this.setWeight = function(str){
		if(!str.match(this.numericReg)){
			this.weight = str;
		}
	};
	
	this.getHeight = function(){
		return this.height;
	};
	
	this.setHeight = function(str){
		if(!str.match(this.numericReg)){
			this.height = str;
		}
	};
	
	this.getCountry = function(){
		return this.country;
	};
	
	this.setCountry = function(str){
		if(!str.match(this.alpah)){
			this.country = str;
		}
	};
	
	this.fullName = function(){
		return this.firstName + " " + this.lastName;
	};
	
	this.age = function(){
		var today = new Date();
		var myBirthdate = this.birthdate.split("/");
		myBirthdate = new Date(myBirthdate[2],myBirthdate[1].valueOf()-1,myBirthdate[0]);
		age = today.getTime() - myBirthdate.getTime();
		return Math.round(age/(1000*60*60*24*365));
	};
};

var Avi = new Person();
Avi.setBirthdate("20/09/1982");
alert("My age is " + Avi.age());