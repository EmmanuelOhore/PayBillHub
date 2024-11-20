import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

const Dashboard = () => {
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Invoices",
        data: [10, 20, 15, 25, 18],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 3,
    plugins: {
      legend: {
        position: "left", // Adjust legend position
      },
    },
  };

  // Data for Pie Chart
  const pieData = {
    labels: ["Paid", "Pending", "Overdue", "PAID"],
    datasets: [
      {
        label: "Payments",
        data: [50, 30, 20, 70],
        backgroundColor: ["#4BC0C0", "#FFCD56", "#FF6384", "#FF4702"],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 3,
    plugins: {
      legend: {
        position: "right", // Adjust legend position
      },
    },
  };
  const summaryData = {
    labels: ["Invoices Sent", "Payments Processed", "Overdue Invoices"],
    datasets: [
      {
        label: "Activity Summary",
        data: [125, 95, 15], // Corresponding data
        backgroundColor: "#80C4E9", // For a clean look
        borderColor: "#2C3E50", // Darker border for contrast
        borderWidth: 1,
      },
    ],
  };

  const summaryOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 3,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <>
      <header className="header">
        <h1>Dashboard Overview</h1>
        <div className="profile-section">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="profile-img"
          />
          <div className="profile-info">
            <p className="name">Jane Smith</p>
            <p className="role"> Logistics Manager</p>
            <div className="status-indicator online"></div>
          </div>
        </div>
      </header>

      <section className="metrics">
        <div className="card">
          <h3>Invoices Issued</h3>
          <p>25</p>
        </div>
        <div className="card">
          <h3>Pending Payments</h3>
          <p>10</p>
        </div>
        <div className="card">
          <h3>Way Bills Processed</h3>
          <p>18</p>
        </div>
      </section>

      {/* <!-- Charts Section --> */}
      <section className="charts-section">
        <div className="chart">
          <h3>Bar Chart</h3>
          <Bar data={barData} options={barOptions} />
        </div>
        <div className="chart">
          <h3>Pie Chart</h3>
          <Pie data={pieData} options={pieOptions} />
        </div>
      </section>

      {/* Team Members Section */}
      <section className="team-members">
        <h2>Team Members</h2>
        <div className="team-list">
          <div className="team-card">
            <img src="https://via.placeholder.com/50" alt="Profile" />
            <p>John Doe</p>
            <small>Role: Accountant</small>
          </div>
          <div className="team-card">
            <img src="https://via.placeholder.com/50" alt="Profile" />
            <p>Jane Smith</p>
            <small>Role: Logistics Manager</small>
          </div>
        </div>
      </section>

      <section className="recent-activities">
        <h2>Recent Activities</h2>
        <div className="activity-container">
          {/* <!-- Activity List --> */}
          <div className="activity-list">
            <ul>
              <li>
                <div className="activity-item">
                  <span className="activity-icon">📄</span>
                  <div className="activity-details">
                    <p>
                      <strong>Invoice #1234</strong> created by John Doe
                    </p>
                    <small>Nov 16, 2024, 10:00 AM</small>
                  </div>
                </div>
              </li>
              <li>
                <div className="activity-item">
                  <span className="activity-icon">💳</span>
                  <div className="activity-details">
                    <p>
                      <strong>Payment Order #5678</strong> approved
                    </p>
                    <small>Nov 15, 2024, 2:30 PM</small>
                  </div>
                </div>
              </li>
              <li>
                <div className="activity-item">
                  <span className="activity-icon">🚚</span>
                  <div className="activity-details">
                    <p>
                      <strong>Waybill #7890</strong> processed
                    </p>
                    <small>Nov 14, 2024, 4:15 PM</small>
                  </div>
                </div>
              </li>
              <li>
                <div className="activity-item">
                  <span className="activity-icon">🚚</span>
                  <div className="activity-details">
                    <p>
                      <strong>Waybill #8800</strong> processed
                    </p>
                    <small>Nov 16, 2024, 5:15 PM</small>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* activity summary chart */}
          <div className="chats-section summary">
            <div className="chart summary-chart">
              <h3>Activity Summary Chart</h3>
              <Bar data={summaryData} options={summaryOptions} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
