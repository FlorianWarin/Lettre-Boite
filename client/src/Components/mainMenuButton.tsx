interface MainMenuButtonProps {
    image?: string;
    text: string;
    onClick?: () => void;
}

const mainMenuButton = ({ image, text, onClick }: MainMenuButtonProps) => {
    return (
        <button
            onClick={onClick}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                padding: '30px 50px',
                fontSize: '18px',
                fontWeight: 'bold',
                borderRadius: '16px',
                border: '2px solid black',
                backgroundColor: '#ee90caa9',
                color: 'black',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '200px',
                height: '150px',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#eccbdc';
                e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ee90caa9';
                e.currentTarget.style.transform = 'scale(1)';
            }}
        >
            <span>{text}</span>
            {image && <img src={image} alt="button icon" style={{ width: '32px', height: '32px' }} />}
        </button>
    )
}

export default mainMenuButton;