# application.properties file has been already configured MySQL related properties as follows (Just specify your id in the data source URL):
•	spring.datasource.url=jdbc:mysql://172.16.12.96:3306/{yourId} (e.g. yourId=20IT001)  
•	spring.datasource.username=root  
•	spring.datasource.password=Abcd@1234  
•	spring.jpa.hibernate.ddl-auto=update  
•	spring.jpa.show-sql=true  
# Perform the following task related to Spring Boot application. (16 Marks)
1.	Create a Spring Boot rest controller named PatientController in the controllers package.
2.	Create an entinty class Patient with patientId, name, address fields in the entities package.
3.	Create a Repository PatientRecordRepository in the repositories package.
4.	Create an endpoint to get list of patients(/patient) (GetMapping)
5.	Create an endpoint to get specific patient (/patient/{patientId}) information. (GetMapping)
6.	Create an endpoint to add the patient record to the database. (PostMapping)
7.	Create an endpoint to update the patient record to the database. (PutMapping)
8.	Create an endpoint to delete the patient record to the database. (DeleteMapping)

# Perform the following task related to React Js application. (10 Marks)
Initial React JS app is created in the webapps folder. Following modules are already installed (just execute command ""npm install" before "npm start"):  
•	react-bootstrap (Also added the required dependancy in index.html)  
•	react-router  
•	axios  

Create components to perform the operation (add, update, delete) as we have learnt in the labs.
# Once the task is over, push the code to git repository as follows: (4 Marks)
execute following commands from the Intellij terminal root directory
## Command to create a new branch on the repository
git checkout -b {yourId} 
## Command to add code to new branch
git add .
## Command to commit to new branch
git commit -m "Completed the task"
## Command to push the project to new branch
git push --set-upstream origin {yourId}
