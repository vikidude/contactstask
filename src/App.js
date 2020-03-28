import React from 'react';
import './App.css';
import Modal from 'react-modal';
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      firstname: 'Vigneshwaran',
      lastname:'Eswaramoorthy',
      address: 'G2, Sivasakthi street, Tancy nagar, Velacherry, Chennai - 600042.',
      email: 'vigneshwaran@shienlogics.com',
      number: '9597299278',
      company: 'Shinelogics',
      userform: [
        {
          id: 1,
          firstname: 'Vigneshwaran',
          lastname:'Eswaramoorthy',
          company: 'Accenture',
          email:'vigneshwaransasurie@gmail.com',
          number:'9597299278',
          address:'Nallur Tiruppur'
        }, {
          id:0,
          firstname: 'Bhuvaneshwaran',
          lastname:'Eswaramoorthy',
          company: 'Naga Info solutions',
          email:'arunkumarjsrgi@gmail.com',
          number:'9597299278',
          address:'Naachipalayam Tiruppur'
        },
        {
          id: 2,
          firstname: 'Arunkumar',
          lastname:'Eswaramoorthy',
          company: 'Infosys',
          email:'viki@gmail.com',
          number:'9597299278',
          address:'Nallur Tiruppur'
        }, {
          id: 3,
          firstname: 'Manojkumar',
          lastname:'Manikam',
          company: 'Wipro',
          email:'manojkumarmanik@gmail.com',
          number:'9597299278',
          address:'Koolipalayam,Tiruppur'
        },
        {
          id: 4,
          firstname: 'Ganesan',
          lastname:'Marimuthu',
          company: 'Capgemini',
          email:'ganesanbe1234@gmail.com',
          number:'9597299278',
          address:'Vaikalmedu, Tiruppur'
        }, {
          id: 5,
          firstname: 'Vigneshprabu',
          lastname:'Ramasamy',
          company: 'Cognizant',
          email:'vpramasamy12@gmail.com',
          number:'9597299278',
          address:'Keezha theru, Bhavani'
        },
        {
          id: 6,
          firstname: 'Murugan',
          lastname:'Ponnusamy',
          company: 'Shinelogics',
          email:'murugan1520@gmail.com',
          number:'9597299278',
          address:'Metukadai,Thenkaasi'
        }, {
          id: 7,
          firstname: 'Dinesh',
          lastname:'Arumugam',
          company: 'The Hindu Tech',
          email:'dinesharumugam123@gmail.com',
          number:'9597299278',
          address:'Kowndampalayam, Coimbatore'
        }
      ],
      usercount: 0,
      userform1:[],
    }
    this.validate = this.validate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.baseState = this.state;
    this.state.userform1 = this.state.userform;
  }
  resetForm = () => {
    this.setState(this.baseState);
  }
  validate() {
    if (this.state.name.length > 3) {
      if (this.state.age.length > 1) {
        if (this.state.gender.length > 2) {
          if (this.state.email.length > 8) {
            if (this.state.number.length > 9) {
              if (this.state.userform.length > 0) {
                if (this.state.number !== this.state.userform[this.state.userform.length - 1].number && this.state.email !== this.state.userform[this.state.userform.length - 1].email) {
                  if (this.state.number.length === 10) {
                    if ((new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(this.state.email))) {
                      if ((parseInt(this.state.age)) >= 18) {
                        this.onSubmit();
                      } else {
                        alert('You are not an adult');
                      }
                    } else {
                      alert("Email is not valid");
                    }
                  } else {
                    alert('Enter a valid 10 digits number');
                  }
                } else {
                  alert('Number or email already exists');
                }
              } else {
                if (this.state.number.length === 10) {
                  if (new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(this.state.email)) {
                    console.log(parseInt(this.state.age) >= 18)
                    if (parseInt(this.state.age) >= 18) {
                      this.onSubmit();
                    } else {
                      alert('You are not an adult');
                    }
                  } else {
                    alert("Email is not valid");
                  }
                } else {
                  alert('Enter a valid 10 digits number');
                }
              }
            } else {
              alert("Number required!");
            }
          } else {
            alert("Email required!");
          }
        } else {
          alert("Gender required!");
        }
      } else {
        alert("Age required!");
      }
    } else {
      alert("Name required!");
    }

  }

  onSubmit() {
    this.state.userform.push({
      firstname: this.state.fname,lastname:this.state.lname,address: this.state.addressinfo, number: this.state.phone,
      email: this.state.mail, company: this.state.companyname
    });
    this.setState({ userform: this.state.userform });
    this.state.userform1 = this.state.userform;
    this.setState({ modalIsOpen: false });
  }

  radioHandlerMain(id) {
    for (let t in this.state.userform) {
      console.log(this.state.userform[t].id === parseInt(id))
      if (this.state.userform[t].id === parseInt(id)) {
        var st =this.state.userform[t];
        this.setState({
          firstname: st.firstname,
          lastname:st.lastname,
          company: st.company,
          email: st.email,
          phone: st.number,
          address:st.address
        },function(){          
        })
      }
    }
  }

    onSearch(key){
      this.setState({searchText:key});
      this.state.userform = [];
      for (let t in this.state.userform1) {
        if (((this.state.userform1[t].firstname).toLowerCase()).match(key)) {
          this.state.userform.push(this.state.userform1[t]);
          this.setState({userform:this.state.userform})
          console.log(this.state.userform)
        }
      }
    }

  render() {
    return (
      <div className="container-fill">
      
        <Modal
          isOpen={this.state.modalIsOpen}
          
        >
          <div>
            <span style={{display:'block',width:'100%'}}>First Name</span>
            <input type="text" value={this.state.fname} placeholder="Enter your full name" onChange={event => this.setState({ fname: event.target.value })} />

            <span >Last Name</span>
            <input type="text" value={this.state.ltname} placeholder="Enter your full name" onChange={event => this.setState({ lname: event.target.value })} />

            <label>Email</label>
            <input type="text" value={this.state.mail} placeholder="Enter your email" onChange={event => this.setState({ mail: event.target.value })} />

            <label>Phone</label>
            <input type="number" value={this.state.phone} placeholder="Enter your mobile number" onChange={event => this.setState({ phone: event.target.value })} />

            <label>Company</label>
            <input type="text" value={this.state.companyname} placeholder="Enter your company name" onChange={event => this.setState({ companyname: event.target.value })} />

            <label>Phone</label>
            <input type="text" value={this.state.addressinfo} placeholder="Enter your address" onChange={event => this.setState({ addressinfo: event.target.value })} />
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary" value="Submit" onClick={() => this.onSubmit()}>Submit</button>
            <button type="button" className="btn btn-secondary" onClick={() => this.setState({ modalIsOpen: !this.state.modalIsOpen })}>Close</button>
          </div>

        </Modal>

        <br />
        <br />
        <div style={{ display: 'flex', flexDirection: 'row',marginLeft:'8%' }}>
        <i class="fa fa-address-book" style={{fontSize:'45px',color:'#ff5050'}} aria-hidden="true"></i>

          <div style={{ flexDirection: 'column',display:'flex',marginLeft:'1%' }}>
            <h5>Contacts</h5>
            <span>Welcome to Contact Page</span>
          </div>
        </div>

        <br />
        
        <div className="row">
        <div className="col-sm-3 col-md-1"></div>
          <div className="col-sm-3 col-md-3" style={{ textAlign: 'left',display:'flex', flexDirection:'row' }}>
            <input style={{backgroundColor:'lightgrey',width:'100%', padding:'6%', border:'none',outline:'none',borderRadius:'25px',height:'5%'}} placeholder="Search Contacts" 
            onChange = {(event)=>this.onSearch(event.target.value)}
            />
            <i className="fa fa-search" style={{position:'absolute', left:'85%',top:'15%'}} onClick = {()=>this.onSearch(this.state.searchText)}></i>
          </div>
          <div className="col-sm-3 col-md-2" style={{textAlign:'right'}}>
            <button type="button" onClick={() => this.setState({ modalIsOpen: !this.state.modalIsOpen })}
              className="btn btn" style={{ backgroundColor: '#ff5050', color: 'white' }}>
              <i className="fa fa-plus"></i>
              {' '}Add Contact
        </button>
          </div>
        </div>


        <br />

        <div className="row" style={{ paddingBottom: '10%' }}>
        <div className="col-sm-3 col-md-1"></div>
          <div className="col-sm-3 col-md-5" style={{padding:'0px'}}>
            <DisplayUser userdata={this.state.userform} usercount={this.state.usercount}
              radioHandler={(event) => this.radioHandlerMain(event.target.value)}
            />
          </div>
          
          <div className="col-sm-3 col-md-5" style={{ backgroundColor: 'lightgrey',marginLeft:'2%' }}>
            
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
              <div style={{ height: '100px', width: '100px', borderRadius: '50%',
                display: 'table-cell',textAlign: 'center',backgroundColor: '#d3db60',marginTop:'5%'
              }}>
                <h3 style={{ color: 'black',marginTop:'30px' }}>{(this.state.firstname)[0]}{(this.state.lastname)[0]}</h3>
                </div> 
            </div>

            <div style={{ textAlign: 'center', paddingTop: '3%' }}>
            <h4>{this.state.name}</h4>
              <p style={{ color: 'grey', fontWeight: 'normal' }}>Product Manger of Tech development</p>
            </div>

            <div style={{ textAlign: 'justify', paddingLeft: '1%', paddingTop: '5%' }}>
              <div style={{ display: 'inline-block',display:'flex', flexDirection:'row' }}>

                <div style={{ display: 'flex', flexDirection: 'column', width:'40%' }}>
                  <span >Full name : </span>
                  <span style={{marginTop:'2%'}}>Email :</span>
                  <span style={{marginTop:'3%'}}>Phone :</span>
                  <span style={{marginTop:'3%'}}>Company :</span>
                  <span style={{marginTop:'2%'}}>Address :</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', marginLeft:'3%' }}>
                  <h6 >{this.state.firstname} {this.state.lastname}</h6>
                  <h6 style={{marginTop:'2%'}}>{this.state.email}</h6>
                  <h6 style={{marginTop:'3%'}}>{this.state.number}</h6>
                  <h6 style={{marginTop:'3%'}}>{this.state.company}</h6>
                  <h6 style={{marginTop:'2%'}}> {this.state.address}</h6>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

class UserCount extends React.Component {

  render() {
    return (
      <b>{this.props.usercount}</b>
    );
  }
}

class DisplayUser extends React.Component {

  render() {
    return (
      <div style={{textAlign:'left'}}>
        <table border='0' style={{width:'100%'}}>
          <thead>
            <tr>
              <th style={{backgroundColor:'lightgrey',padding:'10px'}}><i className="fa fa-plus"></i></th>
              <th style={{backgroundColor:'lightgrey'}}>Basic Info</th>
              <th style={{backgroundColor:'lightgrey'}}>Company</th>
            </tr>
          </thead>
          <tbody>
            {this.props.userdata.map((data, index) =>
              <tr key={index}>
                <td>
                  <input type="radio" value={data.id} name="selectforedit"
                    aria-label="Radio button for following text input"
                    onChange={event => this.props.radioHandler(event)} />
                </td>
                <td>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems:'baseline', }}>
                    <div style={{ height: '40px', width: '40px', borderRadius: '50%',
                display: 'table-cell',textAlign: 'center',backgroundColor: '#14f553',marginTop:'5%'
              }}>
                      <span style={{ color: 'black', position:'relative', top:'8px', left:'1px' }}>{(data.firstname)[0]} {(data.lastname)[0]}</span>
                    </div>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <h5 style={{marginLeft:'10px'}}>{data.firstname}</h5>
                    <h6 style={{marginLeft:'10px'}}>{data.email}</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <h6>{data.company}</h6></td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    );
  }
}