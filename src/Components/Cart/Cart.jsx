// import PropTypes from 'prop-types';
const Cart = ({remaining, selectedCourses, totalCredit }) => {
  console.log( remaining);
  return (
    <div>
      <h2>Credit Hour Remaining:{remaining}</h2>

      <h3>Course Name</h3>
      {
       selectedCourses.map((course,index) => (

         <ol key={course.id}>
            <li key={course.id}>{index+1}. {course.course_name}</li>
         </ol>
        )
        )
      }
      <h4>Total Credit Hour :{totalCredit }</h4>
    </div>
  );
};

// Cart.propTypes = {
//   selectCourse: PropTypes.object.isRequired,
//   // handleWorkBookmark: PropTypes.func,
//   // handlemarkIsRead: PropTypes.func,
//   // id: PropTypes.number
// }

export default Cart;


