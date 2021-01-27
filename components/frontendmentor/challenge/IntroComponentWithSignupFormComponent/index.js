import { Fragment } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import IconError from 'public/frontendmentor/challenge/intro-component-with-signup-form/icon-error.svg';
import style from './style.module.css';

const IntroComponentWithSignupFormComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.centered_container}>
        <div className={style.description_container}>
          <h1 className={style.title}>
            <span>Learn to code by</span>
            <span>watching others</span>
          </h1>
          <p className={style.description}>
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
            but understanding how developers think is invaluable.
          </p>
        </div>
        <div className={style.main_container}>
          <div className={style.promotion}>
            <p className={style.promotion_description}><span>Try it free 7 days</span> then $20/mo. thereafter</p>
          </div>
          <Formik
            initialValues={{ firstname: '', lastname: '', email: '', password: '' }}
            validationSchema={Yup.object().shape({
              firstname: Yup.string().required('First name cannot be empty'),
              lastname: Yup.string().required('Last name cannot be empty'),
              email: Yup.string().email('Looks like this is not an email').required('Email Address cannot be empty'),
              password: Yup.string().required('Password cannot be empty').matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                'Password must contain at least 8 characters, one uppercase, one number and one special case character'
              ),
            })}
          >
            {
              ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                <form className={style.form} onSubmit={handleSubmit}>
                  <div className={style.input_wrapper}>
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstname}
                      className={touched.firstname && errors.firstname && style.error_input}
                    />
                    {
                      touched.firstname && errors.firstname &&
                        <Fragment>
                          <IconError />
                          <p className={style.error_message}>{errors.firstname}</p>
                        </Fragment>
                    }
                  </div>
                  <div className={style.input_wrapper}>
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastname}
                      className={touched.lastname && errors.lastname && style.error_input}
                    />
                    {
                      touched.lastname && errors.lastname &&
                        <Fragment>
                          <IconError />
                          <p className={style.error_message}>{errors.lastname}</p>
                        </Fragment>
                    }
                  </div>
                  <div className={style.input_wrapper}>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className={touched.email && errors.email && style.error_input}
                    />
                    {
                      touched.email && errors.email &&
                        <Fragment>
                          <IconError />
                          <p className={style.error_message}>{errors.email}</p>
                        </Fragment>
                    }
                  </div>
                  <div className={style.input_wrapper}>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className={touched.password && errors.password && style.error_input}
                    />
                    {
                      touched.password && errors.password &&
                        <Fragment>
                          <IconError />
                          <p className={style.error_message}>{errors.password}</p>
                        </Fragment>
                    }
                  </div>
                  <button type='submit' disabled={isSubmitting}>Claim your free trial</button>
                  <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
                </form>
              )
            }
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default IntroComponentWithSignupFormComponent;