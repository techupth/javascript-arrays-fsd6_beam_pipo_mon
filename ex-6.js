const student = [
  {
    name: "John Doe",
    grade: 12,
    subjects: ["Math", "Science", "History"],
  },
];
student[0].age = 18;
console.log(student);
console.log("Student Name: " + student[0].name);
console.log("Student Age: " + student[0].age);
console.log("Student Grade: " + student[0].grade);
console.log("Student Subjects: " + student[0].subjects);
