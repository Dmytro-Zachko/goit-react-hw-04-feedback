import { useState } from "react";
import { Section } from "components/Section/Section";
import { Statistic } from "components/Statistics/Statistic";
import { Notification } from "components/Notification/Notification";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";

export const FeedbackHoocks = () =>  { 
  const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const options = ['good','bad','neutral']

    const HandleClickChange = event => {
const value = event.target.value;
        
    if (value === 'good') {
        setGood(state => state + 1)
        }
    if (value === 'bad') {
        setBad(state => state + 1)
        }
    if (value === 'neutral') {
        setNeutral(state => state + 1)
    }    
    }
    
    const TotalFeedback = () => {
        const totalFeedback = good + bad + neutral;
        return totalFeedback
    }

    const TotalPositiveFeedback = () => {
        const PositiveFeedback = Math.round((good / TotalFeedback()) * 100);
        return PositiveFeedback;
    }
    return (
        <>
        <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={options}
                    onLeaveFeedback={HandleClickChange}/>  
        </Section>
        
        {
        TotalFeedback() > 0 ? (
         <Section title="Please leave feedback">
    <Statistic
    good={good}                    
    bad={bad}                    
    neutral={neutral}                    
    positivePercentage={TotalPositiveFeedback()}                    
    total={TotalFeedback()}                    
    />         
  </Section>
        ) : (<Notification message="There is no feedback"/>)}
    
    </>    )
}
