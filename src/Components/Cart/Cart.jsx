// import PropTypes from 'prop-types';
const Cart = ({ selectCourse,remainingTime }) => {
  console.log(selectCourse);
  return (
    <div>
      <h2>Credit Hour Remaining:{remainingTime}</h2>

      <h3>Course Name</h3>
      {
       selectCourse.map((course) => (

          <li key={course.id}>{course.course_name}</li>
        )
        )
      }
      <h4>Total Credit Hour :</h4>
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

