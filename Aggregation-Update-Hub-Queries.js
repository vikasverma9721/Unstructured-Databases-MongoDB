                                                                MongoDB-Queries


Query :- use companyDB
Query :- db.createCollection("employees")
Query :-  db.employees.insertMany([
          {emp_id:101,name:"Amit",department:"IT",skills:["Python","MongoDB","Docker"],projects:[{name:"HRMS",duration:6,technologies:["Python","MongoBD"]},
                 {name:"Ecommerce",duration:8,technologies:["NodeJS","MongoDB"]}],salaries:[45000,48000,52000],certifications:["AWS","Azure"]},
          {emp_id:102,name:"Neha",department:"HR",skills:["Communication","Recruitment"],projects:[{name:"HiringPortal",duration:4,technologies:["PHP","MySQL"]}],
                 salaries:[35000,38000],certifications:["SHRM"]},
          {emp_id:103,name:"Ravi",department:"Finance",skills:["Excel","Tally","SQL"],projects:[{name:"Accounting",duration:10,technologies:["SQL","PowerBI"]}],   
                 salaries:[40000,42000,46000],certifications:["CPA","CFA"]},

          {emp_id:104,name:"Pooja",department:"IT",skills:["Java","Spring","MongoDB"],projects:[{name:"BankingApp",duration:12,technologies:["Java","MongoDB"]},  
                 {name:"CRM",duration:7,technologies:["Spring","MySQL"]}],salaries:[50000,54000,60000],certifications:["Oracle","AWS"]}])


Q.1 Display all employees who have MongoDB skill
Query :-  db.employees.find({skills:"MongoDB"})


Q.2 Find employees having both Python and MongoDB skills
Query :-  db.employees.find({$and:[{skills:"Python"},{skills:"MongoDB"}]})


Q.3 Display employees with more than 2 skills
Query :-  db.employees.find({"skills.2":{$exists:true}})


Q.4 Add a new skill "Kubernetes" to Amit
Query : - db.employees.updateOne({name:"Amit"},{$push:{skills:"Kubernetes"}})


Q.5  Add multiple skills to Pooja
Query :- db.employees.updateOne({name:"Pooja"},{$push:{skills:{$each:["DSA","Excel","Machine Learning"]}}})


Q.6 Add a certification only if not already present
Query :-  db.employees.updateMany({},{$addToSet:{certifications:"HCL"}})


Q.7 Remove "Docker" skill from Amit
Query : - db.employees.updateOne({name:"Amit"},{$pull:{skills:"Docker"}})


Q.8 Remove multiple salaries less than 45000
Query :-  db.employees.updateMany({},{$pull:{salaries:{$lt:45000}}})


Q.9 Find employees who worked on MongoDB projects.
Query :- db.employees.find({projects:{$elemMatch:{technologies:"MongoDB"}}})


Q.10 Use $elemMatch to find project duration > 6 using MongoDB
Query :-  db.employees.find({projects:{$elemMatch:{technologies:"MongoDB",duration:{$gt:6}}}})


Q. 11 Count number of projects for each employee.
Query :-  db.employees.aggregate({$project:{_id:0,name:1,totalProject:{$size:"$projects"}}})


Q.12 Unwind skills array
Query :-  db.employees.aggregate([{$unwind:"$skills"}])


Q.13 List unique skills across company.
Query :-  db.employees.distinct("skills")


Q.14 Find employees with salary greater than 50000.
Query :-  db.employees.find({salaries:{$gt:50000}})


Q.15 Find employees with exactly 2 certifications.
Query :-  db.employees.find({certifications:{$size:2}})


Q.16 Add new project to Ravi.
Query :-    db.employees.updateOne({name:"Ravi"},{$push:{projects:{name:"System",duration:5,technologies:["Java","Pyhton"]}}})


Q.17 Increase all salaries by 10% (array update)
Query :-  db.employees.updateMany({},{$mul:{"salaries.$[]":1.1}})


 Q.18 Find highest salary of each employee
Query :-  db.employees.aggregate([{$project:{_id:0,name:1,highestSalary:{$max:"$salaries"}}}])


Q.19 Find average salary of employees.
Query :-  db.employees.aggregate([{$project:{_id:0,name:1,avgSalary:{$avg:"$salaries"}}}])


Q.20 Filter projects longer than 6 months.
Query :-  db.employees.find({"projects.duration":{$gt:6}})


Q.21 Find employees who have any of these skills: Java or Python.
Query :-  db.employees.find({$or:[{skills:{$eq:"Java"}},{skills:{$eq:"Python"}}]})


Q.22 Remove last salary entry.
Query :-  db.employees.updateMany({},{$pop:{salaries:1}})


Q.23 Remove first salary entry.
Query :-  db.employees.updateMany({},{$pop:{salaries:-1}})


Q.24 Sort salaries array.
Query :- db.employees.updateMany({},{$push:{salaries:{$each:[], $sort:1}}})


Q.25 Limit salaries array to last 2 entries.
Query :-  db.employees.updateMany({},{$set:{salaries:{$slice:["$salaries",-2]}}})


Q.26 Find total salary paid to each employee.
Query :-  db.employees.aggregate({$project:{_id:0,name:1,totalSalaryPaid:{$sum:"$salaries"}}})


Q.27 Convert skills to uppercase.
Query :-  db.employees.aggregate([{$project:{name:1,_id:0,skills:{$map:{input:"$skills",as:"s",in:{$toUpper:"$$s"}}}}}])


Q.28 Find employees with more than one project.
Query :-  db.employees.find({"projects.1":{$exists:true}})


Q.29 Count employees per skill.
Query :- db.employees.aggregate([{$unwind:"$skills"},{$group:{_id:"$skills",count:{$sum:1}}}])


Q.30 Find employees whose all projects use MongoDB.
Query :-  db.employees.find({"projects.technologies":"MongoDB"})
