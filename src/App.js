import React from 'react';
import '../src/styles/App.css';
import image1 from '../src/assets/images/image-1.jpg';
import image2 from '../src/assets/images/image-2.jpg';
import image3 from '../src/assets/images/image-3.jpg';
import iconFacebook from '../src/assets/images/facebook.jpg';
import iconInstagram from '../src/assets/images/instagram.jpg';
import iconTwitter from '../src/assets/images/twitter.jpg';
import iconLinkedln from '../src/assets/images/Linkedin.jpg';
import apiClient from './services';

function App() {

    const [informationDetail, setInformationDetail] = React.useState([]);

    React.useEffect(function () {
        const fetchData = async () => {
            try {
                const informationDetailData = await apiClient.getDataInformation();
                console.log('informationDetailData', informationDetailData);
                // setInformationDetail(informationDetailData);
            } catch (error) {
                console.error('Failed to fetch data', error.message);
            }
        };
        fetchData();
    }, []);

  return (
    <React.Fragment>
      <header>
        <a href="#">Works</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </header>

      <main>
      <div class="section-one">
            <div class="introduction">
                <div class="title">
                    <p>Hi, Im john doe,
                        <br/>
                        Frontend Developer
                    </p>
                </div>
                
                <div class="sub-title">
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <div class="btn-download">
                    <p>Download Resume</p>
                </div>
            </div>
            <div class="photo">
            </div>
        </div>

        <div class="section-two">
            <div class="blog">
                <div class="activity">
                    <p>Recent Posts</p>
                    <p class="view">View All</p>
                </div>
                <div class="content-card">
                    <div class="card">
                        <p>Making a design system from scratch</p>
                        <div class="time">
                            <p>12 Feb 2020</p>
                            &nbsp;
                            <p>|</p>
                            &nbsp;
                            <p>Design, Pattern</p>
                        </div>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                    <div class="card">
                        <p>Making a design system from scratch</p>
                        <div class="time">
                            <p>12 Feb 2020</p>
                            &nbsp;
                            <p>|</p>
                            &nbsp;
                            <p>Design, Pattern</p>
                        </div>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                    <div class="card">
                        <p>Making a design system from scratch</p>
                        <div class="time">
                            <p>12 Feb 2020</p>
                            &nbsp;
                            <p>|</p>
                            &nbsp;
                            <p>Design, Pattern</p>
                        </div>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
                
            </div>   
        </div>

        <div class="section-three">
            <div class="list-title">
                <p>Feature Works</p>
            </div>
            
            <div class="list">
                <img src={image1} alt="image-1" class="image-list"/>
                <div class="dashboard-list">
                    <span class="dashboard-title">Designing Dashboards</span>
                    &nbsp;
                    <div class="dashboard-year-and-name">
                        <span class="dashboard-year">2020</span>
                        <span class="dashboard-name">Design</span>
                    </div>
                    &nbsp;
                    <div class="dashboard-decription">
                        <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
                    </div>
                </div>
            </div>
            <hr/>

            <div class="list">
                <img src={image2} alt="image-1" class="image-list"/>
                <div class="dashboard-list">
                    <span class="dashboard-title">Vibrant Portraits of 2020</span>
                    &nbsp;
                    <div class="dashboard-year-and-name">
                        <span class="dashboard-year">2018</span>
                        <span class="dashboard-name">Ilustration</span>
                    </div>
                    &nbsp;
                    <div class="dashboard-decription">
                        <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
                    </div>
                </div>
            </div>
            <hr/>

            <div class="list">
                <img src={image3} alt="image-1" class="image-list"/>
                <div class="dashboard-list">
                    <span class="dashboard-title">36 Days of Malayalam type</span>
                    &nbsp;
                    <div class="dashboard-year-and-name">
                        <span class="dashboard-year">2018</span>
                        <span class="dashboard-name">Typography</span>
                    </div>
                    &nbsp;
                    <div class="dashboard-decription">
                        <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
                    </div>
                </div>
            </div>
            <hr/>
        </div>

      </main>

      <footer>
        <div class="container">
            <img src={iconFacebook} alt="facebook" width="30" height="30"/>
            <img src={iconInstagram} alt="instagram" width="30" height="30"/>
            <img src={iconTwitter} alt="twitter" width="30" height="30"/>
            <img src={iconLinkedln} alt="Linkedin" width="30" height="30"/>
        </div>
    </footer>
    </React.Fragment>
  );
}

export default App;
