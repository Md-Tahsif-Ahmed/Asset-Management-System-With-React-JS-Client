import SectionTittle from "../../Component/SectionTittle";

const PaymentPage = () => {
    return (

      <div className="my-10">
        <SectionTittle heading="Packages"></SectionTittle>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-7xl mx-auto mt-10 ml-6">
            <div className="card w-96 bg-[#7E2553] text-white shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Normal Package</h2>
                    <p> 5 Members for $5 </p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-outline text-white">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-[#7E2553] text-white shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Best Package</h2>
                    <p> 10 Members for $8 </p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-outline text-white">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-[#7E2553] text-white shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Premium Package</h2>
                    <p>  20 Members for $15 </p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-outline text-white">Buy Now</button>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    );
};

export default PaymentPage;
 