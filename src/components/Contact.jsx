import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'react-lottie-player';
import doneAnimation from '../../public/animation/done-Animation.json'
import contactAnimation from '../../public/animation/contact-Animation.json'



function Contact() {

    const [state, handleSubmit] = useForm("xgegqjlj");

    return (
        <section className="contact">
            <h1 className="text-[2.1rem] mb-4">
                <span className="icon-envelope inline-block text-[1.8rem] mr-4 "></span>
                Contact us</h1>
            <p className="mb-8 leading-[1.65rem]">Contact us for more information and get notified when i publish something new</p>
            <div className="flex justify-between items-center">
                <form action="https://formspree.io/f/xgegqjlj" method='POST' className="flex flex-col sm:block" onSubmit={handleSubmit}>
                    <div className="email flex flex-col sm:flex-row">
                        <label htmlFor="email">Email Address:</label>
                        <input autoComplete='off' required type="email" name="email" id="email" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="message mt-6 flex flex-col sm:flex-row">
                        <label htmlFor="message">Your message:</label>
                        <textarea required name="message" id="message"></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button type="submit" disabled={state.submitting} className="submit py-[0.75rem]  px-[2rem] text-[0.9rem] sm:py-[0.75rem] text-center sm:text-[1.05rem] capitalize
                     transition-[0.3s] rounded-md mt-[1.8rem] hover:scale-[0.97] w-[30%] sm:w-fit mx-auto disabled:cursor-not-allowed">{state.submitting ? 'Submitting ...' : 'Submit'}</button>
                    {state.succeeded && (
                        <p className='text-[18px] mt-[1.8rem] flex items-center '>
                            <Lottie
                                loop={false}
                                animationData={doneAnimation}
                                play
                                style={{ height: 37 }}
                            />
                            Your Message has been sent successfully
                        </p>
                    )}
                </form>
                <div className="animation hidden lg:block">
                    <Lottie
                        loop
                        animationData={contactAnimation}
                        play
                        className='h-[270px] xl:h-[355px]'
                    />
                </div>
            </div>

        </section>
    )
}

export default Contact