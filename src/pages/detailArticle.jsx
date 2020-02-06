import React from 'react';
import '../styles/css/articlePage.css';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions, store } from '../stores/store';
import Header from '../components/header';
import Footer from '../components/footer';
import InterestList from '../components/interestList';
import PopularList from '../components/popularList';
import AccessDetailArticle from '../components/detailQuestion';
import CommentArea from '../components/commentArea';
import PreviewComment from '../components/previewComment';
import axios from 'axios';
import user from '../images/user.png';
import ViewComment from '../components/viewComment';
import Accordion from '../components/accordionExplain'

class detailArticle extends React.Component {
	state = {
        comment : '',
		article: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit',
			'Alias corrupti velit illum sequi quas omnis esse ipsam sed aut delectus blanditiis',
			'Deserunt dolor temporibus enim deleniti a!',
			'Pariatur exercitationem atque non excepturi, cum',
			'reiciendis mollitia error maxime earum totam, placeat quod! Ipsa, eum'
		]
    };
    
    changeState = async (event) => {
        await this.setState({comment : event.target.value})
    }

    postComment = async () => {
        const parameters = {
            "content_type" : 'comment',
            "html_content" : this.state.comment
        };
        const comment = await {
            method: "post",
            url: this.props.baseUrl + '/posting/secondlevel/' + this.props.questionId,
            headers: {
              Authorization: "Bearer " + localStorage.getItem('token')
            },
            data: parameters
        };
        await this.props.handleAPI(comment)
        await this.props.history.push('/artikel/'+this.props.questionId)
    }
    handleSeeComment=()=>{
		if(store.getState().seeComment){
			store.setState({
				seeComment:false
			})
		} else {
			store.setState({
				seeComment:true
			})
		}
	}
	render() {
		return (
			<React.Fragment>
				<Header />
				<div className="container-fluid pt-4">
					<div className="row" style={{ fontFamily: 'liberation_sansregular' }}>
						<div className="col-lg-1 col-md-1 col-sm-12 col-12 mt-5">
						</div>
						<div className="col-lg-7 col-md-7 col-sm-12 col-12 mt-5 pl-0 pr-0" >
                            <AccessDetailArticle/>
                            {store.getState().seeComment?
                                <div>
                                    <button className='btn btn-grad' onClick={()=>this.handleSeeComment()} style={{textAlign:'center', marginBottom:'20px', fontWeight:'bold'}}>
                                        Lihat Komentar...
                                    </button>
                                </div>
                            :
                                <div>
                                    <button className='btn btn-grad' onClick={()=>this.handleSeeComment()} style={{textAlign:'center', marginBottom:'20px', fontWeight:'bold'}}>
                                        Sembunyikan Komentar...
                                    </button>
                                        <ViewComment/>
                                </div>
                            }
                            <div className="border py-2 ml-1 mr-1 row bg-white">
                                <div className="col-md-2">
                                    <img src={user} alt="" width="90%" style={{borderRadius : '50%'}}/>
                                </div>
                                <div className="col-md-8 form-group" style={{paddingTop:'18px'}}>
                                    <input type="text" className="form-control" placeholder="Tuliskan komentar anda" onChange={(e)=>this.changeState(e)}/>
                                </div>
                                <div className="col-md-2 text-center pt-3">
                                    <button className="btn btn-outline-primary" style={{width:'100%'}} onClick={()=>this.postComment()}>Kirim</button>
                                </div>
                            </div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-5">
							<PopularList article={this.state.article} />
                            <Accordion/>
						</div>
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}
export default connect('allArticleDatabase, startComment, newArticle, questionId, baseUrl,seeComment', actions)(withRouter(detailArticle));
