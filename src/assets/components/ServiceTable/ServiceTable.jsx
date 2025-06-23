import React, { useState, useEffect, useRef } from "react";
import mockServices from "./mockServices";

export default function ServiceTable() {
  const [services, setServices] = useState([]); // Current page data
  const [filtered, setFiltered] = useState([]); // Data to display (filtered or paginated)
  const [currentUrl, setCurrentUrl] = useState("/salons/service/?limit=100");
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [allData, setAllData] = useState(null); // All data for search
  const [searchValue, setSearchValue] = useState("");
  const allDataFetched = useRef(false);
  const [useMock, setUseMock] = useState(true);
  const [mockPage, setMockPage] = useState(1);
  const MOCK_PAGE_SIZE = 100;

  // Fetch current page data (API)
  useEffect(() => {
    if (searching || useMock) return;
    setLoading(true);
    fetch("http://20.193.149.47:2242" + currentUrl)
      .then((res) => res.json())
      .then((data) => {
        const resultArray = Array.isArray(data.results) ? data.results : [];
        setServices(resultArray);
        setFiltered(resultArray);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
      })
      .catch(() => {
        setServices([]);
        setFiltered([]);
      })
      .finally(() => setLoading(false));
  }, [currentUrl, searching, useMock]);

  // Fetch all data for search (API)
  const fetchAllData = async () => {
    setLoading(true);
    let url = "/salons/service/?limit=100";
    let results = [];
    try {
      while (url) {
        const data = await fetch("http://20.193.149.47:2242" + url).then((r) => r.json());
        results = results.concat(data.results || []);
        url = data.next;
      }
      setAllData(results);
      allDataFetched.current = true;
      return results;
    } catch {
      setAllData([]);
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Handle search input
  const handleSearch = async (value) => {
    setSearchValue(value);
    const query = value.toLowerCase();
    if (!query) {
      setSearching(false);
      setFiltered(useMock ? mockServices.slice(0, MOCK_PAGE_SIZE) : services);
      return;
    }
    setSearching(true);
    if (useMock) {
      const filteredList = mockServices.filter((service) =>
        (service.name || "").toLowerCase().includes(query)
      );
      setFiltered(filteredList.slice(0, MOCK_PAGE_SIZE));
      setSearching(false);
    } else {
      let data = allData;
      if (!allDataFetched.current) {
        data = await fetchAllData();
      }
      const filteredList = (data || []).filter((service) =>
        (service.name || "").toLowerCase().includes(query)
      );
      setFiltered(filteredList);
      setSearching(false);
    }
  };

  // When using mock data, handle pagination and search locally
  useEffect(() => {
    if (!useMock) return;
    setLoading(true);
    let data = mockServices;
    if (searchValue) {
      const query = searchValue.toLowerCase();
      data = data.filter((service) => (service.name || "").toLowerCase().includes(query));
    }
    const start = (mockPage - 1) * MOCK_PAGE_SIZE;
    const end = start + MOCK_PAGE_SIZE;
    setFiltered(data.slice(start, end));
    setLoading(false);
  }, [useMock, mockPage, searchValue]);

  // Table header (always visible)
  const TableHeader = () => (
    <thead className="table-primary">
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Duration</th>
        <th>Category</th>
      </tr>
    </thead>
  );

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg border-0 mb-4">
            <div className="card-header bg-primary text-white d-flex align-items-center justify-content-between">
              <h4 className="mb-0">Services Table</h4>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="mockSwitch"
                  checked={useMock}
                  onChange={e => {
                    setUseMock(e.target.checked);
                    setMockPage(1);
                    setSearchValue("");
                  }}
                />
                <label className="form-check-label" htmlFor="mockSwitch">
                  Use Mock Data
                </label>
              </div>
            </div>
            <div className="card-body bg-light">
              <div className="row mb-3">
                <div className="col-md-6 mb-2 mb-md-0">
                  <div className="input-group">
                    <span className="input-group-text bg-white"><i className="bi bi-search"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search services by name..."
                      value={searchValue}
                      onChange={e => handleSearch(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-md-end align-items-center">
                  {/* Pagination */}
                  {!searchValue && !useMock && (
                    <nav>
                      <ul className="pagination mb-0">
                        <li className={`page-item${!prevUrl ? " disabled" : ""}`}>
                          <button className="page-link" onClick={() => setCurrentUrl(prevUrl)} disabled={!prevUrl}>
                            Previous
                          </button>
                        </li>
                        <li className={`page-item${!nextUrl ? " disabled" : ""}`}>
                          <button className="page-link" onClick={() => setCurrentUrl(nextUrl)} disabled={!nextUrl}>
                            Next
                          </button>
                        </li>
                      </ul>
                    </nav>
                  )}
                  {/* Mock pagination */}
                  {!searchValue && useMock && (
                    <nav>
                      <ul className="pagination mb-0">
                        <li className={`page-item${mockPage === 1 ? " disabled" : ""}`}>
                          <button className="page-link" onClick={() => setMockPage((p) => Math.max(1, p - 1))} disabled={mockPage === 1}>
                            Previous
                          </button>
                        </li>
                        <li className="page-item disabled">
                          <span className="page-link bg-white text-primary fw-bold">
                            Page {mockPage} / {Math.ceil(mockServices.length / MOCK_PAGE_SIZE)}
                          </span>
                        </li>
                        <li className={`page-item${mockPage * MOCK_PAGE_SIZE >= mockServices.length ? " disabled" : ""}`}>
                          <button className="page-link" onClick={() => setMockPage((p) => p + 1)} disabled={mockPage * MOCK_PAGE_SIZE >= mockServices.length}>
                            Next
                          </button>
                        </li>
                      </ul>
                    </nav>
                  )}
                </div>
              </div>
              <div className="table-responsive rounded-3">
                <table className="table table-striped table-hover align-middle mb-0">
                  <TableHeader />
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="4" className="text-center py-5">
                          <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </td>
                      </tr>
                    ) : filtered && filtered.length > 0 ? (
                      filtered.map((item, i) => (
                        <tr key={i} style={{ cursor: "pointer" }}>
                          <td>{item.name}</td>
                          <td>₹ {item.price}</td>
                          <td>{item.duration}</td>
                          <td>{item.category}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center py-5 text-secondary">
                          No Data Available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
