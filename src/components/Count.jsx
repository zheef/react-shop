import React, { useRef } from 'react';
import PropTypes from 'prop-types';

Count.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

Count.defaultProps = {
    min: 1
}

function Count({min, max, value, onChange}) {
    const countInput = useRef();
    // Helper
    const getNormalValue = newValue => isNaN(newValue) ? min : newValue;
    // Обработчики кнопок
    const decrement = () => applyValue(value - 1);
    const increment = () => applyValue(value + 1);
    // Обработчик сырого значения в input
    const rawValue = e => {
        let newValue = parseInt(e.target.value);
        applyValue(getNormalValue(newValue));
    };
    // Приведение и обновление введенного значения в приложении
    const applyValue = value => {
        let newValue = Math.max(min, Math.min(value, max));
        countInput.current.value = newValue;
        onChange(getNormalValue(newValue));
    };

    return (
        <div>
            <button className="btn btn-danger"
                    onClick={decrement}
                    disabled={value <= min}
            >-</button>
            <input type="text" className="mx-3"
                   defaultValue={value}
                   ref={countInput}
                   onBlur={rawValue}
                   onKeyUp={e => e.keyCode === 13 ? rawValue(e) : true}
            />
            <button className={"btn btn-success"}
                    onClick={increment}
                    disabled={value >= max}
            >+</button>
        </div>
    );
}

export default Count;