import React from 'react';
import '../src/styles/App.css';
import image3 from '../src/assets/images/image-3.jpg';
import logoHanaBank from '../src/assets/images/Logo Hana Bank.jpg';
import logoAntamLM from '../src/assets/images/Logo Antam Logam Mulia.png';
import logoHiBank from '../src/assets/images/Logo Hibank.png';
import iconFacebook from '../src/assets/images/facebook.jpg';
import iconInstagram from '../src/assets/images/instagram.jpg';
import iconTwitter from '../src/assets/images/twitter.jpg';
import iconLinkedln from '../src/assets/images/Linkedin.jpg';
import apiClient from './services';

function App() {
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


    const listMyWorks = [
        {id: 1, title: 'Hana Bank' , description: 'test', image: logoHanaBank, date: '2022', tools : 'tools'},
        {id: 2, title: 'Antam Logam Mulia' , description: 'test', image: logoAntamLM, date: '2023', tools : 'tools'},
        {id: 3, title: 'Hi Bank' , description: 'test', image: logoHiBank, date: '2023', tools : 'tools'}
    ];
    
    const listEducation = [
        {id: 1, name: 'Gunadarma University, Depok', time: '2017 - 2021',  major: 'Information System' ,description: 'Final years student, study Information System with GPA 3.31 and will graduate in 2021.'},
        {id: 2, name: 'SMA Negeri 9 Jakarta', time: '2013 - 2016',major: 'Social Scince' , description: '-'},
    ]

  return (
    <React.Fragment>
      <main>
      <div class="section-one">
            <div class="introduction">
                <div class="title">
                    <p>Kiki Krestanto,
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
                    <p>Educations</p>
                </div>
                <div class="content-card">
                    {listEducation.map((item) => 
                        <div class="card" key={item.id}>
                            <p>{item.name}</p>
                            <div class="time">
                                <p>{item.time}</p>
                                &nbsp;
                                <p>|</p>
                                &nbsp;
                                <p>{item.major}</p>
                            </div>
                            <p>
                            {item.description}
                            </p>
                        </div>
                    )}
                </div>
                
            </div>   
        </div>

        <div class="section-three">
            <div class="list-title">
                <p>My Works</p>
            </div>
            {listMyWorks.map((item) => 
            <div class="list" key={item.id}>
                <img src={item.image} alt="image-1" class="image-list"/>
                <div class="dashboard-list">
                    <span class="dashboard-title">{item.title}</span>
                    &nbsp;
                    <div class="dashboard-year-and-name">
                        <span class="dashboard-year">{item.date}</span>
                        <span class="dashboard-name">{item.name}</span>
                    </div>
                    &nbsp;
                    <div class="dashboard-decription">
                        <span>{item.description}</span>
                    </div>
                    
                </div>    
            </div>
            )}
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
