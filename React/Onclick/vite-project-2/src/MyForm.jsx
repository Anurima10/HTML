import React from 'react'

class EventForm extends React.Component {
  render () {
    return (
      <div>
        <h4>REGISTRATION</h4>
        <form>
          <input type="text" name="FULLNAME" placeholder="FULLNAME" />
          <br/>
          <input type="date" name="DOB" placeholder="DATE OF BIRTH" />
          <br/>
          
        <input type="text" name="EMAIL ADDRESS" placeholder="EMAIL ADDRESS" />
        <br/>
          <input type="number" name="CONTACT" placeholder="CONTACT" />
          <br/>
          <input type="password" name="PASSWORD" placeholder="PASSWORD" />
          <br/>
          <button type="submit">Register!</button>
        </form>
      </div>
    )
  }
}

export default EventForm