import React, { Component } from 'react';
import '../styles/css/menubar.css'
import Header from '../components/header';
import Footer from '../components/footer';
import ProfileSetting from '../components/userProfileSetting';
import MenuBarSetting from '../components/menuBarSetting';
import { store } from '../stores/store';
import axios from 'axios';
import Swal from 'sweetalert2';

class UserProfileSetting extends Component {
  state = {
    userData : {},
    userDetail : {},
    userTagData : [],
    oldPassword : '',
    newPassword : '',
    confirmPassword : ''
  }

  handlePage = (event)=>{
    this.props.history.replace('/pengaturan-akun'+event)
  }
  handleMainPage = (event1, event2)=>{
    store.setState({menuBarSetting:event2})
    this.props.history.replace('/pengaturan-akun'+event1)
  }
  componentDidMount = async () => {
    const user = {
			method: 'get',
			url: 'https://kodekula.com/users/me',
			headers: {
				'Content-Type': 'application/json',
				'Authorization':'Bearer ' + localStorage.getItem("token")
			},
			validateStatus : (status) => {
                return status < 500
            }
		  };
		
      await axios(user)
			.then(async (response) => {
        await this.setState({userData : response.data.user_data, userDetail : response.data.user_detail_data, userTagData : response.data.user_tag_data})
        console.warn('userdata', this.state.userData)
        console.warn('userdetail', this.state.userDetail)
			})
			.catch(async (error) => {
				await console.warn(error)
			})
  }
  changeState = async (event) => {
    await this.setState({[event.target.name] : event.target.value})
    console.warn('password lama', this.state.oldPassword)
    console.warn('password baru', this.state.newPassword)
    console.warn('password konfirmasi', this.state.confirmPassword)
  }
  changePassword = async () => {
    if (this.state.newPassword === this.state.confirmPassword) {
      const parameters = {
        username : this.state.userData.username,
        email : this.state.userData.email,
        tags : this.state.userTagData,
        password : this.state.oldPassword,
        password_new : this.state.newPassword
      }

      const password = {
        method: 'put',
        url: 'https://kodekula.com/users/me',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':'Bearer ' + localStorage.getItem("token")
        },
        validateStatus : (status) => {
              return status < 500
          },
        data : parameters
        };
        await axios(password)
        .then(async (response) => {
          await Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Ubah Password Berhasil',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(async (error) => {
          await console.warn(error)
        })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Uups...',
        text: 'Konfirmasi Password tidak sesuai'
    });
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <MenuBarSetting handleMainPage={(event1,event2)=>this.handleMainPage(event1,event2)}/>
            </div>
            <div className='col-md-9'>
              <ProfileSetting handlePage={(event)=>this.handlePage(event)} userData={this.state.userData} userDetail={this.state.userDetail} changeState={(e)=>this.changeState(e)} changePassword={()=>this.changePassword()}/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default UserProfileSetting;
