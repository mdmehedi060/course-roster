import { useEffect, useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';
import { FaBookmark } from 'react-icons/fa';
// import {BsBook } from 'react-icons/fa';
const Home = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [selectCourse, setSelectCourse] = useState([]);
   const [count, setCount] = useState(0);
  const [remainingTime, setRemainingTime] = useState(20);
  useEffect(() => {
    fetch("./data.json")
      .then(res => res.json())
    .then(data=>setAllCourses(data))
   }, [])
  
  // select button part
  const handleSelectorActor = course => {
    // console.log('khaichi tore');
   
    if (selectCourse.includes(course)) {
      alert('Already Selected');
    }
    else {
      const newSelectCourse = ([...selectCourse, course]);
      setSelectCourse(newSelectCourse);
    }
  };


  // credit time part
   const handleCreditTime = (course) => {
    const newCount = count + course.credit_time;

    if (newCount > 20) {
      alert("Already Booked");
    } else {
      setCount(newCount);
      setSelectCourse([...selectCourse, course]);
      setRemainingTime(20 - newCount);
    }
  };
// total credit our part





  return (
    <div className=''>
      <div className='flex flex-wrap justify-between '>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
          {
        allCourses.map(course=>( <div key={course.id} className=''>
      <div className=' ml-4 position-bottom w-60 h-84 mb-8 bg-white p-2 border-red-600'>
        <div className=' my-2'>
        <img src={course.image} />
        <h4 className='font-bold'>{course.course_name}</h4>
<p><small>{course.details}</small></p>
        </div>
        <div className='flex justify-between'>
            <p>Price:${course.price} </p>
         <button className='ml-2' onClick={() => handleCreditTime(course)}> <FaBookmark/> </button>
           <p>Credit: {course.credit_time} hr</p>
        </div>
        <button onClick={()=>handleSelectorActor(course)}  className='text-white  ml-2  mt-1 rounded-s w-52  bg-blue-600'>Select</button>
      </div>
      
     
    </div>))
      }
        </div>
       <div>
          <Cart
            selectCourse={selectCourse}
            remainingTime={remainingTime}
          >
            

        </Cart>
      </div>
      </div>
   </div>
  );
};

export default Home;
