import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            value={props.value}
            sx={{ // стили для слайдера // пишет студент
                width: '150px',
                color: 'lightgreen',
                backgroundColor: 'white',
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
