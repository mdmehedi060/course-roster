1.Add at least 3 Project features

a. features: 
1.there are different type of course in this project.user can select course upto 20 credit hour.
2. selected course name ,total time ,total course price are shown in cart section.
3.Warning massage will shown for repeated selection and for crossing credit limit.


2.Discuss how you managed the state in your assignment project.

a.Importing Necessary Hooks:

You imported the useState and useEffect hooks from the 'react' library. These hooks are crucial for managing state and side effects in a functional component.


b.Initializing State Variables:


*You declared several state variables using the useState hook. Each state variable corresponds to a specific piece of data that needs to be managed:
allCourses: Stores the list of all available courses.
selectedCourses: Keeps track of the courses that the user has selected.
remaining: Represents the remaining credit hours the user can select.
totalCredit: Stores the total credit hours selected by the user.

c.Fetching Data with useEffect:

You used the useEffect hook to fetch data from a JSON file when the component mounts. This data is stored in the allCourses state variable. The empty dependency array ([]) ensures that the effect runs only once, simulating componentDidMount.

d.Handling Course Selection:

*You implemented the handleSelectorCourse function to handle course selection. This function checks whether the selected course exceeds the maximum allowed credit hours (20) and whether the course has already been selected. It then updates the state accordingly.
*If the course is valid for selection, you update the selectedCourses, totalCredit, and remaining state variables to reflect the changes.

e.Rendering the UI:

*In the JSX part of your component, you map through the allCourses array to display a list of available courses. Each course card includes a "Select" button that triggers the handleSelectorCourse function when clicked.
*You also render a Cart component that displays the selected courses, remaining credits, and total selected credits.