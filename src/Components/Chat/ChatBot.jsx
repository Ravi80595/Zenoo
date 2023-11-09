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
            { value: 1, label: 'Real Estate', trigger: 'realEstateAnswer' },
            { value: 2, label: 'Financial Advisory', trigger: 'financialAnswer' },
            { value: 3, label: 'Insurance', trigger: 'insuranceAnswer' },
            { value: 4, label: 'Legal Assistance', trigger: 'legalAnswer' },
          ],
        },
        {
          id: 'realEstateAnswer',
          message: 'You selected Real Estate. How can I assist you with Real Estate?',
          end: true,
        },
        {
          id: 'financialAnswer',
          message: 'You selected Financial Advisory. How can I assist you with Financial Advisory?',
          end: true,
        },
        {
          id: 'insuranceAnswer',
          message: 'You selected Insurance. How can I assist you with Insurance?',
          end: true,
        },
        {
          id: 'legalAnswer',
          message: 'You selected Legal Assistance. How can I assist you with Legal Assistance?',
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
        headerTitle="Zenoo"
        steps={steps}
        {...config}
        theme={theme} 
        />
    </div>
  );
};

export default Chatbot;
