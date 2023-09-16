
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



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
  
    const handleSelectorCourse = (course) => {

        const isExist = selectedCourses.find(item => item.id == course.id);

        let count = course.credit_time;

        if (isExist) {
            return toast('Already Enrolled')
        }
        else{

    selectedCourses.forEach(item => {
        count = count + item.credit_time;
    });
    
    const totalRemaining = 20 - count;
    
    if (count > 20){
        return toast ("Credit End, No more")
    }
    else {
        setTotalCredit (count);
      setRemaining(totalRemaining);
      setSelectedCourses([...selectedCourses, course]);
        }
    }};
 
//   console.log(allCourse);
  return (
    <div className="container mx-auto w-auto mt-10">
      <h1 className=" text-4xl font-bold text-center justify-center">
        Course Registration
      </h1>
      <div className="flex flex-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {allCourses.map((course) => (
            <div key={course.id} className=" 
            w-[312px] h-[350px] bg-white rounded-xl p-4 m-4">
          <div className="flex flex-col justify-items-center ">
          <div className="allCardDesign">
              <div>
               <img src={course.image} />
                
              </div>
                <h4 className='font-bold'>{course.course_name}</h4>
             
              <p><small>{course.details}</small></p>
             
              <div className="flex justify-between mt-2">
               <p> <span className='text-1xl font-bold'>$</span> Price: {course.price} </p>
                <div className="flex gap-2">
                <img src="https://i.ibb.co/X256Ry5/Frame.png" alt="" />
                <p className=''>Credit: {course.credit_time} hr</p>
                </div>
              </div>
            </div>
            <div>
            <button onClick={() => handleSelectorCourse(course)} className="btn btn-wide bg-[#2F80ED] text-white mt-2 ml-3  w-64 p-2  ">
                Select
                </button>
                <ToastContainer />
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