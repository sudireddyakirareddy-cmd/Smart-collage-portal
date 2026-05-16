import axios from 'axios';

// Using JSONPlaceholder as a base for dummy data where applicable
const API_URL = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to attach token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Dummy Service functions
export const loginService = async (username, password, role) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Specific credentials validation based on role
  let isValid = false;
  let name = "";

  if (role === 'student' && username === 'akira' && password === 'akira@123') {
    isValid = true;
    name = "Akira";
  } else if (role === 'faculty' && username === 'yashwanth' && password === 'yashwanth@123') {
    isValid = true;
    name = "Yashwanth";
  } else if (role === 'admin' && username === 'avinash' && password === 'avinash@123') {
    isValid = true;
    name = "Avinash";
  }

  if (isValid) {
    return {
      id: Math.floor(Math.random() * 1000),
      username,
      name: name,
      role: role,
      token: 'mock-jwt-token-' + Math.random().toString(36).substr(2)
    };
  }
  throw new Error('Invalid credentials');
};

export const fetchStudents = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const studentNames = [
    "SUDIREDDY AKIRA REDDY",
    "SUDIREDDY SIMISHA",
    "SYED SAMEER",
    "SYED THOYYUB HUSSAIN",
    "TADIMARRI PHANIDHEER REDDY",
    "TALAMUDUPULA SANJAY MITHRA",
    "TALLA SAI CHARITH GOUD",
    "TEGALA GANESH GOUD",
    "THOTA VEERA AMRUTHA VARDHAN REDDY",
    "THUNGATHURTHI SAI KEERTHANA",
    "TIRUMANI JAGADEESH",
    "TUMMA MOUNIKA YADAV",
    "Ummadi jahnavi",
    "UPPEWAR KIRAN",
    "VADLA VENUGOPAL",
    "VAKA GUNA SEKHAR"
  ];

  return studentNames.map((name, index) => ({
    id: index + 1,
    name: name,
    email: `${name.split(' ')[0].toLowerCase()}@college.edu`,
    rollNo: `STU${1000 + index}`,
    course: 'Computer Science',
    attendance: Math.floor(Math.random() * (100 - 60 + 1)) + 60 + '%'
  }));
};

export const fetchNotices = async () => {
  try {
    const response = await api.get('/posts?_limit=5');
    return response.data.map((post) => ({
      id: post.id,
      title: post.title,
      content: post.body,
      date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0]
    }));
  } catch (error) {
    console.error("Error fetching notices", error);
    return [];
  }
};

export default api;
