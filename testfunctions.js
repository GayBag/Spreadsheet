const Cell = require ('./cellshell.js')
const Spreadsheet = require('./spreadshell.js')


class TestSpreadshell {
	
	test_setCellAt(){}
	test_getCellAt(){}
 	testaddRow(){}
 	test_removeRow(){}
   	test_addColumn(){}
 	test_removeColumn(){}
 	test_swapRows(){}
 	test_swapColumns(){}


}

class TestCell {

	static test_setValue()
	{
		let cell = new Cell();
		cell.setValue("hello")
		if (cell.getValue() != "hello")
		{
			return "Test failed"
		}
		return "Test passed";
	}
	static test_setColor()
	{
		let cell = new Cell ();
		cell.setColor("green");
		if (cell.getColor() != 3 )
		{
			return "Test failed" 
		}
		return "Test passed";
	}
	static test_getValue(){}
	static test_getColor(){}
	static test_toInt(){}
	static test_toDouble(){}
	static test_toDate(){}
	static test_reset(){}

}
let cell = new Cell ("hello","red");
console.log (cell.toInt("123p") );


