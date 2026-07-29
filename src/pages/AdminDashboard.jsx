import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import logo from "../assets/logo.jpg";


function AdminDashboard() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const [toast, setToast] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin/login");
      return;
    }

    const fetchEnquiries = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/enquiries`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setEnquiries(res.data.data);
        setLoading(false);
      } catch (error) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
      }
    };

    fetchEnquiries();
  }, [navigate]);

  const handleLogout = () => {

    localStorage.removeItem("adminToken");

    setShowLogoutModal(false);

    setToast("Logged out successfully");

    setTimeout(() => {
      navigate("/admin/login");
    }, 1500);

  };

  const handleDelete = async () => {
      const token = localStorage.getItem("adminToken");

      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/enquiries/${deleteId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setEnquiries(enquiries.filter((item) => item._id !== deleteId));
        setDeleteId(null);

        setToast("Enquiry deleted successfully");

        setTimeout(() => {
          setToast("");
        }, 3000);
      } catch (error) {
        setDeleteId(null);
        setToast("Failed to delete enquiry");

        setTimeout(() => {
          setToast("");
        }, 3000);
      }
    };

    const totalEnquiries = enquiries.length;

      const basicCount = enquiries.filter(
        (item) => item.plan === "Basic"
      ).length;

      const standardCount = enquiries.filter(
        (item) => item.plan === "Standard"
      ).length;

      const premiumCount = enquiries.filter(
        (item) => item.plan === "Premium"
      ).length;

      const eliteCount = enquiries.filter(
        (item) => item.plan === "Elite"
      ).length;

      const filteredEnquiries = enquiries.filter((item) => {
        const search = searchTerm.toLowerCase();

        return (
          item.name.toLowerCase().includes(search) ||
          item.email.toLowerCase().includes(search) ||
          item.phone.includes(search) ||
          item.plan.toLowerCase().includes(search)
        );
      });


  return (
    <section className="admin-dashboard">
      <div className="admin-dashboard-header">

          <div className="admin-title">

            <img
              src={logo}
              alt="K FITNESS"
              className="admin-logo"
            />

            <div className="admin-brand-text">

              <h1>
                <span>K</span>
                FITNESS
              </h1>

              <h4>ADMIN</h4>

            </div>

          </div>


          <div className="admin-header-actions">

            <div className="admin-search-box">
              <span>🔍</span>

              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

            </div>


            <button onClick={() => setShowLogoutModal(true)}>
              Logout
            </button>

          </div>

        </div>

      <div className="stats-container">

        <div className="stats-card">
          <h3>Total Enquiries</h3>
          <h2>{totalEnquiries}</h2>
        </div>

        <div className="stats-card">
          <h3>Basic Plan</h3>
          <h2>{basicCount}</h2>
        </div>

        <div className="stats-card">
          <h3>Standard Plan</h3>
          <h2>{standardCount}</h2>
        </div>

        <div className="stats-card">
          <h3>Premium Plan</h3>
          <h2>{premiumCount}</h2>
        </div>

        <div className="stats-card">
          <h3>Elite Plan</h3>
          <h2>{eliteCount}</h2>
        </div>

      </div>

      {loading ? (
        <p className="admin-loading">Loading enquiries...</p>
      )  : filteredEnquiries.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <h2>No enquiries found</h2>
            <p>
              New customer enquiries will appear here once users submit the contact form.
            </p>
          </div>
      
      ):(

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Plan</th>
                <th>Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredEnquiries.map((item) => (
                <tr key={item._id}>
                  <td data-label="Name">{item.name}</td>
                  <td data-label="Email">{item.email}</td>
                  <td data-label="Phone">{item.phone}</td>
                  <td data-label="Plan">{item.plan}</td>
                  <td data-label="Message">{item.message || "-"}</td>
                  <td data-label="Date">{new Date(item.createdAt).toLocaleDateString()}</td>
                  <td data-label="Action">
                    <button
                      className="delete-btn"
                      onClick={() => setDeleteId(item._id)}
                    >
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {deleteId && (
          <div className="delete-modal-overlay">
            <div className="delete-modal">
              <h2>Delete Enquiry?</h2>
              <p>This action cannot be undone.</p>

              <div className="delete-modal-actions">
                <button
                  className="cancel-delete"
                  onClick={() => setDeleteId(null)}
                >
                  Cancel
                </button>

                <button
                  className="confirm-delete"
                  onClick={handleDelete}
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {showLogoutModal && (

        <div className="delete-modal-overlay">

          <div className="delete-modal">

            <h2>Logout?</h2>

            <p>
              Are you sure you want to logout from admin panel?
            </p>


            <div className="delete-modal-actions">

              <button
                className="cancel-delete"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>


              <button
                className="confirm-delete"
                onClick={handleLogout}
              >
                Logout
              </button>

            </div>

          </div>

        </div>

      )}

        {toast && (
          <div className="admin-toast">
            ✅ {toast}
          </div>
        )}

    </section>
  );
}

export default AdminDashboard;