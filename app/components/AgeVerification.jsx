import {useState, useEffect} from 'react';
import {Modal} from 'flowbite-react';
import {Button} from './Button';

export function AgeVerification() {
    const [displayPopUp, setDisplayPopUp] = useState(true);
    const closePopUp = () => {
        localStorage.setItem("seenPopUp", true);
        setDisplayPopUp(false);
      };

      useEffect(() => {
        let returningUser = localStorage.getItem("seenPopUp");
        setDisplayPopUp(!returningUser);
      }, []);

      return(
    <Modal
    show={displayPopUp}
    size="lg lg:xl"
    popup={true}
    position="center"
    >
    <Modal.Header className="bg-primary border-2 border-orange border-b-0 rounded-lg"/>
    <Modal.Body className="bg-primary border-2 border-orange border-t-0 rounded-lg">
   
      <div className="text-center">
        <div className='flex justify-center mb-6'>
        <img
            src="https://cdn.shopify.com/s/files/1/0745/8501/4570/files/small-logo.png?v=1681884207"
            className='h-14'
        />
        </div>
        <h3 className="mb-5 text-lg font-bold text-clearWhite">
        Are you 21 or older & of the legal smoking age in your state?
        </h3>
        <div className="flex justify-center gap-4">
          <Button
            className="border-black border rounded bg-orange p-2 mr-2"
            onClick={closePopUp}
          >
            Yes, I am 21+
          </Button>
          <Button
            className="border-black border rounded bg-lightGray p-2 px-4 ml-2"
            onClick={(e) => (window.location = 'https://www.google.com')}
          >
            Exit
          </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
    );
}