import React from 'react'
import './about.css';
import Award from '../../images/award.png';

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img 
                src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                alt="" 
                className='a-img' />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">it is a long established fact that a reader will be distracted by the readable content.</p>
            <p className="a-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
            <div className="a-award">
                <img src={Award} alt="award" className='a-award-img'/>
                <div className="a-award-texts">
                    <h4 className="a-award-title">International Design</h4>
                    <p className="a-award-desc">
                    orem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About