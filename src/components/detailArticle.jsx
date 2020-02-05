// import React from 'react';
// import '../styles/css/userownarticle.css';
// import { actions, store } from '../stores/store';
// import { connect } from 'unistore/react'
// import { withRouter } from 'react-router-dom';
// import { Markup } from 'interweave';
// import axios from 'axios'

// class detailArticle extends React.Component {
//   componentDidMount = () => {
//     const req = {
//       method: "get",
//       url: store.getState().baseUrl+"/posting/toplevel"
//     }; 
//     const self = this
//     axios(req)
//         .then(function (response) {
//             store.setState({ 
//                 allArticleDatabase: response.data, 
//                 isLoading:false
//             })
//             console.log('isi store article',store.getState().allArticleDatabase)
//             return response
//         })
//         .catch((error)=>{
//             store.setState({ 
//                 isLoading: false
//             })
//             switch (error.response.status) {
//                 case 401 :
//                     self.props.history.push('/login')
//                     break
//                 case 403 :
//                     self.props.history.push('/403')
//                     break
//                 case 404 :
//                     self.props.history.push('/404')
//                     break
//                 case 500 :
//                     self.props.history.push('/500')
//                     break
//                 default :
//                     break
//             }
//         })
//       };
//   render() {
//     let contentNew = this.props.allArticleDatabase
//     console.log('isi all query di component',contentNew)
//     return (
//       <div>Pengetesan</div>
//     )
//     // const htmlArticle = <Markup className='preview-article-control' content={contentNew}/>
//     // return (
//     //   <div style={{textAlign:'left', marginBottom:'20px'}}>
//     //     <div className='col-md-12 box-control'>
//     //       <div style={{textAlign:'center', fontWeight:'bold', marginBottom:'20px', marginTop:'20px', fontSize:'30px'}}>
//     //         Preview
//     //       </div>
//     //       <div style={{fontWeight:'Bold', fontSize:'25px'}}>{this.props.articleTitle}</div>
//     //         <div>
//     //           <img style={{width:'100%'}} src={this.props.imageUrl}/>
//     //         </div>
//     //         <div className='preview-article-control'>
//     //           {htmlArticle}
//     //         </div>
//     //     </div>
//     //   </div>
//     // )
//   }
// }

// export default connect("newArticle, articleTitle, imageUrl, allArticleDatabase",actions)(withRouter(detailArticle));
