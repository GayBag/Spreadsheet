
let color = {
	
	"red": 1,
	"green": 2,
	"blue": 3,
	"black": 4,

}

module.exports = class Cell {

	constructor(...args)
	{	
	
		
		if (args.length === 1)
		{
			this.value = args[0].toString();
			this.color = 0;
		}
		else if (args.length === 2)
	  	{ 
		this.value = args[0].toString();
		
		for (let key in color)
		{
		if (key === args[1])
		{
		this.color = color[key];
		break;
		}
		else
		{
			this.color  = 0;
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
	setColor(colour)
	{
		let colobj = color;
		for (let key in colobj)
		{
		if (colour === key)
		{ 
		this.color = colobj[colour];
		}
		}
	}
	getColor()
	{
		return this.color;
	}
	toInt()
	{
		if (Number(this.value))
		{
			return Number.parseInt(value);
		}
		return "Not an integer";
	}
	toDouble()
	{
		if (Number(this.value) )
		{
			return Number(this.value);
		}
		
	}
	toDate()
	{
		let date = new Date(this.value);
		return date;
	}
	reset()
	{
		this.value = "";
		this.color = 0;
	}

}

