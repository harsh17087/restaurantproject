import React from 'react'

const ContactComp = () => {
    return (
        <div>
            <div class="card mx-auto border-primary mb-3 body-card" >
        <h3 style={{textAlign:"center"}}>Contact us for Booking</h3>
        <div class="card-body">
            <form method="get">
                <div class="form-group">
                    <div class="input-group">
                        <label for="firstName" class="col-xs-6"></label>
                        <input type="text" class="form-control " id="firstName" placeholder="First Name" required/>
                        <label for="lastName class=col-xs-6"></label>
                        <input type="text" class="form-control" id="lastName" placeholder="Last Name" required/>
                    </div>
                </div>
                <label for="e-mail"></label>
                <input type="email" class="form-control" id="e-mail" placeholder="email" required/><br/>
                <input type="date" class="form-control"/>
                {/* <label for="password"></label>
                <input type="password" class="form-control" id="password" placeholder="password" required/> */}
                <button type="submit" class=" form-control btn btn-primary btn-sm">Submit</button>
                
            </form>
            {/* <p class="login">Already have an account ? <a href="">Login</a></p> */}
        </div>
    </div>
        </div>
    )
}

export default ContactComp
