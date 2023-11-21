import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import './ChatBot.css'


const Chatbot = () => {
    const steps = [
        {
          id: '0',
          message: 'Hello',
          trigger: '1',
        },
        {
          id: '1',
          message: 'May I kindly ask for your name?',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'Hi {previousValue}, how can I help you?',
          trigger: '4',
        },
        {
          id: '4',
          options: [
            { value: 1, label: 'Real Estate', trigger: '5' },
            { value: 2, label: 'Financial Advisory', trigger: '5' },
            { value: 3, label: 'Insurance', trigger: '5' },
            { value: 4, label: 'Legal Assistance', trigger: '5' },
          ],
        },
        // {
        //   id: 'realEstateAnswer',
        //   message: 'You selected Real Estate. How can I assist you with Real Estate?',
        //   trigger: '5'
        // },
        // {
        //   id: 'financialAnswer',
        //   message: 'You selected Financial Advisory. How can I assist you with Financial Advisory?',
        //   trigger: '5'
        // },
        // {
        //   id: 'insuranceAnswer',
        //   message: 'You selected Insurance. How can I assist you with Insurance?',
        //   trigger: '5'
        // },
        // {
        //   id: 'legalAnswer',
        //   message: 'You selected Legal Assistance. How can I assist you with Legal Assistance?',
        //   trigger: '5'
        // },
        {
            id: '5',
            message: 'Would you like to connect with one of our experts for personalized assistance?',
            trigger: '6',
          },
        {
            id: '6',
            options: [
              { value: 1, label: 'Yes', trigger: 'yes' },
              { value: 2, label: 'No', trigger: 'no' },
            ],
          },
          {
            id: 'yes',
            message: 'Thank you Please fill the form. We will connect you with our team shortly to address your needs',
            trigger:'7'
          },
          {
            id: 'no',
            message: 'Thank you for your information. If you prefer not to connect with us at the moment, no worries at all.',
            end: true,
          },
          {
            id: '7',
            component: (
              <div>
                <p>
                  You can fill out our contact form by {' '}
                  <a href="https://zenoo.vercel.app/contact" target="_blank" rel="noopener noreferrer">
                    clicking here
                  </a>
                  .
                </p>
              </div>
            ),
            end: true,
          },
      ];
     
    // Creating our own theme
    const theme = {
        background: 'rgb(16, 37, 127)',
        headerBgColor: 'rgb(16, 37, 127)',
        headerFontSize: '20px',
        botBubbleColor: 'rgb(16, 37, 127)',
        headerFontColor: 'white',
        botFontColor: 'white',
        userBubbleColor: 'rgb(16, 37, 127)',
        userFontColor: 'white',
    };
     
    // Set some properties of the bot
    const config = {
        botAvatar: "https://img.lovepik.com/element/40128/7461.png_1200.png",
        floating: true,
    };

  return (
    <div>
      <ChatBot
        // This appears as the header
        // text for the chat bot
        headerTitle="Zenoo Assistance"
        steps={steps}
        {...config}
        theme={theme} 
        />
    </div>
  );
};

export default Chatbot;
