import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';



const Form = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="col-md-4 m-auto mt-5 pt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter Full Name" {...register('fullName')} />
                <br />
                <input placeholder="Enter Email" {...register('email', { required: true })} />
                <br />
                {errors.email && <p>Email  is required.</p>}

                <input placeholder="Enter contact-no" {...register('phone', { required: true }, { pattern: /\d+/ })} />
                <br />
                {errors.phone && <p>Please enter phone number.</p>}

                <textarea placeholder="Enter Addresss" {...register('address', { required: true })} />
                {errors.address && <p>Please enter Addresss.</p>}
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Form;








