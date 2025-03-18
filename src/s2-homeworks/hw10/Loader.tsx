import s from './Loader.module.css'
import CircularProgress from '@mui/material/CircularProgress';

export const Loader = () => <div className={s.loader}>{<CircularProgress size="4rem" color={'secondary'} />}</div>
