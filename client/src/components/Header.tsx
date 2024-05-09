// import avatarPicture from "../images/avatarPicture.png"

const Header = () => {
   
    const firstName = "Anna"
    const role = "admin"
    const firstLetter = firstName.charAt(0)

    const today = new Date(); 

    const formatter = new Intl.DateTimeFormat('en-GB', {
      weekday: 'long', // Full name of the day of the week
      day: 'numeric', // Numeric day of the month
      month: 'long', // Full name of the month
      year: 'numeric' // Numeric year
    });
    
    const formattedDate = formatter.format(today);
    

    console.log(formattedDate); 
    

    return (
            <div className="header">       
                <h5>Hi {firstName}, today is {formattedDate}</h5>
                <div className="avatarPicture">{firstLetter}</div>
                {/* <img src={avatarPicture} className="avatarPicture" />          */}
                <div className="sub-header">
                    <h5>{firstName}</h5>
                    <p className="admin">{role}</p>
                </div>
            </div>
    )
}

export default Header