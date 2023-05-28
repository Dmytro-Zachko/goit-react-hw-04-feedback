import { Component,useState } from "react";
import { Section } from "components/Section/Section";
import { Statistic } from "components/Statistics/Statistic";
import { Notification } from "components/Notification/Notification";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";

export class Feedback extends Component {

 const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

   const HandleBtnClick = event => {
        switch (event.target.value) {
            case 'good':
             setGood(good + 1)   
                break;
        case 'bad':
             setBad(bad + 1)   
                break;
            case 'neutral':
            setNeutral(neutral + 1)
            default:
                break;
        }
         }   
    }

const countTotalFeedback = () => {
    const TotalFeedBack = good + bad + neutral;
        return TotalFeedBack;
    }

    render() {
        return (
          <>
          <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                    onLeaveFeedback={this.HandleBtnClick}/>  
            </Section>
            
                {this.countTotalFeedback() > 0 ? (
                    <Section title="Statistics">
                    <Statistic
                        good={this.state.good}
                        bad={this.state.bad}
                        neutral={this.state.neutral}
                        total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}    
                    />
                    </Section> ) : (<Notification
                    message={'No feedback given'}
                />)}
            </>
        )
    }
}