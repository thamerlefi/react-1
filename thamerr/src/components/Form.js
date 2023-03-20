

export default function Form() {
  return (
    <form className='container'>
        <>
        <div className='row'>
            <div className='rounded-4 shadow m-auto mt-5 border col-4 bg-body'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label mt-3">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <div className="container d-flex justify-content-between">
            <button type="submit" className="btn btn-primary mb-4">Log In</button>
            <button type="submit" className="btn  mb-4 " onClick={(e)=>{
                e.preventDefault()
                console.log("this is a function");
}}>Sig In</button>
            </div>
            </div>    
        </div>
        </>
    </form>
  )
}
