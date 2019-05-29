const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(":memory:");

db.serialize(function(){
    db.run("CREATE TABLE Instructor (ID NUMBER, Name TEXT, dept_name TEXT, Salary NUMBER)");

    db.run("INSERT INTO Instructor VALUES(10101, 'Aadi', 'Comp.Sci.', 65000)");
    db.run("INSERT INTO Instructor VALUES(12121, 'Alvira', 'Finance',66000)");
    db.run("INSERT INTO Instructor VALUES(13131, 'Prathima', 'Music',67000)");
    db.run("INSERT INTO Instructor VALUES(14141, 'Manpreet', 'Physics',68000)");
    db.run("INSERT INTO Instructor VALUES(15151, 'Priyanka', 'History',69000)");
    db.run("INSERT INTO Instructor VALUES(16161, 'Chanchal', 'Physics',70000)");
    db.run("INSERT INTO Instructor VALUES(17171, 'Seshu', 'Chemistry',80000)");
    db.run("INSERT INTO Instructor VALUES(18181, 'Surya', 'Biology',81000)");
    db.run("INSERT INTO Instructor VALUES(19191, 'Sandy', 'Comp.Sci.',90000)");
    db.run("INSERT INTO Instructor VALUES(20202, 'Singh', 'Finance',91000)");
    db.run("INSERT INTO Instructor VALUES(21212, 'Mama', 'Elect.Eng.',92000)");
    db.run("INSERT INTO Instructor VALUES(23232, 'Prince', 'Music',99000)");

    db.each("SELECT NAME FROM Instructor", function(err,row){
        if (err)
        console.log(err);
        console.log(row);
    });

    db.each("SELECT DISTINCT dept_name FROM Instructor", function(err,row){
        console.log(row.dept_name);
    });
    let results = new Array();
    db.each("SELECT Name FROM Instructor WHERE dept_name = 'Comp.Sci.' AND Salary > 80000",
    function(err,row){
        results.push(row.Name);
    },
    function(err,count){
        let resultString = "";
        for(let i=0; i != results.length; ++i){
            if (i != count-1){
                resultString += result[i];
            }
            else 
            resultString += results[i];
        }
            console.log(resultString + "have a high salary");
        });

let depts ={};
db.each("SELECT dept_name, Salary FROM Instructor", function(err,row){
    //console.log(row)

    if (depts[row.dept_name]== undefined)
    depts[row.dept_name] = 0;

    depts[row.dept_name] += row.Salary;
},function(err,count){
    console.log("History" + ": "+depts["History"] +" yearly");
});
});