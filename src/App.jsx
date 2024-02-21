import './App.css'
import { useState } from 'react';
function App() {

  const [contact, setContact] = useState({
    fName:'',
    email:'',
    pass: '',
    clr: '',
    address: '',
    city: '',
    pincode: '',
    terms: false,
    // here the 'key' should be exactly same as 'name' data attribute of input tags - to match
  })
  
    const handleChange = (e) => {
    // console.log('check', e.target.value);
    const name = e.target.name;

    let value = e.target.value;

    if (e.target.type === 'checkbox') {
      value = e.target.checked;
    }

    setContact({
      ...contact,
      [name]:value
    })

   };

  return (
    <>
      <h1 className='text-center text-2xl'>React Form Validation</h1>
      <form>
        <div className='my-2'>
          <label className='mx-4' htmlFor='fName'>Name</label>
          <input
            className='border border-gray-400 rounded'
            type='text'
            name='fName'
            id='fName'
            placeholder='enter full name'
            required
            onChange={handleChange}
            value={contact.fName}
          />
        </div>
          <div className='my-2'>
          <label className='mx-4' htmlFor='email'>Email</label>
          <input
            className='border border-gray-400 rounded'
            type='email'
            name='email'
            id='email'
            placeholder='enter email name'
            required
            onChange={handleChange}
            value={contact.email}
          />
        </div>
        <div className='my-2'>
          <label className='mx-4' htmlFor='pass'>Password</label>
          <input
            className='border border-gray-400 rounded'
            type='password'
            name='pass'
            id='pass'
            placeholder='enter password name'
            required
            onChange={handleChange}
            value={contact.pass}
          />
        </div>
          <div className='my-2'>
          <label className='mx-4' htmlFor='clr'>Select Color</label>
          <input
            className='border border-gray-400 rounded'
            type='color'
            name='clr'
            id='clr'
            onChange={handleChange}
            value={contact.clr}
          />
        </div>
          <div className='my-2'>
          <label className='mx-4' htmlFor='address'>Enter Address</label>
          <textarea
            className='border border-gray-400 rounded'
            type='textarea'
            name='address'
            id='address'
            placeholder='enter full address here'
            required
            onChange={handleChange}
            value={contact.address}
          />
        </div>
          <div className='my-2'>
          <label className='mx-4' htmlFor='city'>City</label>
          <input
              className='border border-gray-400 rounded'
            type='text'
            name='city'
            id='city'
            placeholder='enter city name'
            required
            onChange={handleChange}
            value={contact.city}
          />
        </div>
        <div className='my-2'>
          <label className='mx-4' htmlFor='gender'>Gender</label>
          <select className='border border-gray-400 rounded' name='gender' id='gender' required onChange={handleChange}>>
            <option value="">Choose...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
          <div className='my-2'>
          <label className='mx-4' htmlFor='pincode'>Pincode / Zipcode</label>
          <input
              className='border border-gray-400 rounded'
            type='number'
            name='pincode'
            id='pincode'
            placeholder='enter pincode here'
            required
            onChange={handleChange}
            value={contact.pincode}
          />
        </div>
        <div className='my-2'>
          <input type='checkbox' id='terms' name='terms' required
            onChange={handleChange}
            checked={contact.terms}
          />
          <label className='mx-4' htmlFor='terms'>I agree</label>
        </div>
      </form>
    </>
  )
}

export default App
