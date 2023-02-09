
module.exports = class Spreadsheet{
 
	constructor (row,col)
	{
		this.cells = new Array(row);
		for (let i = 0 ; i < row; ++ i)
		{
			this.cells[i] = new Array(col);
		for (let j = 0;j < col ; ++j)
		{
			this.cells[i][j] = {};
		}
		}		

	}


	setCellAt()
	{
	}
 	getCellAt()
	{
	}
 	addRow()
	{
	}
 	removeRow()
	{
	}
 	addColumn()
	{
	}
 	removeColumn()
	{
	}
 	swapRows()
	{
	}
 	swapColumns()
	{
	}
}

