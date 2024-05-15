const FeatureItem = ({  key , icon, text }) => {
    return (
        <div key={key} className='p-6 border-b flex items-center gap-x-6 border-[#d9d6d6]'>
            {icon}
            <p className='text-[#44475B]'>{text}</p>
        </div>
    );
};

export default FeatureItem