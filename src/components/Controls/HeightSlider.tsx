import PopupControl from "../Control/PopupControl"
import Slider from "rc-slider"
import 'rc-slider/assets/index.css';
import { MAX_HEIGHT, MIN_HEIGHT } from "../../constants/settings.constants";
import { useDispatch, useSelector } from "react-redux";
import { getHeight } from "../../selectors/settings.selectors";
import { setHeight } from "../../actions";
import { isArray } from "lodash";

const HeightSlider = () => {
    const dispatch = useDispatch()
    const height = useSelector(getHeight)

    const onChange = (val: number | number[]) => {
        if (isArray(val)) {
            return
        }

        dispatch(setHeight(val))
    }

    return (
        <PopupControl
            popupKey="HeightSlider"
        >
            <div className="popup-row">
                Height: {height}
            </div>
            <div className="popup-row">
                <Slider 
                    className="popup-slider"
                    max={MAX_HEIGHT}
                    min={MIN_HEIGHT}
                    value={height}
                    onChange={onChange}
                />
            </div>
        </PopupControl>
    )
}

export default HeightSlider