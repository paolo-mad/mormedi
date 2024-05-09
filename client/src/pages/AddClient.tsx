import { useForm } from "react-hook-form";
import axios from "axios";
import { addClientSchema, TaddClientSchema } from "../lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {Link} from "react-router-dom";

const AddClient = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TaddClientSchema>({
    resolver: zodResolver(addClientSchema),
  });

  const onSubmit = async (data:TaddClientSchema ) => {
    const response = await axios.post('http://localhost:3000/clients', {
      company: data.company,
      firstName: data.firstName,
      lastName: data.lastName,
      title: data.title,
      department: data.department,
      email: data.email,
      cellphone: data.cellphone,
      sector: data.sector,
      subsector: data.subsector,
      comments: data.comments,
      country: data.country,
      address: data.address,
      city: data.city,
      postalCode: data.postalCode,
      commercial: data.commercial,
    });
    console.log(response);
    reset();
  };
  
  return (
    <div className="containerAdd">
      <h1>Add client</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
        <div className="firstCol">
            
            <label htmlFor="company">Company</label>
             <input
            {
                ...register("company"
            )}
            type="text" 
            id="company"
            />
            {errors.company && (
              <p className="errorCompany">{`${errors.company.message}`}</p>
            )}
          
            <label htmlFor="firstName">First Name</label>
            <input
            {
              ...register("firstName"
            )}
            type="text" 
            id="firstName"
            />
            {errors.firstName && (
              <p className="errorFirstName">{`${errors.firstName.message}`}</p>
              )}
            <label htmlFor="lastName">Last Name</label>
            <input
            {
              ...register("lastName"
            )}
            type="text" 
            id="lastName"
            />
            {errors.lastName && (
              <p className="errorLastName">{`${errors.lastName.message}`}</p>
              )}
            <label htmlFor="title">Title</label>
            <input
            {
              ...register("title"
            )}
            type="text" 
            id="title"
            />
            {errors.title && (
              <p className="errorTitle">{`${errors.title.message}`}</p>
              )}
            <label htmlFor="department">Department</label>
            <input
            {
              ...register("department"
            )}
            type="text" 
            id="department"
            />
            {errors.department && (
              <p className="errorDepartment">{`${errors.department.message}`}</p>
              )}
              <label htmlFor="email">Email</label>
              <input 
              {
                ...register("email" 
              )}
              type="email"  
              id="email" 
              />
              {errors.email && (
                <p className="errorEmail">{`${errors.email.message}`}</p>
              )}
              <label htmlFor="cellphone">Cellphone</label>
              <input
              {
                ...register("cellphone"
              )}
              type="text" 
              id="cellphone"
              />
              {errors.cellphone && (
                <p className="errorCellphone">{`${errors.cellphone.message}`}</p>
                )}
              
            </div>

            <div className="secondCol">
              
              <label htmlFor="sector">Sector</label>
              <input
              {
                ...register("sector"
              )}
              type="text" 
              id="sector"
              />
              {errors.sector && (
                <p className="errorSubSector">{`${errors.sector.message}`}</p>
                )}
              <label htmlFor="subSector">Sub Sector</label>
              <input
              {
                ...register("subsector"
              )}
              type="text" 
              id="subsector"
              />
              {errors.subsector && (
                <p className="errorSubSector">{`${errors.subsector.message}`}</p>
                )}
              <label htmlFor="comments">Comments</label>
              <input
              {
                ...register("comments"
              )}
              type="text" 
              id="comments"
              />
              {errors.comments && (
                <p className="errorComments">{`${errors.comments.message}`}</p>
                )}  
              <label htmlFor="address">Address</label>
              <input
              {
                ...register("address"
              )}
              type="text" 
              id="address"
              />
              {errors.address && (
                <p className="erroraddres">{`${errors.address.message}`}</p>
                )}
              <label htmlFor="country">Country</label>
              <input
              {
                ...register("country"
              )}
              type="text" 
              id="country"
              />
              {errors.country && (
                <p className="errorcountry">{`${errors.country.message}`}</p>
                )}
              <label htmlFor="country">City</label>
              <input
              {
                ...register("city"
              )}
              type="text" 
              id="city"
              />
              {errors.city && (
                <p className="errorcity">{`${errors.city.message}`}</p>
                )}
              <label htmlFor="commercial">Commercial</label>
              <input
              {
                ...register("commercial"
              )}
              type="text" 
              id="commercial"
              />
              {errors.commercial && (
                <p className="errorcommercial">{`${errors.commercial.message}`}</p>
                )}
              </div>
            </section>
                <div className="buttons">
                  <button onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
                    <Link to={"/clients"} style={{color:"white",textDecoration: "none"}}>
                      Save
                    </Link>
                  </button>
                  <button type="reset">
                    <Link to={"/clients"} style={{color:"white",textDecoration: "none"}}>
                      Cancel  
                    </Link> 
                    </button>
                </div>
         
      </form>
    </div>
  );
};

export default AddClient
