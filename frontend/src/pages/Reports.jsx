import Sidebar from "../components/Sidebar";

function Reports() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <h1 style={{ color: "white" }}>📄 Security Reports</h1>

        <div className="table-card">
          <h2>Generated Reports</h2>

          <table>
            <thead>
              <tr>
                <th>Report</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Security Audit</td>
                <td>Completed</td>
                <td>06-06-2026</td>
              </tr>

              <tr>
                <td>Threat Analysis</td>
                <td>Completed</td>
                <td>05-06-2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Reports;
