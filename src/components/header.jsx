import React from 'react';
import '../styles/css/header.css';
import '../styles/css/bootstrap.min.css';
import logo from '../images/NewLogo.png';
import user from '../images/user.png';
import notification from '../images/bell.png';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions, store } from '../stores/store';

const Header = (props) => {
	if (localStorage.getItem('email') === null) {
		return (
			<header>
				<nav class="navbar navbar-expand-lg">
					<Link className="logo-kodekula" to="/" onClick={()=>store.setState({
						location : 'home',
						articleTitle:'',
						newArticle:'',
						imageUrl:'',
						imageArticleUrl:'',
						startComment: false,
						menuBarUpload:false
						})}>
						<img  src={logo} alt="img" width='10%'/>
					</Link>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon" />
					</button>

					<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
						<div className="col-md-1">
							<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
								<li class="nav-item">
									<Link class="nav-link" to="/artikel" onClick={()=>store.setState({
										location : 'article',
										articleTitle:'',
										newArticle:'',
										imageUrl:'',
										imageArticleUrl:'',
										startComment: false,
										menuBarUpload:false
										})}>
										Artikel
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-md-1">
							<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
								<li class="nav-item">
									<Link class="nav-link" to="/pertanyaan" onClick={()=>store.setState({
										location : 'question',
										articleTitle:'',
										newArticle:'',
										imageUrl:'',
										imageArticleUrl:'',
										startComment: false,
										menuBarUpload:false
										})}>
										Pertanyaan
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-md-7">
							<form class="search-component form-inline my-2 my-lg-0">
								<div className="col-md-11" style={{ paddingRight: '0px' }}>
									<input
										class="input-search-component form-control mr-sm-5"
										type="search"
										placeholder="Pencarian"
										style={{ width: '100%' }}
									/>
								</div>
								<div className="col-md-1" style={{ paddingLeft: '5px' }}>
									<button onClick={()=>store.setState({location : 'search',
									articleTitle:'',
									newArticle:'',
									imageUrl:'',
									imageArticleUrl:'',
									startComment: false,
									menuBarUpload:false
									})}
										class="btn btn-info my-2 my-sm-0"
										type="submit"
										style={{ paddingLeft: '25px', paddingRight: '25px' }}
									>
										Cari
									</button>
								</div>
							</form>
						</div>
						<div className="col-md-1" />
						<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
							<li class="nav-item">
								<Link class="nav-link" to="/daftar" onClick={()=>store.setState({
									articleTitle:'',
									newArticle:'',
									imageUrl:'',
									imageArticleUrl:'',
									startComment: false,
									menuBarUpload:false
									})} >
									Daftar
								</Link>
							</li>
						</ul>
						<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
							<li class="nav-item">
								<Link class="nav-link" to="/masuk" onClick={()=>store.setState({
									articleTitle:'',
									newArticle:'',
									imageUrl:'',
									imageArticleUrl:'',
									startComment: false,
									menuBarUpload:false
									})} >
									Masuk
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		);
	} else {
		return (
			<header>
				<nav class="navbar navbar-expand-lg">
					<Link className="logo-kodekula" to="/">
						<img style={{ width: '10%' }} src={logo} alt="img" />
					</Link>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon" />
					</button>

					<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
						<div className="col-md-1">
							<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
								<li class="nav-item">
									<Link class="nav-link" to="/artikel" onClick={()=>store.setState({
										location : 'article',
										articleTitle:'',
										newArticle:'',
										imageUrl:'',
										imageArticleUrl:'',
										startComment: false,
										menuBarUpload:false
										})}>
										Artikel
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-md-1">
							<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
								<li class="nav-item">
									<Link class="nav-link" to="/pertanyaan" onClick={()=>store.setState({
										location : 'question',
										articleTitle:'',
										newArticle:'',
										imageUrl:'',
										imageArticleUrl:'',
										startComment: false,
										menuBarUpload:false
										})}>
										Pertanyaan
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-md-7">
							<form class="search-component form-inline my-2 my-lg-0">
								<div className="col-md-11" style={{ paddingRight: '0px' }}>
									<input
										class="input-search-component form-control mr-sm-5"
										type="search"
										placeholder="Pencarian"
										style={{ width: '100%' }}
									/>
								</div>
								<div className="col-md-1" style={{ paddingLeft: '5px' }}>
									<button onClick={()=>store.setState({location : 'search',
									articleTitle:'',
									newArticle:'',
									imageUrl:'',
									imageArticleUrl:'',
									startComment: false,
									menuBarUpload:false})}
										class="btn btn-info my-2 my-sm-0"
										type="submit"
										style={{ paddingLeft: '25px', paddingRight: '25px' }}
									>
										Cari
									</button>
								</div>
							</form>
						</div>
						<div className="col-md-1" />
						<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
							<li class="nav-item">
								<Link class="nav-link" to="/notification" onClick={()=>store.setState({
									articleTitle:'',
									newArticle:'',
									imageUrl:'',
									imageArticleUrl:'',
									startComment: false,
									menuBarUpload:false})}>
									<img src={notification} alt="img" width="30px" />
								</Link>
							</li>
						</ul>
						<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
							<li class="nav-item dropleft">
								<Link
									class="nav-link dropdown-toggle"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									<img src={user} alt="img" style={{ borderRadius: '50%' }} width="30px" />
								</Link>
								<div class="dropdown-menu" style={{ marginTop: '0px', marginRight: '0px' }}>
									<Link class="dropdown-item" to="/profil" onClick={()=>store.setState({location : 'profil', articleTitle:'',
									newArticle:'',
									imageUrl:'',
									imageArticleUrl:'',
									startComment: false,
									menuBarUpload:false
									})}>
										Profil
									</Link>
									<Link class="dropdown-item" to="/pengaturan-akun">
										Pengaturan Akun
									</Link>
									<Link class="dropdown-item" to="/" onClick={() => props.afterSignOut()}>
										Keluar
									</Link>
								</div>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
};

export default connect('', actions)(withRouter(Header));
