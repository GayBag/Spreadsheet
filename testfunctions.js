const Cell = require('./cellshell.js')
const Spreadsheet = require('./spreadshell.js')

class TestSpreadshell {
	
static test_setCellAt(){
		let sh = new Spreadsheet (5,5);
		let cell = new Cell ("hello","red") ;
		sh.setCellAt(1,2,cell);
		return sh;
	}
static test_getCellAt(){

}
static testaddRow(){}
static test_removeRow(){}
static test_addColumn(){}
static test_removeColumn(){}
static test_swapRows(){}
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
//let sh = new Spreadsheet (5,5);
//let cell = new Cell ("10.2","red");
//sh.setCellAt(3,3,cell);
//sh.setCellAt(3,4,cell);
//sh.swapColumns(1,3);
//sh.swapRows(3,1)
//sh.removeRow(2);
console.log (TestSpreadshell.test_setCellAt());
//cell.toDate();
//console.log (sh);



