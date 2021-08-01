require('./App.css')






const App = () => {

  //CONTROLLER FUNCTIONS---------------------------------------------------
  const handleSubmit = (event) => {
    event.preventDefault()

    const myForm = document.getElementById('myform')
    const fd = new FormData(myForm)

    fetch('http://localhost:8000/', {
      method: 'post',
      headers:{"Content-Type": "application/x-www-form-urlencoded"},
      body: new URLSearchParams(fd)
    })
    .then((res) => {console.log(res.text())})
    .catch((error) => {console.log(error)})
  }



  //RETURN FUNCTION---------------------------------------------------------
  return(
    <div className='container'>
      <div className='container_form'>
        <h1>SIGNUP FORM</h1>
        <form id='myform'>
          <div>
            <label>Name</label><br/>
            <input type='text' name='name'/><br/><br/>
          </div>

          <div>
            <label>Password</label><br/>
            <input type='password' name='password'/><br/><br/>
          </div>
          
          <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
  
}






export default App