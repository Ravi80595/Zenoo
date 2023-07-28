import AllRoute from './AllRoutes/AllRoute';
import './App.css';




function App() {



return (
    <div className='MainBox'>
      <div>
      <AllRoute />
      </div>
      {/* <Flex>
          <Button onClick={() => handleButtonClick('linear-gradient(0deg, rgba(210,168,168,1) 0%, rgba(191,80,80,1) 20%, rgba(238,24,24,1) 39%, rgba(255,0,0,1) 100%)','red')} bg='red' color='white' _hover={{color:'white'}}>Red</Button>
          <Button onClick={() => handleButtonClick('linear-gradient(0deg, rgba(188,156,209,1) 1%, rgba(110,104,115,1) 12%, rgba(74,74,74,1) 30%, rgba(0,0,0,1) 100%)','black')} bg='black' color='white' _hover={{color:'white'}}>Black</Button>
          <Button onClick={() => handleButtonClick('linear-gradient(0deg, rgba(116,126,236,1) 8%, rgba(99,122,230,1) 17%, rgba(48,84,255,1) 30%, rgba(31,66,254,1) 38%, rgba(33,52,219,1) 49%, rgba(15,27,223,1) 65%, rgba(24,15,209,1) 81%, rgba(6,0,212,1) 100%)','blue')} bg='blue' color='white' _hover={{color:'white'}}>Blue</Button>
        </Flex> */}
    </div>
  );
}

export default App;
