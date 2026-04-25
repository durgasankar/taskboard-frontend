import Button from "@mui/material/Button";

const CustomButton = ({
    children,
    type = "button",
    fullWidth = false,
    onClick,
    disabled = false,
    size = 'small',
    className = '',
    variant = 'contained'
}) => {
    return (
        <Button
            className={ className }
            type={ type }
            fullWidth={ fullWidth }
            onClick={ onClick }
            disabled={ disabled }
            variant={ variant }
            size={ size }
            sx={ {
                // mt: 2,
                // py: 0.5,
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 600,
                borderRadius: "4px",
            } }
        >
            { children }
        </Button>
    );
};

export default CustomButton;