import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions, store } from '../stores/store';
import Header from '../components/header';
import Footer from '../components/footer';
import InterestList from '../components/interestList';
import PopularList from '../components/popularList';
import UserOwnFile from '../components/userOwnFile';
import axios from 'axios';

const listContent = [ 'Artikel', 'Pertanyaan' ];

class Home extends React.Component {
	state = {
		userInterest: [],
		interestList : [],
		filterInterest : [],
		excludeTags : [],
		postingList : [],
		article: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit',
			'Alias corrupti velit illum sequi quas omnis esse ipsam sed aut delectus blanditiis',
			'Deserunt dolor temporibus enim deleniti a!',
			'Pariatur exercitationem atque non excepturi, cum',
			'reiciendis mollitia error maxime earum totam, placeat quod! Ipsa, eum'
		]
	};

	componentDidMount = async () => {
		await this.getUserTags()
		await this.getPostingList()
    };

	getUserTags = async () => {
		const tags = {
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
		
        await axios(tags)
			.then(async (response) => {
				await this.setState({userInterest : response.data.user_tag_data})
				await store.setState({userInterest : response.data.user_tag_data})
			})
			.catch(async (error) => {
				await console.warn(error)
			})
			
			await this.getAllTags()
		}
		
	getAllTags = async () => {
		const tags = {
			method: 'get',
			url: 'https://kodekula.com/tags',
			headers: {
				'Content-Type': 'application/json'
			}
		};
		await axios(tags)
		.then(async (response) => {
			await this.setState({interestList : response.data})
			await store.setState({interestList : response.data})
		})
		.catch(async (error) => {
			await console.warn(error)
		})
		
		await this.filterTags()
		
	}
	
	filterTags = async () => {
		const interestList = this.state.interestList
		const userInterest = this.state.userInterest
		let filterInterest = []
		let excludeTags = []
		let i
		for (i=0; i<interestList.length; i++) {
			if (userInterest.includes(interestList[i].name)) {
				filterInterest.push(interestList[i])
			} else {
				excludeTags.push(interestList[i])
			}
		}

		console.warn('exclude', excludeTags)

		await this.setState({filterInterest : filterInterest, excludeTags : excludeTags})
		await store.setState({filterInterest : filterInterest, excludeTags : excludeTags})
	}

	getPostingList = async () => {
		const posting = {
			method: 'get',
			url: 'https://kodekula.com/posting/toplevel',
			headers: {
				'Content-Type': 'application/json'
			}
		};
		await axios(posting)
		.then(async (response) => {
			await this.setState({postingList : response.data.query_data})
			// await store.setState({interestList : response.data})
			console.warn('posting list', this.state.postingList)
		})
		.catch(async (error) => {
			await console.warn(error)
		})
	}

	seeAll = () => {
		const suggestionList = document.getElementById('suggest-list');
		const showOrHide = document.getElementById('seeAll');
		if (suggestionList.style.display === 'none') {
			suggestionList.style.display = 'block';
			showOrHide.innerHTML = 'Sembunyikan...';
		} else {
			suggestionList.style.display = 'none';
			showOrHide.innerHTML = 'Lihat Semua...';
		}
	};

	checkAll = () => {
		const checkState = document.getElementById('all');
		const userInterest = this.state.userInterest
		if (checkState.checked === true) {
			userInterest.map((item)=>{
				const changeCheckedStatus = document.getElementById(item)
				changeCheckedStatus.checked = true
			})
		} else {
			userInterest.map((item)=>{
				const changeCheckedStatus = document.getElementById(item)
				changeCheckedStatus.checked = false
			})
		}
	}

	detailArticle = async (event)=> {
        await store.setState({
            userId:event
		})
        await this.props.history.push('/artikel/'+event)
	}

	goToDetailQuestion = async (event)=> {
        store.setState({
            userId:event
		})
		console.log('isi event', event)
		console.log(store.getState().userId)
        await this.props.history.push('/pertanyaan/'+event)
    }
	
	render() {
		return (
			<React.Fragment>
				<Header />
				<div className="container-fluid pt-4">
					<div className="row" style={{ fontFamily: 'liberation_sansregular' }}>
						<div className="col-lg-2 col-md-2 col-sm-12 col-12 mt-5">
							<InterestList tags={this.state.filterInterest} excludeTags={this.state.excludeTags} seeAll={this.seeAll} checkAll={()=>this.checkAll()}/>
						</div>
						<div className="col-lg-7 col-md-7 col-sm-12 col-12 mt-5 pl-0 pr-0">
							{this.state.postingList.map((content, i) => <UserOwnFile typeContent={content.posting_detail.content_type} content={content} detailArticle={(e)=>this.detailArticle(e)} goToDetailQuestion={(e)=>this.goToDetailQuestion(e)}/>)}
						</div>
						<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-5">
							<PopularList article={this.state.article} />
						</div>
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}
export default connect('responseData', actions)(withRouter(Home));
