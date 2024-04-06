
import css from "./Loader.module.css"
import { ColorRing } from 'react-loader-spinner'


const Loader = () => {

    return (
        <div className={css.loaderContainer}>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass={css.colorRingWrapper}
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    )
}

export default Loader