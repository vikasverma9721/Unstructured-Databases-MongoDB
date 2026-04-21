                                MongoDB-Queries

Query :- db.createCollection("students")
Query :- db.students.insertMany([
      {student_id:1,name:"Amit",age:20,marks:85,department:"CSE",subjects:["DBMS","OS","CN"],email:"amit@gmail.com"},
      {student_id:2,name:"Neha",age:22,marks:72,department:"ECE",subjects:["Signals","VLSI"],email:null}
      {student_id:3,name:"Rahul",age:19,marks:90,department:"CSE",subjects:["DBMS","AI","ML"]},
      {student_id:4,name:"Sneha",age:21,marks:65,department:"IT",subjects:["Web","DBMS"],email:"sneha@gmail.com"},
      {student_id:5,name:"Karan",age:23,marks:78,department:"CSE",subjects:["CN","OS"],email:"karan@gmail.com"}])


Q.1  Find students with marks greater than 80.
Query :- db.students.find({marks:{$gt:80}})


Q.2 Find students aged less than or equal to 20.
Query :- db.students.find({age:{$lte:20}})


Q.3 Find students with marks between 70 and 85.
Query :- db.students.find({marks:{$gte: 70,$lte:85}})


Q.4 Find students not belonging to CSE department.
Query :- db.students.find({department:{$ne:"CSE"}})     


Q.5 Find students whose age is exactly 21.
Query :- db.students.find({age:{$eq:21}})


Q.6 Find students with marks less than 75.
Query :- db.students.find({marks:{$lt:75}})


Q.7 Find students whose department is either CSE or IT.
Query :- db.students.find({department:{$in:["CSE","IT"]}}) 


Q.8 Find CSE students with marks above 80.
Query:-  db.students.find({department:"CSE",marks:{$gt:80}})


Q.9  Find students who are in CSE or have marks above 85.
Query :-  db.students.find({$or:[{department:{$eq:"CSE"}},{marks:{$gt:85}}]})


Q.10  Find students who are NOT in IT department.
Query :-  db.students.find({department:{$ne:"IT"}})


Q.11  Find students with marks not between 70 and 85.
Query :-  db.students.find({marks:{$not:{$gt:70,$lt:85}}})


Q.12  Find students aged above 20 and not in ECE.
Query :-  db.students.find({$and:[{age:{$gt:20}},{department:{$ne:"ECE"}}]})


Q.13  Find students who are either IT students or have marks less than 70.
Query :-  db.students.find({$or:[{department:{$eq:"IT"}},{marks:{$lt:70}}]})


Q.14  Find students who are not CSE and not IT.
Query :-  db.students.find({$and:[{department:{$ne:"CSE"}},{department:{$ne:"IT"}}]})


Q.15  Find students who have an email field.
Query :-  db.students.find({email:{$exists:true}})


Q.16 Find students who do not have an email field.
Query :-  db.students.find({email:{$exists:false}})


Q.17 Find students whose email value is null.
Query :-  db.students.find({email:{$type:10}})


Q.18  Find students whose marks field is of type integer.
Query :-  db.students.find({marks:{$type:"int"}})


Q.19 Find students who have subjects’ field.
Query :-  db.students.find({subjects:{$exists:true}})


Q.20 Find students whose age field is missing.
Query :-   db.students.find({age:{$exists:false}})


Q.21 Find students where marks modulo 5 equals 0.
Query :-  db.students.find({marks:{$mod:[5,0]}})


Q.22 Find students whose name starts with letter “A”.
Query :- db.students.find({name:{$regex:"A"}})


Q.23 Find students whose email ends with gmail.com.
Query :-  db.students.find({email:{$regex:"gmail.com$"}})


Q.24 Find students who have more than 2 subjects.
Query :-  db.students.find({"subjects.2":{$exists:true}})


Q.25 Find students whose marks are greater than their age × 3.
Query :-  db.students.find({$expr:{$gt:["$marks",{$multiply:["$age",3]}]}})

