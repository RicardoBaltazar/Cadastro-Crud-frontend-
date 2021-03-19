import BUTTON from './style'

function Button(props) {
    return (
        <>
            <BUTTON>
                {props.text}
            </BUTTON>
        </>
    )
}

export default Button;