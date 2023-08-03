import React, { useEffect, useState } from 'react';
import '../CSS/Popup.css'
import { Flex, Image,Text } from '@chakra-ui/react';
import BOD1 from '../Images/BOD1.png'
import {AiOutlineClose} from 'react-icons/ai'



const Popup = (props) => {
  const { isOpen, onClose, dynamicData } = props;
  const [image,setImage]=useState()


  useEffect(() => {
    if (dynamicData) {
      switch (dynamicData.image) {
        case 'BOD1':
          setImage(BOD1);
          break;
        case 'image2':
          setImage('BOD2');
          break;
        default:
          setImage('BOD1'); // Set a default image if dynamicData.dataImage doesn't match any case
      }
    }
  }, [dynamicData]);



  return (
    <>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button onClick={onClose} className="close-button">
             <AiOutlineClose/>
            </button>
            <Flex justifyContent={'center'}>
            <Image w={'200px'} src={image}/></Flex>
            <Text fontWeight='bold'>{dynamicData.title}</Text>
            <Text>{dynamicData.description}</Text>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
