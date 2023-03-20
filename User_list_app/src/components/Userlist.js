import { LockOutlined } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import photo1 from "../Assests/photo1.jpeg";
import photo2 from "../Assests/photo2.jpeg";
import photo3 from "../Assests/photo3.jpeg";
import "./Userlist.css";

function Userlist() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8 table">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="d-flex justify-content-start">
                  Name
                </th>
                <th scope="col border-none">Status</th>
                <th scope="col border-none">Access</th>
                <th scope="col border-none"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="row">
                    <div className="col-3">
                      <img className="imgs" src={photo1} alt="" />
                    </div>
                    <div
                      className="col"
                      style={{
                        overflow: "hidden",
                      }}
                    >
                      <div className="row user_name">Jana Swassmonn</div>
                      <div className="row user_mail">
                        batz.mortmera@yahoo.com{" "}
                      </div>
                    </div>
                  </div>
                </td>
                <td style={{ fontWeight: "600", color: "#60e460" }}>Active</td>
                <td>Owner</td>
                <td>
                  <LockOutlined />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="row">
                    <div className="col-3">
                      <img className="imgs" src={photo3} alt="" />
                    </div>
                    <div
                      className="col"
                      style={{
                        overflow: "hidden",
                      }}
                    >
                      <div className="row user_name">Jube Bowman</div>
                      <div className="row user_mail">
                        uallreich.owen@kristin.biz
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <select>
                    <option value="Inactive">Inactive</option>
                    <option value="Active">Active</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option value="Manager">Manager</option>
                    <option value="rigatoni">Read</option>
                  </select>
                </td>
                <td>
                  <DeleteIcon />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="row">
                    <div className="col-3">
                      <img className="imgs" src={photo2} alt="" />
                    </div>
                    <div
                      className="col"
                      style={{
                        overflow: "hidden",
                      }}
                    >
                      <div className="row user_name">Leon Hunt</div>
                      <div className="row user_mail">
                        uallreich.owen@kristin.biz
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <select>
                    <option value="Inactive">Inactive</option>
                    <option value="Active">Active</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option value="Manager">Manager</option>
                    <option value="rigatoni">Read</option>
                  </select>
                </td>
                <td>
                  <DeleteIcon />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="row">
                    <div className="col-3">
                      <img className="imgs" src={photo3} alt="" />
                    </div>
                    <div
                      className="col"
                      style={{
                        overflow: "hidden",
                      }}
                    >
                      <div className="row user_name">Nettnom Prima</div>
                      <div className="row user_mail">
                        uallreich.owen@kristin.biz
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <select>
                    <option value="Inactive">Inactive</option>
                    <option value="Active">Active</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option value="Manager">Manager</option>
                    <option value="rigatoni">Read</option>
                  </select>
                </td>
                <td>
                  <DeleteIcon />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="row">
                    <div className="col-3">
                      <img className="imgs" src={photo2} alt="" />
                    </div>
                    <div
                      className="col"
                      style={{
                        overflow: "hidden",
                      }}
                    >
                      <div className="row user_name">Nombexo Mabandia</div>
                      <div className="row user_mail">
                        uallreich.owen@kristin.biz
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <select>
                    <option value="Inactive">Inactive</option>
                    <option value="Active">Active</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option value="Manager">Manager</option>
                    <option value="rigatoni">Read</option>
                  </select>
                </td>
                <td>
                  <DeleteIcon />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="row">
                    <div className="col-3">
                      <img className="imgs" src={photo1} alt="" />
                    </div>
                    <div
                      className="col"
                      style={{
                        overflow: "hidden",
                      }}
                    >
                      <div className="row user_name">Nwoye Akachi</div>
                      <div className="row user_mail">
                        uallreich.owen@kristin.biz
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <select>
                    <option value="Inactive">Inactive</option>
                    <option value="Active">Active</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option value="Manager">Manager</option>
                    <option value="rigatoni">Read</option>
                  </select>
                </td>
                <td>
                  <DeleteIcon />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="row">
                    <div className="col-3">
                      <img className="imgs" src={photo2} alt="" />
                    </div>
                    <div
                      className="col"
                      style={{
                        overflow: "hidden",
                      }}
                    >
                      <div className="row user_name">Phawta Tuntayekul</div>
                      <div className="row user_mail">
                        uallreich.owen@kristin.biz
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <select>
                    <option value="Inactive">Inactive</option>
                    <option value="Active">Active</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option value="Manager">Manager</option>
                    <option value="rigatoni">Read</option>
                  </select>
                </td>
                <td>
                  <DeleteIcon />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="row">
                    <div className="col-3">
                      <img className="imgs" src={photo2} alt="" />
                    </div>
                    <div
                      className="col"
                      style={{
                        overflow: "hidden",
                      }}
                    >
                      <div className="row user_name">Sin Jakobsson</div>
                      <div className="row user_mail">
                        uallreich.owen@kristin.biz
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <select>
                    <option value="Inactive">Inactive</option>
                    <option value="Active">Active</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option value="Manager">Manager</option>
                    <option value="rigatoni">Read</option>
                  </select>
                </td>
                <td>
                  <DeleteIcon />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="row">
                    <div className="col-3">
                      <img className="imgs" src={photo2} alt="" />
                    </div>
                    <div
                      className="col"
                      style={{
                        overflow: "hidden",
                      }}
                    >
                      <div className="row user_name">Paulina Gayoso</div>
                      <div className="row user_mail">
                        uallreich.owen@kristin.biz
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <select>
                    <option value="Inactive">Inactive</option>
                    <option value="Active">Active</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option value="Manager">Manager</option>
                    <option value="rigatoni">Read</option>
                  </select>
                </td>
                <td>
                  <DeleteIcon />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-4 d-flex align-items-center">
          <div className="card-container">
            <img className="round" src={photo2} alt="user" />
            <h4 style={{ fontWeight: "900" }}>
              Leon Hunt
              <span style={{ fontSize: "41px", color: "#60e460" }}>
                <sup>.</sup>
              </span>
            </h4>
            <p style={{ fontWeight: "600" }}>uallreich.owen@kristin.biz</p>
            <h5
              className="mb-3"
              style={{ fontSize: "18px", fontWeight: "900" }}
            >
              Your Plan: Standard
            </h5>
            <div className="buttons">
              <button
                className="primary w-75"
                style={{ color: "white", fontWeight: "600" }}
              >
                Active User
              </button>
            </div>
            <div className="col mt-3 mx-3">
              <div className="row">
                <strong>Plan Uses</strong>
              </div>
              <div className="row main mt-1">
                <div className="skill uses"></div>
              </div>
            </div>
            <div className="row mb-3 mt-3">
              <div className="col" style={{ borderRight: "3px solid grey" }}>
                <div
                  className="row"
                  style={{
                    fontWeight: "700",
                    fontSize: "30px",
                    marginLeft: "21px",
                  }}
                >
                  2450
                </div>
                <div
                  className="row"
                  style={{ marginLeft: "21px", fontSize: "80%" }}
                >
                  clicks reviewed
                </div>
              </div>
              <div className="col">
                <div
                  className="row"
                  style={{
                    fontWeight: "700",
                    fontSize: "30px",
                    marginLeft: "10px",
                  }}
                >
                  5000
                </div>
                <div
                  className="row"
                  style={{ marginLeft: "10px", fontSize: "80%" }}
                >
                  Monthly clicks
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userlist;
