import React, { useEffect, useState } from "react";
import { CiRead } from "react-icons/ci";
import SectionTittle from "../../../../Component/SectionTittle";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import useUserCustom from "../../../../Hook/useUserCustom";

const MyCustomReq = () => {
  const { custom, refetch } = useUserCustom();
  const [showModal, setShowModal] = useState(false);
  const [selectedCustom, setSelectedCustom] = useState(null);

  useEffect(() => {
    // Set the app element once the component is mounted
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
            <figure>
              <img src={selectedCustom.image} alt="Custom Asset" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Asset name: {selectedCustom.asset}</h2>
              <div className="flex justify-between">
              <p>Asset Type: {selectedCustom.type}</p>
              <p>Status: {selectedCustom.status}</p>
              </div>
              <p>Why needed: {selectedCustom.why}</p>
              <p>Additional information: {selectedCustom.adinfo}</p>
              <div className="flex justify-between">
              <p>Price of Asset: BDT {selectedCustom.price} </p>
              <p>Request date: {selectedCustom.date}</p>
              </div>
              <div className="card-actions justify-between mt-6">
                <Link to={`/dashboard/upcustom/${selectedCustom._id}`}><button className="btn btn-primary">Update </button></Link>
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
        </div>
      </>
    );
  };

  return (
    <div>
      <SectionTittle heading="My Custom Request"></SectionTittle>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Asset name</th>
              <th>Asset Type</th>
              <th>Price</th>
              <th>Status</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {custom.map((ass, index) => (
              <tr key={ass._id}>
                <th>{index + 1}</th>
                <td>{ass.asset}</td>
                <td>{ass.type}</td>
                <td>{ass.price}</td>
                <td>{ass.status}</td>
                <th>
                  <button
                    className="btn"
                    onClick={() => openModal(ass)}
                  >
                    <CiRead size={28}></CiRead>
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

export default MyCustomReq;
