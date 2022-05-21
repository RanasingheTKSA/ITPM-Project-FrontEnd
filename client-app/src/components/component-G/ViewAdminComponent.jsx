import React, { Component } from 'react';
import AdminService from '../../services/service-G/AdminService';
import Pdf from "react-to-pdf";

const ref = React.createRef();
class ViewAdminComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
             id: this.props.match.params.id,
             admin: {}
        }
    }

    componentDidMount(){
          AdminService.getAdminById(this.state.id).then( res => {
              this.setState({admin: res.data});
          })
    }
    
    render() {
        return (
            <div>
               <div className="bg-red-prf">
        <div className="spacepcus">
          <img
            className="img-view-cus"
            src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1651215017/1200px-User-admin.svg_dysvs7.png"
          ></img>

          <div className="Pdfprecus">
            <div className="cusdph">
              <div className="profile-hdr">
                <u>Admin Profile</u>
              </div>
              <div className="btnprofcus">
                <a
                  className="profile-btn-cus"
                  href="http://localhost:3000/admins"
                >
                  Back to AllAdmin Page
                </a>
                <a
                  className="profile-btn-cus"
                  href="http://localhost:3000/update-Registration/''"
                >
                  Update Profile <i class="fa fa-edit"></i>
                </a>
                <a
                  className="profile-btn-cus"
                  href="http://localhost:3000/admins"
                >
                  Delete Profile <i class="fa fa-trash-o"></i>
                </a>
                <a className="profile-btn-cus" href="#pdfcus">
                  Print Page <i class="fa fa-file-pdf-o"></i>
                </a>
              </div>
            </div>
            <div className="cusdptwo">
              <div className="card-body">
                <div className="row">
                  <div className="flex-cus-view">
                    <label className="view-lbl">Admin Name :</label>
                    <div className="view-div-flx">
                      {this.state.admin.fullName}
                    </div>
                  </div>
                  <div className="flex-cus-view">
                    <label className="view-lbl">Admin NIC :</label>
                    <div className="view-div-flx">
                      {this.state.admin.nic}
                    </div>
                  </div>
                  <div className="flex-cus-view">
                    <label className="view-lbl">Admin Gender :</label>
                    <div className="view-div-flx">
                      {this.state.admin.gender}
                    </div>
                  </div>
                  <div className="flex-cus-view">
                    <label className="view-lbl">Admin birthday :</label>
                    <div className="view-div-flx">
                      {this.state.admin.birthday}
                    </div>
                  </div>
                  <div className="flex-cus-view">
                    <label className="view-lbl">Admin Address :</label>
                    <div className="view-div-flx">
                      {this.state.admin.address}
                    </div>
                  </div>
                  <div className="flex-cus-view">
                    <label className="view-lbl">Admin Email :</label>
                    <div className="view-div-flx">
                      {this.state.admin.email}
                    </div>
                  </div>
                  <div className="flex-cus-view">
                    <label className="view-lbl">Admin Phone :</label>
                    <div className="view-div-flx">
                      {this.state.admin.phoneNo}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>

          <br></br>
          <br></br>
          <hr></hr>

          <section id="pdfcus">
            <center>
              <h4 className="centercus">
                PDF Preview <i class="fa fa-file-pdf-o"></i>
              </h4>
            </center>
            <div className="cusabcpdf">
              <div className="pdvssacus" ref={ref}>
                <div className="Pdfprecus">
                  <div className="pdfdatacus">
                    <h3>Hi, I'm {this.state.admin.fullName} </h3>
                    <br></br>
                    <h5 className="cuslogdata">Personal-Data</h5>
                    <hr></hr>
                    <div className="spaceforcuspdf">
                      <i class="fa fa-address-card-o"></i> NIC :{" "}
                      <b> {this.state.admin.nic}</b>{" "}
                    </div>
                    <div className="spaceforcuspdf">
                      <i class="fa fa-male,fa fa-female"></i> Gender:{" "}
                      <b> {this.state.admin.gender}</b>{" "}
                    </div>
                    <div className="spaceforcuspdf">
                      <i class="fa fa-calendar"></i> Birthday :{" "}
                      <b> {this.state.admin.birthday} </b>
                    </div>
       
                    <div className="spaceforcuspdf">
                      <i class="fa fa-home"></i> Address:{" "}
                      <b> {this.state.admin.address}</b>{" "}
                    </div>
                    <div className="spaceforcuspdf">
                      <i class="fa fa-envelope"></i> Email:
                      <b> {this.state.admin.email}</b>{" "}
                    </div>
                    <div className="spaceforcuspdf">
                      <i class="fa fa-phone-square"></i> Phone No:
                      <b> {this.state.admin.phoneNo}</b>{" "}
                    </div>
                  </div>
                  <div className="pdfimgcus">
                    <img src="https://res.cloudinary.com/dff4rbfkn/image/upload/v1651826630/logo_gd13oe.png" />
                  </div>
                </div>
              </div>
              <div className="cuspdfss">
                <Pdf targetRef={ref} filename="adminDetails.pdf">
                  {({ toPdf }) => (
                    <button className="profile-btn-cus" onClick={toPdf}>
                      Generate Pdf <i class="fa fa-file-pdf-o"></i>
                    </button>
                  )}
                </Pdf>
              </div>
            </div>
          </section>
        </div>
      </div>
            </div>
        );
    }
}

export default ViewAdminComponent;