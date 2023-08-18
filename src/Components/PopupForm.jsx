import React from 'react';
// import './Popup.css';
import '../CSS/PopupForm.css'
import { Box,Text,Button,Input,Textarea,Flex} from '@chakra-ui/react';



const PopupForm = ({open, onClose}) => {
  if (!open) return null;




return(
    <Box zIndex={999999999999999999999999999}>
       <div className="popup">
      <div className="popup-content">
      <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <Box>
            <Text>Name</Text>
            <Input style={{background:'white'}} />
            <Text>Email</Text>
            <Input style={{background:'white'}} />
            <Text>Attach Resume</Text>
            <input type="file" />
            {/* <Textarea style={{background:'white'}}></Textarea> */}
            <Flex mt={10} justifyContent='center'><Button background={'blue'} color={'white'} _hover={{background:"blue"}}>Submit</Button></Flex>
        </Box>
        </div>
    </div>
    </Box>
  );
};

export default PopupForm;
