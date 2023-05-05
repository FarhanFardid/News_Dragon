import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const Terms = () => {
    useTitle("Terms & Cond.")
    return (
        <div className='text-center p-3'>
            <h2>Terms and Conditions</h2>
            <p className='fs-4 p-4'>A Terms and Conditions is an important agreement that your website or app should have. It's not mandatory by law, but it's important have it. It's the agreement where you set out the rules and guidelines for your users.<br></br>

Through a Terms and Conditions agreement, you maintain your rights to terminate access to users that abuse your website or app. Or, you can maintain your rights to remove any user-generated content on your website or app that may infringe copyright.<br></br>

We can help you generate a customized Terms and Conditions agreement in around two-three minutes for free..</p>
          <p className='fs-4 p-2'>Back to <Link to='/auth/register'>Sign Up</Link></p>  
        </div>
    );
};

export default Terms;