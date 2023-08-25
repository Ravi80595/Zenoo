import React, { useState } from 'react';
import '../CSS/PopupForm.css'
import { Box,Text,Button,Input,Textarea,Flex} from '@chakra-ui/react';
import {CiEdit} from "react-icons/ci"
import Dropzone from 'react-dropzone'


const PopupForm = ({open, onClose}) => {
  const [image,setImage]=useState() 
  
  if (!open) return null;
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
  };


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
            <Text mt={3}>Attach Resume</Text>
            <Box>
            <Dropzone acceptedFiles=".jpg,.jpeg,.png" multiple={false} onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <Flex>
               <Box {...getRootProps()} border={`2px dashed black`} p="1rem" width="100%" sx={{ "&:hover": { cursor: "pointer" } }}>
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Upload cv</p>
                  ) : (
                    <Flex>
                      <p>{image.name}</p>
                      <CiEdit/>
                    </Flex>
                  )}
                </Box>
              </Flex>
            )}
          </Dropzone>
            </Box>
            <Flex mt={10} justifyContent='center'><Button background={'blue'} color={'white'} _hover={{background:"blue"}}>Submit</Button></Flex>
        </Box>
        </div>
    </div>
    </Box>
  );
};

export default PopupForm;
