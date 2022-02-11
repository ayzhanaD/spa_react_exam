import React ,{useReducer, useState} from 'react';

const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
   }

function Form(){
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
        setSubmitting(false);}, 3000)
        alert('Your prototype will be ready soon! Check your email later!')
    }

    const handleChange = event =>{
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }
    return(
    <div className="wrapper">
    {submitting &&
    <div>
        You are submitting the following:
        <ul>
            {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
        </ul>
        <div>Submtting Form...</div>
    </div> 
    }
    <form onSubmit={handleSubmit}>
        <fieldset>
            <label>
                <p>Name your table</p>
                <input name="Name: " onChange={handleChange}/>
                <p>Enter your email adress</p>
                <input name="Email: " onChange={handleChange}/>
            </label>
        </fieldset>
        <fieldset>
         <label>
           <p>Choose the material</p>
           <select name="Material: " onChange={handleChange}>
               <option value="">--Please choose an option--</option>
               <option value="solid_hardwood">Solid hardwood</option>
               <option value="solid_softwood">Solid softwood</option>
               <option value="melamine">Melamine</option>
           </select>
         </label>
         <label>
           <p>Amount of angles</p>
           <input type="number" name="Angles: " onChange={handleChange} step="1"/>
         </label>
         <label>
           <p>Amount of legs</p>
           <input type="number" name="Legs: " onChange={handleChange} step="1"/>
         </label>
         <label>
           <p>Lacquer coating</p>
           <input type="checkbox" name="lacquer_coating" onChange={handleChange} />
         </label>
       </fieldset>
        <button className="sub_btn"type="submit">Submit</button>
    </form>
    </div>
  )
}


export default Form;