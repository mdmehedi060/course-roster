// import { useEffect, useState } from 'react';
// import Cart from '../Cart/Cart';
// import { FaBookmark } from 'react-icons/fa';
// // import {BsBook } from 'react-icons/fa';
// const Home = () => {
//   const [allCourses, setAllCourses] = useState([]);
//   const [selectCourse, setSelectCourse] = useState([]);
//    const [count, setCount] = useState(0);
//   const [remainingTime, setRemainingTime] = useState(0);

//   useEffect(() => {
//     fetch("./data.json")
//       .then(res => res.json())
//     .then(data=>setAllCourses(data))
//    }, [])
  
//   // select button part
//     const handleSelectorActor = (course) => {
//     if (selectCourse.includes(course)) {
//       alert('Already Selected');
//     } else if (count + course.credit_time > 20) {
//       alert('Already Booked');
//     } else {
//       const newCount = count + course.credit_time;
//       const newSelectedCourses = [...selectCourse, course];
//       setCount(newCount);
//       setSelectCourse(newSelectedCourses);
//       setRemainingTime(20 - newCount);
//     }
//   };
  
//   // total credit our part
  





//   return (
//     <div className=''>
//       <div className='flex flex-wrap justify-between '>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
//           {
//         allCourses.map(course=>( <div key={course.id} className=''>
//       <div className=' ml-4 position-bottom w-60 h-84 mb-8 bg-white p-2 border-red-600'>
//         <div className=' my-2'>
//         <img src={course.image} />
//         <h4 className='font-bold'>{course.course_name}</h4>
// <p><small>{course.details}</small></p>
//         </div>
//         <div className='flex justify-between'>
//             <p>Price:${course.price} </p>
//          <button className='ml-2' onClick={() => handleCreditTime(course)}> <FaBookmark/> </button>
//            <p>Credit: {course.credit_time} hr</p>
//         </div>
//         <button onClick={()=>handleSelectorActor(course)}  className='text-white  ml-2  mt-1 mr-1 rounded-s w-52 border-r-2 bg-blue-600'>Select</button>
//       </div>
      
     
//     </div>))
//       }
//         </div>
//        <div>
//           <Cart
//             selectCourse={selectCourse}
//             remainingTime={remainingTime}
//           >
            

//         </Cart>
//       </div>
//       </div>
//    </div>
//   );
// };

// export default Home;


/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
// import { ToastContainer, toast } from 'react-toastify';



const Home = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState ([]);
  const [remaining, setRemaining] = useState (0);
  const [totalCredit, setTotalCredit] = useState (0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);
  
    const handleSelectCourse = (course) => {

        const isExist = selectedCourses.find(item => item.id == course.id);

        let count = course.credit;

        if (isExist) {
            return alert('Already Enrolled')
        }
        else{

    selectedCourses.forEach(item => {
        count = count + item.credit;
    });
    
    const totalRemaining = 20 - count;
    
    if (count > 20){
        return alert ("Credit End, No more")
    }
    else {
        setTotalCredit (count);
      setRemaining(totalRemaining);
      setSelectedCourses([...selectedCourses, course]);
        }
    }};
 
//   console.log(allCourse);
  return (
    <div className="container mx-auto w-auto">
      <h1 className=" text-4xl font-bold text-center justify-center">
        Course Registration
      </h1>
      <div className="flex flex-row">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {allCourses.map((course) => (
            <div key={course.id} className=" 
            w-[312px] h-[350px] bg-slate-200 rounded-xl p-4 m-4">
          <div className="flex flex-col justify-items-center ">
          <div className="allCardDesign">
              <div>
               <img src={course.image} />
                
              </div>
                <h4 className='font-bold'>{course.course_name}</h4>
             
              <p><small>{course.details}</small></p>
             
              <div className="flex justify-between mt-2">
               <p>Price:${course.price} </p>
                <div className="flex gap-2">
                <img src="https://i.ibb.co/X256Ry5/Frame.png" alt="" />
                <p>Credit: {course.credit_time} hr</p>
                </div>
              </div>
            </div>
            <div>
            <button onClick={() => handleSelectCourse(course)} className="btn btn-wide bg-[#2F80ED] text-white mt-2 ml-3  w-64 p-2  ">
                Select
              </button>
            </div>
          </div>
        </div>
            ))}
        </div>
        <div className="cart">
          <Cart
            selectedCourses={selectedCourses}
            remaining={remaining}
            totalCredit = {totalCredit}
            ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;