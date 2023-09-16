import PropTypes from 'prop-types';
const Cart = ({remaining, selectedCourses, totalCredit }) => {
  console.log( remaining);
  return (
    <div className='mt-4'>
      <h2 className='text-2xl'>Credit Hour Remaining:{remaining}</h2>

      <h3 className='text-2xl font-bold'>Course Name</h3>
      {
       selectedCourses.map((course,index) => (

         <ol key={course.id}>
            <li key={course.id}>{index+1}. {course.course_name}</li>
         </ol>
        )
        )
      }
      <h4 className='text-2xl'>Total Credit Hour :{totalCredit }</h4>
    </div>
  );
};

Cart.propTypes = {
  selectedCourses: PropTypes.object.isRequired,
remaining: PropTypes.number,
  totalCredit: PropTypes.number
}

export default Cart;


