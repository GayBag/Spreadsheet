
let color = {
	
	"red": 1,
	"green": 2,
	"blue": 3,
	"black": 4,

}

module.exports = class Cell {

	constructor(...args)
	{	
	
		this.value = ""; 
		this.color = color;
		if (args.length === 0 )
		{
			this.color = 0;
		}
		else if (args.length === 2)
	  	{ 
		this.value = args[0];
		for (let key in color)
		{
		if (key == args[1])
		{
		this.color = color[key];
		}
		else
		{
		this.color = 0;
		}
		}
		}
		else 
		{
			this.value = "";
			this.color = 0;
		}
			
		
	}
	setValue (value)
	{
	
	    	 this.value = value;
	}
	getValue()
	{
		return this.value;
	}
	
	setColor(color)
	{
		this.color = color;
	}
	getColor()
	{
		return this.color;
	}
	toInt(value)
	{
		if (Number(value))
		{
			return Number.parseInt(value);
		}
		return "Not a number";
	}
	toDouble(value)
	{
		
	}
	toDate(value)
	{
	
	}
	reset()
	{
	
	}

}

