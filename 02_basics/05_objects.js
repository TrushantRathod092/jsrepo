const course = {
    courseName: "Js courcse",
    coursePrice: 999,
    courseInstructor: "Trushant"
}

// console.log(course.courseInstructor);

const {courseInstructor} = course
// console.log(courseInstructor);
// op: Trushant

const {courseInstructor: instructor} = course
// console.log(instructor); // copied in instructor variable
// op: Trushant


// Json structure : {}
// {
//     "name": "Trushant",
//     "Price": "Free",
//     "courseName": "Js Course"
// }