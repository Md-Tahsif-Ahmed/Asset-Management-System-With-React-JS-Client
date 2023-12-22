const SectionTittle = ({heading}) => {
    return (
        <div className="mx-auto space-y-3 my-10 w-3/12">
            {/* <p className='text-center text-[#D99904]'>---{subHeading}---</p> */}
            <h1 className='text-center text-4xl font-bold border-b-2 p-2'>{heading}</h1>
        </div>
    );
};

export default SectionTittle;