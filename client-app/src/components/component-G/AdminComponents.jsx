import React, { Component } from 'react';
import AdminService from '../../services/service-G/AdminService';

class AdminComponents extends Component {
    constructor(props){
        super(props) 

            this.state = {
                 admins: []
            }
            this.addAdmin = this.addAdmin.bind(this);
            this.editAdmin = this.editAdmin.bind(this);
            this.deleteAdmin = this.deleteAdmin.bind(this);
    }
 
    deleteAdmin(id){
        AdminService.deleteAdmin(id).then( res => {
           this.setState({admins: this.state.admins.filter(admin => admin.id !== id)});
        });
    }

    viewAdmin(id){
        this.props.history.push(`/view-admin/${id}`);
    }
    editAdmin(id){
           this.props.history.push(`/update-Registration/${id}`);
    }
    componentDidMount(){
        AdminService.getAdmins().then((res) => {
             this.setState({admins: res.data});
        });
    }
    
    addAdmin(){
        this.props.history.push('/Admin-Registration');
    }

    render() {
        return (
            <div>
               <h2 className="text-center bb adm-hdr-main">Admin Details</h2> 
               <div className = "">
                    <button className = "add-ad" onClick={this.addAdmin}> Admin Registration</button>
               </div>
               <div className="box-add-details-all">
                     <table className="table table-striped table-bordered">
                         <thead>
                              <tr>
                               
                                  <th>Full Name</th>
                                  <th>NIC</th>
                                  <th>Gender</th>
                                  <th>Birthday</th>
                                  <th>Address</th>
                                  <th>Email</th>
                                  <th>Phone No</th>
                                  <th>Actions</th>
                              </tr>
                         </thead>
                             <tbody>
                                 {
                                     this.state.admins.map(
                                         admin =>
                                         <tr key = {admin.id}>
                                             
                                              <td> {admin.fullName} </td>
                                              <td>{admin.nic}</td>
                                              <td>{admin.gender}</td>
                                              <td>{admin.birthday}</td>
                                              <td>{admin.address}</td>
                                              <td>{admin.email}</td>
                                              <td>{admin.phoneNo}</td>
                                              <td>
                                                  <button onClick={ () => this.editAdmin(admin.id)} className="btn btn-info">Update</button>
                                                  <button onClick={ () => this.deleteAdmin(admin.id)} className="btn btn-danger">Delete</button>
                                                  <button onClick={ () => this.viewAdmin(admin.id)} className="btn btn-info">View</button>
                                              </td>

                                         </tr>
                                     )
                                 }
                             </tbody>
                     </table>
               </div>
            </div>
        );
    }
}

export default AdminComponents;

