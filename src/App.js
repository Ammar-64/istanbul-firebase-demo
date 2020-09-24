import React, {useState, useEffect} from 'react';
import db from './firebaseConfig'
import './App.css';
import { render } from '@testing-library/react';

const App = () => {
  // constructor() {
  //   super();
  //   this.state = {
  //     header: "",
  //     email: "",
  //     fullname: "",   
  //     users: []  
  //   };
  // }

  // fetchData = async ()=>{
  //   const res = await db.collection('demo').doc('header').get()
  //   const data = res.data()
  //   console.log(data);
  //   this.setState({header: data.tilte})
  //   const usersRes = await db.collection('users').get() 
  //   console.log(usersRes);
  //   const usersData = usersRes.docs.map(user => user.data())
  //   console.log(usersData);
  //   this.setState({users: usersData})
  // }
  // componentDidMount(){
  //   setTimeout(() => {
  //     this.fetchData()
  //   }, 2000); 
  // }
  // componentDidUpdate  
  // addUser = e => {
  //     e.preventDefault()
  //     db.collection('users').add({
  //       fullName: this.state.fullname,
  //       email: this.state.email,
  //     })
  //     this.setState({
  //       email: "",
  //       fullname:""
  //     })
  //   }

  const [header, setHeader] = useState('');
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState("");
  const [users, setUsers] = useState([])
  
  const fetchData = async ()=>{
    const res = await db.collection('demo').doc('header').get()
    const data = res.data()
    console.log(data);
    setHeader(data.tilte)
    const usersRes = await db.collection('users').get() 
    console.log(usersRes);
    const usersData = usersRes.docs.map(user => user.data())
    console.log(usersData);
    setUsers(usersData)
  }

  const addUser = e => {
    e.preventDefault()
    db.collection('users').doc(fullname).set({
      fullName: fullname,
      email: email,
      array: [fullname, email]
    })
    setEmail("")
    setFullname("")
  }

  useEffect(()=>{
    fetchData()
  },[email, header])
  

  
    if (users === []){
      return <h3>loading...</h3>
    } else {
  return (
    <>
      <h1>{header}</h1>
      <form onSubmit={addUser}>
        <input
          type="text"
          name="fullname"
          placeholder="Full name"
          onChange={e => setFullname(e.target.value)}
          value={fullname}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <button type="submit">Submit</button>
      </form>
      <h4>users</h4>
      <table border="true">
        <tbody>
          <tr><th>Full Name</th><th>Email</th></tr>
          {users.map((user, index) => <tr key={index}><td>{user.fullName}</td><td>{user.email} </td></tr>)}
        </tbody>
      </table>
      </>
      );
    }
}
export default App;
