/* eslint-disable no-useless-constructor */ 
import React, {Component} from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

class ProgressCircle extends Component{
    constructor(props) {
        super(props)
        this.state = {percentage:0}
      
    } 
    componentDidMount() {   
        AOS.init();  
        document.addEventListener('aos:in:percentage', ()=>{
            this.setState({
                percentage:100
            })
        });     
    }   
    render(){ 
        
        let percentage = this.state.percentage
        return(
          <> 
            <div className="space" data-aos="fade-up"  data-aos-id="percentage"  data-aos-once="true"> 
                <div className="space-conatiner">
                    <CircularProgressbar value={percentage-30} text={`${percentage-30}%`} duration={5} />
                </div>
                <div className="space-conatiner">
                    <CircularProgressbar value={percentage-50} text={`${percentage-50}%`} duration={5} />
                </div>
            </div>  
          </>
        )
    }
}
export default ProgressCircle;
 