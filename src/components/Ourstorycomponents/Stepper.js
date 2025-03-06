import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator from '@mui/joy/StepIndicator';
import FavoriteIcon from '@mui/icons-material/Favorite';
const steps = [
    { label: 'Engagement', date: new Date('2025-02-07') },
    { label: 'Haldi', date: new Date('2025-03-12') },
    { label: 'Marriage', date: new Date('2025-03-14') },
];

const ButtonStepper = () => {
    const currentDate = new Date(); // Get the current date and time

    return (
        <Stepper sx={{ width: '100%' }}>
            {steps.map((step, index) => (
                <Step
                    sx={{ color: currentDate > step.date ? 'rgb(255, 0, 255)' : "#000",fontFamily:"'Dancing Script', cursive",   }}
                    key={index}
                    orientation="vertical"
                    indicator={
                        <StepIndicator
                            variant={currentDate > step.date ? "plain" : "solid"}
                            sx={{
                                backgroundColor: currentDate > step.date ? '#fff' : 'lightgrey',
                                color: currentDate > step.date ? 'rgb(255, 0, 255)' : '#fff',
                            }}
                        >
                            {currentDate > step.date ? <FavoriteIcon /> : index + 1}
                        </StepIndicator>
                    }


                >
                    {step.label}
                </Step>
            ))}
        </Stepper>
    );
};

export default ButtonStepper;
