"use client";
import React, { FormEvent, useState } from "react";

const Contact = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    
    const [loading,setLoading] = useState(false);

    async function submitHandler(e: FormEvent) {
        e.preventDefault();
        setLoading(true);

        
        try{

        const res = await fetch('/api/contact',{
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                name,
                email,
                message
               }),
           });

           const resData = await res.json();

           if(resData.ok){
               console.log("Message sent successfully");
               setLoading(false);
           }

           if(!resData.ok){
               console.log("Error sending message");
               setLoading(false);
           }
        }catch(error){
            console.error("There are error", error);
            
        }

    }


    return (
        <div className="pt-[5rem] pb-[3rem]" id="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto ">
                <div>
                    <h1 className="heading_sec">Contact Me</h1>
                    <p className="heading_mini">Get in Touch</p>
                    <h1 className="heading_sec">Create your <span className="text-primary">
                        business</span>{" "}website</h1>
                </div>
                               
                
                <form onSubmit={submitHandler}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] pb-[0.7rem] items-center ">
                    <input 
                    type="text"
                    id="name"
                    name='name'
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    minLength={5}
                    maxLength={150}
                    autoComplete="off"
                    required
                    placeholder="Name"
                    className="py-[0.7rem] outline-none custom_skill text-primary rounded-md px-4 " />
                    
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    minLength={5}
                    maxLength={150}
                    autoComplete="off"
                    required
                    placeholder="Email"
                    className="py-[0.7rem] outline-none custom_skill text-primary rounded-md px-4 " />
                </div>


                <textarea 
                placeholder='Message' 
                id="message"  
                name="message"
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
                required
                minLength={10}
                maxLength={500}
                rows={4}
                className="py-[0.7rem] mb-[1.5rem] w-full outline-none rounded-md custom_skill text-primary 
                px-4 " ></textarea>

                <button 
                type="submit"
                disabled={loading}
                className="py-[0.7rem] mb-[1.5rem] w-40 items-center justify-center 
                outline-none rounded-md custom_skill disabled:bg-gray-400 disabled:text-gray-100 
                hover:custom_bg text-primary px-4">
                    Submit
                </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;