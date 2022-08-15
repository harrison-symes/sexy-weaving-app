import "./MobileControl.css"

interface IMobileControlProps {
    children: React.ReactNode;
}

const MobileControl = (props: IMobileControlProps) => {
    return (
        <div className="mobile-control__outer">
            <div className="mobile-control__inner">
                {props.children}
            </div>
        </div>
    )
}

export default MobileControl