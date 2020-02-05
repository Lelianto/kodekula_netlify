// import React from 'react';
// import '../styles/css/articlePage.css';
// import { withRouter, Link } from 'react-router-dom';
// import { connect } from 'unistore/react';
// import { actions, store } from '../stores/store';
// import Header from '../components/header';
// import Footer from '../components/footer';
// import InterestList from '../components/interestList';
// import PopularList from '../components/popularList';
// import AccessDetailArticle from '../components/detailArticle';
// import axios from 'axios';

// const listContent = [ 'Artikel' ];

// class detailArticlePage extends React.Component {
// 	state = {
// 		tags: [ 'Python', 'Javascript', 'Django', 'ReactJS', 'Java', 'GoLang' ],
// 		icon: [ 'bug_report', 'build', 'android', 'camera_enhance', 'autorenew', 'code' ],
// 		article: [
// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit',
// 			'Alias corrupti velit illum sequi quas omnis esse ipsam sed aut delectus blanditiis',
// 			'Deserunt dolor temporibus enim deleniti a!',
// 			'Pariatur exercitationem atque non excepturi, cum',
// 			'reiciendis mollitia error maxime earum totam, placeat quod! Ipsa, eum'
// 		]
// 	};
// 	// componentDidMount = () => {
// 	// 	const req = {
// 	// 	  method: "get",
// 	// 	  url: store.getState().baseUrl+"/posting/toplevel"
// 	// 	}; 
// 	// 	const self = this
// 	// 	axios(req)
// 	// 		.then(function (response) {
// 	// 			store.setState({ 
// 	// 				allArticleDatabase: response.data.query_data, 
// 	// 				isLoading:false
// 	// 			})
// 	// 			return response
// 	// 		})
// 	// 		.catch((error)=>{
// 	// 			store.setState({ 
// 	// 				isLoading: false
// 	// 			})
// 	// 			switch (error.response.status) {
// 	// 				case 401 :
// 	// 					self.props.history.push('/login')
// 	// 					break
// 	// 				case 403 :
// 	// 					self.props.history.push('/403')
// 	// 					break
// 	// 				case 404 :
// 	// 					self.props.history.push('/404')
// 	// 					break
// 	// 				case 500 :
// 	// 					self.props.history.push('/500')
// 	// 					break
// 	// 				default :
// 	// 					break
// 	// 			}
// 	// 		})
// 	// 	  };
// 	seeAll = () => {
// 		const suggestionList = document.getElementById('suggest-list');
// 		const showOrHide = document.getElementById('seeAll');
// 		if (suggestionList.style.display === 'none') {
// 			suggestionList.style.display = 'block';
// 			showOrHide.innerHTML = 'Sembunyikan...';
// 		} else {
// 			suggestionList.style.display = 'none';
// 			showOrHide.innerHTML = 'Lihat Semua...';
// 		}
// 	};
// 	render() {
// 		// this.props.allArticleDatabase['ID']
// 		// let allArticleDatabase = this.props.allArticleDatabase[0]
// 		// console.log('isi all query',allArticleDatabase)
// 		// let userData = allArticleDatabase.user_data 
// 		// let postingDetail = allArticleDatabase.posting_detail
// 		return (
// 			<React.Fragment>
// 				<Header />
// 				<div className="container-fluid pt-4">
// 					<div className="row" style={{ fontFamily: 'liberation_sansregular' }}>
// 						<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-5">
// 							<InterestList tags={this.state.tags} icon={this.state.icon} seeAll={this.seeAll} />
// 						</div>
// 						<div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5 pl-0 pr-0">
// 							<AccessDetailArticle />
// 						</div>
// 						<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-5">
// 							<PopularList article={this.state.article} />
// 						</div>
// 					</div>
// 				</div>
// 				<Footer />
// 			</React.Fragment>
// 		);
// 	}
// }
// export default connect('allArticleDatabase', actions)(withRouter(detailArticlePage));
