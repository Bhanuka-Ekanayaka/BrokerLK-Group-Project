import Button from 'react-bootstrap/Button';

const ChooseForm = () => {
    return (
        <div className="ChooseForm">
            <div className='d-flex justify-content-center'>
                <Button href='/postaddform/boardingroom'>
                    Boarding Room
                </Button>
                <Button>
                    Boarding Building
                </Button>
                <Button>
                    Rental House
                </Button>
            </div>
        </div>

    );
}

export default ChooseForm;