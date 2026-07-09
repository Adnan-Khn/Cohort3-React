import React from "react";
import Users from "./Users";

const App = () => {
  const [userData,setUserData] = React.useState([
  {
    "id": 1,
    "name": "Aarav Sharma",
    "email": "aarav.sharma@example.com",
    "role": "Frontend Developer",
    "department": "Engineering",
    "age": 24,
    "phone": "+91 9876543210",
    "city": "Mumbai",
    "country": "India",
    "salary": 75000,
    "status": "Active",
    "avatar": "https://i.pravatar.cc/150?img=1"
  },
  {
    "id": 2,
    "name": "Priya Patel",
    "email": "priya.patel@example.com",
    "role": "UI/UX Designer",
    "department": "Design",
    "age": 27,
    "phone": "+91 9876543211",
    "city": "Ahmedabad",
    "country": "India",
    "salary": 68000,
    "status": "Active",
    "avatar": "https://i.pravatar.cc/150?img=2"
  },
  {
    "id": 3,
    "name": "Rohan Mehta",
    "email": "rohan.mehta@example.com",
    "role": "Backend Developer",
    "department": "Engineering",
    "age": 29,
    "phone": "+91 9876543212",
    "city": "Pune",
    "country": "India",
    "salary": 92000,
    "status": "Inactive",
    "avatar": "https://i.pravatar.cc/150?img=3"
  },
  {
    "id": 4,
    "name": "Sneha Verma",
    "email": "sneha.verma@example.com",
    "role": "Product Manager",
    "department": "Management",
    "age": 31,
    "phone": "+91 9876543213",
    "city": "Delhi",
    "country": "India",
    "salary": 120000,
    "status": "Active",
    "avatar": "https://i.pravatar.cc/150?img=4"
  },
  {
    "id": 5,
    "name": "Arjun Nair",
    "email": "arjun.nair@example.com",
    "role": "DevOps Engineer",
    "department": "Engineering",
    "age": 30,
    "phone": "+91 9876543214",
    "city": "Bengaluru",
    "country": "India",
    "salary": 98000,
    "status": "Active",
    "avatar": "https://i.pravatar.cc/150?img=5"
  },
  {
    "id": 6,
    "name": "Kavya Iyer",
    "email": "kavya.iyer@example.com",
    "role": "HR Manager",
    "department": "Human Resources",
    "age": 33,
    "phone": "+91 9876543215",
    "city": "Chennai",
    "country": "India",
    "salary": 70000,
    "status": "Inactive",
    "avatar": "https://i.pravatar.cc/150?img=6"
  },
  {
    "id": 7,
    "name": "Rahul Singh",
    "email": "rahul.singh@example.com",
    "role": "QA Engineer",
    "department": "Quality Assurance",
    "age": 26,
    "phone": "+91 9876543216",
    "city": "Lucknow",
    "country": "India",
    "salary": 65000,
    "status": "Active",
    "avatar": "https://i.pravatar.cc/150?img=7"
  },
  {
    "id": 8,
    "name": "Ananya Roy",
    "email": "ananya.roy@example.com",
    "role": "Data Analyst",
    "department": "Analytics",
    "age": 25,
    "phone": "+91 9876543217",
    "city": "Kolkata",
    "country": "India",
    "salary": 72000,
    "status": "Active",
    "avatar": "https://i.pravatar.cc/150?img=8"
  },
  {
    "id": 9,
    "name": "Vikram Joshi",
    "email": "vikram.joshi@example.com",
    "role": "Software Engineer",
    "department": "Engineering",
    "age": 28,
    "phone": "+91 9876543218",
    "city": "Jaipur",
    "country": "India",
    "salary": 88000,
    "status": "Active",
    "avatar": "https://i.pravatar.cc/150?img=9"
  },
  {
    "id": 10,
    "name": "Meera Kapoor",
    "email": "meera.kapoor@example.com",
    "role": "Marketing Executive",
    "department": "Marketing",
    "age": 27,
    "phone": "+91 9876543219",
    "city": "Hyderabad",
    "country": "India",
    "salary": 60000,
    "status": "Inactive",
    "avatar": "https://i.pravatar.cc/150?img=10"
  },
  {
    "id": 11,
    "name": "Aditya Rao",
    "email": "aditya.rao@example.com",
    "role": "Full Stack Developer",
    "department": "Engineering",
    "age": 29,
    "phone": "+91 9876543220",
    "city": "Bengaluru",
    "country": "India",
    "salary": 105000,
    "status": "Active",
    "avatar": "https://i.pravatar.cc/150?img=11"
  },
  {
    "id": 12,
    "name": "Neha Gupta",
    "email": "neha.gupta@example.com",
    "role": "Content Writer",
    "department": "Content",
    "age": 24,
    "phone": "+91 9876543221",
    "city": "Noida",
    "country": "India",
    "salary": 52000,
    "status": "Active",
    "avatar": "https://i.pravatar.cc/150?img=12"
  },
  {
    "id": 13,
    "name": "Karan Malhotra",
    "email": "karan.malhotra@example.com",
    "role": "Business Analyst",
    "department": "Business",
    "age": 30,
    "phone": "+91 9876543222",
    "city": "Gurugram",
    "country": "India",
    "salary": 85000,
    "status": "Inactive",
    "avatar": "https://i.pravatar.cc/150?img=13"
  },
  {
    "id": 14,
    "name": "Pooja Desai",
    "email": "pooja.desai@example.com",
    "role": "Graphic Designer",
    "department": "Design",
    "age": 26,
    "phone": "+91 9876543223",
    "city": "Surat",
    "country": "India",
    "salary": 58000,
    "status": "Active",
    "avatar": "https://i.pravatar.cc/150?img=14"
  },
  {
    "id": 15,
    "name": "Sahil Khan",
    "email": "sahil.khan@example.com",
    "role": "Cloud Engineer",
    "department": "Engineering",
    "age": 31,
    "phone": "+91 9876543224",
    "city": "Indore",
    "country": "India",
    "salary": 110000,
    "status": "Active",
    "avatar": "https://i.pravatar.cc/150?img=15"
  },
  {
    "id": 16,
    "name": "Ishita Bose",
    "email": "ishita.bose@example.com",
    "role": "Mobile Developer",
    "department": "Engineering",
    "age": 25,
    "phone": "+91 9876543225",
    "city": "Kolkata",
    "country": "India",
    "salary": 78000,
    "status": "Inactive",
    "avatar": "https://i.pravatar.cc/150?img=16"
  },
  {
    "id": 17,
    "name": "Nikhil Jain",
    "email": "nikhil.jain@example.com",
    "role": "Security Engineer",
    "department": "Cyber Security",
    "age": 32,
    "phone": "+91 9876543226",
    "city": "Bhopal",
    "country": "India",
    "salary": 115000,
    "status": "Active",
    "avatar": "https://i.pravatar.cc/150?img=17"
  },
  {
    "id": 18,
    "name": "Ritika Sen",
    "email": "ritika.sen@example.com",
    "role": "Scrum Master",
    "department": "Management",
    "age": 29,
    "phone": "+91 9876543227",
    "city": "Chandigarh",
    "country": "India",
    "salary": 95000,
    "status": "Active",
    "avatar": "https://i.pravatar.cc/150?img=18"
  },
  {
    "id": 19,
    "name": "Yash Agarwal",
    "email": "yash.agarwal@example.com",
    "role": "AI Engineer",
    "department": "AI & ML",
    "age": 27,
    "phone": "+91 9876543228",
    "city": "Kanpur",
    "country": "India",
    "salary": 130000,
    "status": "Active",
    "avatar": "https://i.pravatar.cc/150?img=19"
  },
  {
    "id": 20,
    "name": "Simran Kaur",
    "email": "simran.kaur@example.com",
    "role": "Technical Recruiter",
    "department": "Human Resources",
    "age": 28,
    "phone": "+91 9876543229",
    "city": "Amritsar",
    "country": "India",
    "salary": 67000,
    "status": "Inactive",
    "avatar": "https://i.pravatar.cc/150?img=20"
  }
]);
  const deleteUser = (id)=>{
    setUserData(userData.filter((user)=>user.id!==id))
  }
  return (
  <div className="flex flex-wrap gap-3 items-center-safe justify-around">
    {userData.map((user,ind)=>{
      return <Users key={ind} user={[user]} del={deleteUser}/>
    })}
  </div>
  )
};
export default App;
