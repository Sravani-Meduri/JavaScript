function getStudentDetails(StudentName, Marks) {
            let studentDetails = ""
            studentDetails = "Student Name:" + StudentName +  "  " + "Marks:" + Marks
            return studentDetails;

        }
        console.log(getStudentDetails("Sravani", '98'));
        let getstudentmessage = getStudentDetails("Sravani", '98');
        console.log(getstudentmessage);