import { CiMail } from "react-icons/ci";
import SectionTittle from "../../../../Component/SectionTittle";
import useAsset from "../../../../Hook/useAsset";
import { useEffect, useState } from 'react';
import ReactModal from "react-modal";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hook/useAuth";

const ReqAsset = () => {
  const auth = useAuth();
  const {user} = auth;
  const [assetType, setAssetType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  console.log(searchTerm)
  const { asset, refetch } = useAsset({assetType, searchTerm });
  const axiosSecure = useAxiosSecure();
  const [showModal, setShowModal] = useState(false);
  const [selectedCustom, setSelectedCustom] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  const handleRequest = async (data) => {
    const need = data.need;
    const assetDetails = {
      asset: selectedCustom.product,
      type: selectedCustom.type,
      need: need,
      requestDate: new Date().toISOString(),
      email: user.email,
      name: user.displayName,
      status: 'pending'
    };

    const req = await axiosSecure.post('/myreq', assetDetails);
    console.log(req.data);
    if (req.data.insertedId) {
      reset();
      setShowModal(false);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${selectedCustom.product} request is created.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    ReactModal.setAppElement("#root");
  }, []);

  const openModal = (ass) => {
    setSelectedCustom(ass);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCustom(null);
  };

  const renderModalContent = () => {
    if (!selectedCustom) {
      return null;
    }

    return (
      <>
        <div className="modal-box">
          <div className="card w-full bg-base-100 ">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">How much need?</span>
              </div>
              <input
                type="text"
                {...register('need', { required: true })}
                placeholder="Type here"
                className="input input-bordered input-lg w-full max-w-xs"
              />
            </label>
            <div className="card-actions justify-between mt-6">
              <button
                className="btn btn-primary"
                onClick={handleSubmit(handleRequest)}
              >
                Request for an Asset
              </button>
              <button className="btn btn-primary" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
        <label
          className="modal-backdrop"
          htmlFor={`my_modal_${selectedCustom._id}`}
          onClick={closeModal}
        >
          Close
        </label>
      </>
    );
  };

  return (
    <div>
      <SectionTittle heading=" Request Assets"></SectionTittle>

      <div className='flex justify-around items-center mb-10'>
            {/* Add your filter inputs (status, assetType) and search input here */}
          
            <input type="text" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} className="input input-bordered input-error w-full max-w-xs" />

            <select className="select select-error w-full max-w-xs" onChange={(e) => setAssetType(e.target.value)}>
                <option value="">Asset Types</option>
                <option value="returnable">returnable</option>
                <option value="non-returnable">non-returnable</option>
            </select>
 
        </div>
      <div className="overflow-x-auto ml-8">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Asset Name</th>
              <th>Asset Type</th>
              <th>Availability</th>
              <th>Request Button</th>
            </tr>
          </thead>
          <tbody>
            {asset.map((ass, index) => (
              <tr key={ass._id}>
                <th>{index + 1}</th>
                <td>{ass.product}</td>
                <td>{ass.type}</td>
                <td>{ass.quantity}</td>
                <th>
                  <button
                    className={`btn btn-ghost btn-lg text-red-600 ${ass.quantity > 0 ? '' : 'cursor-not-allowed'}`}
                    onClick={() => ass.quantity > 0 && openModal(ass)}
                    disabled={ass.quantity <= 0}
                  >
                    <CiMail size={28}></CiMail>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ReactModal
        isOpen={showModal}
        contentLabel="Custom Request Details"
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
      >
        {renderModalContent()}
      </ReactModal>
    </div>
  );
};

export default ReqAsset;
