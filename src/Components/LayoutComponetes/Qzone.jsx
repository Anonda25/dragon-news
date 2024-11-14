import fristImg from '../../assets/class.png'
import secendImg from '../../assets/swimming.png'
import thirdImg from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className=''>
            <h2 className="text-2xl font-semibold">Q-Zone</h2>
           <div >
             <div>
                <img className='w-full' src={fristImg} alt="" />
            </div>
            <div>
                <img className='w-full' src={secendImg} alt="" />
            </div>
            <div>
                <img className='w-full' src={thirdImg} alt="" />
            </div>
           </div>
        </div>
    );
};

export default Qzone;