import { Blocks } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loaderContainer}>
      <Blocks
        height="60"
        width="60"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        visible={true}
      />
    </div>
  );
}
