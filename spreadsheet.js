
module.exports = class Spreadsheet{
 
	constructor (...args)
	{
		if (args.length === 1)
		{
			throw "Enter rows and coloumns "
		}
		if (args.length === 2 && args[0] > 0 && args[1] > 0) 
		{
			this.row = args[0];
			this.col = args[1];
		}
		else 
		{
			throw "Enter two positive integer numbers";
		}
		if (this.row < 0 || this.col < 0 ) 
		{
			throw "Enter positive integer numbers";
		}
		if(!Number.isInteger(this.row) || !Number.isInteger(this.col))
		{
				throw "Enter positive integer numbers"
		}
		this.cells = new Array(this.row);
		for (let i = 0 ; i < this.row; ++ i)
		{
			this.cells[i] = new Array(this.col);
		for (let j = 0;j < this.col ; ++j)
		{
			this.cells[i][j] = 0;
		}
		}		
	}
	setCellAt(row,col,cell)
	{
		if (row < 0 || col < 0 ) 
		{
			throw "Enter positiv number";
		}
		if(!Number.isInteger(row) || !Number.isInteger(col))
		{
			throw "Enter integer number"
		}
		if (row > this.row || col > this.col)
		{
			throw "Out of range"
		}
		
		this.cells[row][col] = cell;
	}
 	getCellAt(row,col)
	{
		if (row < 0 || col < 0 ) 
		{
			throw "Enter positiv number";
		}
		if(!Number.isInteger(row) || !Number.isInteger(col))
		{
			throw "Enter integer number"
		}
		if (row > this.row || col > this.col)
		{
			throw "Out of range"
		}
		return this.cells[row][col];
	}
 	addRow(ind_row)
	{	
		if (ind_row < 0 || !Number.isInteger(ind_row ))
		{
			throw "Enter positiv integer number"
		}
		if (ind_row > this.row)
		{
			throw "out of range"
		}

		this.cells.splice(ind_row,0,new Array(this.col));
		this.row += 1;
	}
 	removeRow(ind_row)
	{
		if (ind_row < 0 || !Number.isInteger(ind_row ))
		{
			throw "Enter positiv integer number"
		}
		if (ind_row > this.row)
		{
			throw "Out of range"
		}
		this.cells.splice(ind_row,1);
		this.row = this.row - 1;
	}
 	addColumn(ind_col)
	{
		if (ind_col < 0 || !Number.isInteger(ind_col))
		{
			throw "Enter positiv integer number"
		}
		if (ind_col > this.col)
		{
			throw "Out of range"
		}

		for (let i = 0;i < this.row;++i)
		{
			this.cells[i].splice(ind_col,0,0);
		}
		this.col += 1;	
	}
 	removeColumn(ind_col)
	{
		if (ind_col < 0 || !Number.isInteger(ind_col))
		{
			throw "Enter positiv integer number"
		}
		if (ind_col > this.col)
		{
			throw "Out of range"
		}
		for (let i = 0;i < this.row;++i)
		{
			this.cells[i].splice(ind_col,1);
		}
		this.col -= 1; 	
	}
 	swapRows(ind1,ind2)
	{		
		if (ind1 < 0 || ind2 < 0 || !Number.isInteger(ind1) || !Number.isInteger(ind2) )
		{
			throw "Enter positiv integer number"
		}
		if (ind1 > this.row || ind2 > this.row)
		{
			throw "Out of range"
		}
		let temp = this.cells[ind1];
		this.cells[ind1] = this.cells[ind2];
		this.cells[ind2] = temp;
	}
 	swapColumns(ind1,ind2)
	{
		if (ind1 < 0 || ind2 < 0 || !Number.isInteger(ind1) || !Number.isInteger(ind2) )
		{
			throw "Enter positiv integer number"
		}
		if (ind1 > this.col || ind2 > this.col)
		{
			throw "Out of range"
		}
		for (let i = 0;i < this.row;++i)
		{
			let temp = this.cells[i][ind1];
			this.cells[i][ind1] = this.cells[i][ind2];
			this.cells[i][ind2] = temp;
		}	
	}
}

