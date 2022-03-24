import React from "react";

// images 
import Ray_01 from '../images/Ray_01.jpg';
import Ray_02 from '../images/Ray_02.jpg';

const About = () => {
    return (
        <div className="app">
            <div className="rigththird navy-bg center-align">
                <div className="padding-5">
                    <h2>Racheal</h2>
                    <p> Donec consectetur augue et massa auctor pulvinar. Morbi tempus dignissim egestas. Morbi semper quam a est varius lobortis. Sed pulvinar purus sed ante pharetra vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam vitae orci convallis, condimentum nunc id, hendrerit tellus. In at consequat velit, vitae sagittis risus. Etiam dictum sem ac scelerisque facilisis. Aenean laoreet lacinia volutpat. Sed tortor orci, ullamcorper nec porttitor id, porttitor vel quam. In hac habitasse platea dictumst.</p>
                </div>
                <div>
                    <img className="polaroid tendegright" src={Ray_01} alt="portrait"/>
                </div>
                
            </div>

            <div className="halfnHalf center-align">
                <div className="padding-5">
                    <img className="polaroid tendegleft" src={Ray_02} alt="portrait"/>
                </div>
                <div className="padding-5 yell-bg-ofset-bord">
                    <h2>Find out more</h2>
                    <p> Donec consectetur augue et massa auctor pulvinar. Morbi tempus dignissim egestas. Morbi semper quam a est varius lobortis. Sed pulvinar purus sed ante pharetra vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam vitae orci convallis, condimentum nunc id, hendrerit tellus. In at consequat velit, vitae sagittis risus. Etiam dictum sem ac scelerisque facilisis. Aenean laoreet lacinia volutpat. Sed tortor orci, ullamcorper nec porttitor id, porttitor vel quam. In hac habitasse platea dictumst.</p>
                </div>
            </div>

        </div>
    );
};

export default About;