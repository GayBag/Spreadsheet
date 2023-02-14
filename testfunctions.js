const Cell = require('./cell.js')
const Spreadsheet = require('./spreadsheet.js')

class TestSpreadshell {
	
static test_setCellAt(){
		let sh = new Spreadsheet (5,5);
		let cell = new Cell ("hello","red") ;
		sh.setCellAt(1,2,cell);
		if (sh.cells[1][2] === cell)
		{
			return "Test passed";
		}
			return "Test failed";
	}
static test_getCellAt(){
	let sh = new Spreadsheet (5,5);
		let cell = new Cell ("hello","red") ;
		sh.setCellAt(1,2,cell);
	if (sh.getCellAt(1,2) === cell)
	{
		return "Test passed";
	}
		return "Test failed";
}
static test_addRow(){
	let sh = new Spreadsheet (5,5);
	sh.addRow(2);
	if (sh.row === 6)
	{
		return "Test passed";
	}
		return "Test failed";
}
static test_removeRow(){
	let sh = new Spreadsheet (5,6);
	sh.removeRow(2);
	if (sh.row === 4)
	{
		return "Test passed";
	}
		return "Test failed";
}
static test_addColumn(){
	let sh = new Spreadsheet (5,6);
	sh.addColumn(2);
	if (sh.col === 7)
	{
		return "Test passed";
	}
		return "Test failed";
}
static test_removeColumn(){
	let sh = new Spreadsheet (5,6);
	sh.removeColumn(2);
	if (sh.col === 5)
	{
		return "Test passed";
	}
		return "Test failed";
}
static test_swapRows(){
	let sh = new Spreadsheet (5,6);
	let testcell = sh.cells[3][0];

	
	sh.swapRows(2,3);
	if (sh.cells[2]==testcell)
	{
		return "Test passed"
	}
		return "Test failed";
}
static test_swapColumns(){}
}

class TestCell {

static test_setValue(){
		let cell = new Cell();
		cell.setValue("hello")
		if (cell.getValue() != "hello")
		{
			return "Test failed"
		}
			return "Test passed";
	}
static test_setColor(){
		let cell = new Cell ();
		cell.setColor("green");
		if (cell.getColor() != cell.color)
		{
			return "Test failed" 
		}
			return "Test passed";
	}
static test_getValue(){
		let cell = new Cell ();
		if (cell.getValue () === cell.value)
		{
			return "Test passed";
		} 
			return "Test failed";
	}
static test_getColor(){
		let cell = new Cell ();
		if (cell.getColor() === cell.color)
		{
			return "Test passed";
		} 
			return "Test failed";
	}
static test_toInt(){
		let cell = new Cell ();
		if (typeof(cell.toInt()) === 'number')
		{
			return "Number test passed";
		}
		if ( cell.toInt () === "Not an integer")
		{
			return "Not an integer test passed";
		}
			return "Test failed";
	}
static test_toDouble(){
		
	}
static test_toDate(){
		let cell = new Cell ("2,22","red");
		
		return cell.toDate() 
		
	}
static test_reset(){
		let cell = new Cell ("hello","green");
		cell.reset ();
		if (cell.value === "" && cell.color === 0)
		{
			return "Test passed";
		}
		    return "Test failed";
	}

}
let sh = new Spreadsheet (1,2);
let cell = new Cell (10,"green");
//sh.setCellAt(3,3,cell);
//sh.setCellAt(3,4,cell);

//sh.removeRow(2);
//sh.addRow(2);
//sh.swapColumns(1,3);
//sh.swapRows(3,1)
//sh.removeRow(2);
//console.log (TestSpreadshell.test_addRows());
//cell.toDate();
console.log (cell);



