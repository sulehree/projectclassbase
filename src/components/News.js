import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import CountryName from './CountryName'


export class News extends Component {
    // articles = [

    //     {
    //         "source": {
    //             "id": "news24",
    //             "name": "News24"
    //         },
    //         "author": "Yoliswa Sobuwa",
    //         "title": "These are the 50 countries with the worst health habits – SA takes 10th spot",
    //         "description": "A global study has found that South Africa ranks 10th out of 50 countries for unhealthy lifestyle habits.",
    //         "url": "https://www.news24.com/news24/southafrica/news/these-are-the-50-countries-with-the-worst-health-habits-sa-takes-10th-spot-20230612",
    //         "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/2202/0e891d4236934d028175a0068625c8cd.jpg",
    //         "publishedAt": "2023-06-12T07:39:47+00:00",
    //         "content": "South Africa ranks 10th out of 50 countries around the world for unhealthy lifestyle habits, suggests a recent study by medical aid comparison website MedicalAid.com. \r\nThe website analyses the premi… [+2752 chars]"
    //     },

    //     {
    //         "source": {
    //             "id": "nhl-news",
    //             "name": "NHL News"
    //         },
    //         "author": "Tracey Myers",
    //         "title": "Panthers need healthy players to step up in Game 5 with Tkachuk hurt",
    //         "description": "There was no update on Matthew Tkachuk on Sunday, and with the forward's health in question, the Florida Panthers will rely heavily on those who are feeling good in the Stanley Cup Final.",
    //         "url": "https://www.nhl.com/news/florida-panthers-need-healthy-players-to-step-up-in-game-5-with-matthew-tkachuk-hurt/c-344823444",
    //         "urlToImage": "https://cms.nhl.bamgrid.com/images/photos/344824168/1024x576/cut.jpg",
    //         "publishedAt": "2023-06-11T16:42:38Z",
    //         "content": "SUNRISE, Fla. -- There was no update on Matthew Tkachuk on Sunday, and with the forward's health in question, the Florida Panthers will rely heavily on those who are feeling good in the Stanley Cup F… [+3117 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-washington-post",
    //             "name": "The Washington Post"
    //         },
    //         "author": "Editorial Board",
    //         "title": "The mystery of long covid needs to be unraveled. We’re getting closer.",
    //         "description": "A new report adds to the expanding evidence that long covid will pose a protracted health challenge to the world.",
    //         "url": "https://www.washingtonpost.com/opinions/2023/06/11/long-covid-definition-recover-nih/",
    //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/R33VDIEF6AI6ZFI4DYGMG4R6KM.jpg&w=1440",
    //         "publishedAt": "2023-06-11T11:00:38Z",
    //         "content": "Comment on this story\r\nComment\r\nThe pandemic left millions of people who suffer with lingering symptoms. To grapple with this legacy, we must continue research to find answers to a series of biomedic… [+4690 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "medical-news-today",
    //             "name": "Medical News Today"
    //         },
    //         "author": "Annie Lennon",
    //         "title": "Poor heart health linked to 17-fold risk of musculoskeletal disorders",
    //         "description": "Researchers have found a significant link between cardiovascular health and increased risk for conditions such as carpal tunnel syndrome and tennis elbow.",
    //         "url": "http://www.medicalnewstoday.com/articles/poor-heart-health-linked-to-17-fold-risk-of-musculoskeletal-disorders",
    //         "urlToImage": "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2023/06/cardiovascular_health_GettyImages1493877723_Thumb.jpg",
    //         "publishedAt": "2023-06-10T13:00:00Z",
    //         "content": "<ul><li>Researchers investigated the link between cardiovascular risk and the development of musculoskeletal conditions. </li><li>They found that those with higher cardiovascular risk are 17 times mo… [+6917 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "medical-news-today",
    //             "name": "Medical News Today"
    //         },
    //         "author": "Jessica Norris",
    //         "title": "Weight loss diets like the green Mediterranean diet may help reduce brain aging",
    //         "description": "Researchers have found that well-managed weight through a healthy diet, including Mediterranean-type diets, can help reduce brain aging and improve brain health.",
    //         "url": "http://www.medicalnewstoday.com/articles/weight-loss-diets-like-the-green-mediterranean-diet-may-help-reduce-brain-aging",
    //         "urlToImage": "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2023/06/Greener_Diet_Stocksy_txp0015b1f7nni300_Medium_4558333_Thumb.jpg",
    //         "publishedAt": "2023-06-08T16:00:00Z",
    //         "content": "<ul><li>Brain health is a critical component of health and well-being. The brain aging faster than the rest of the body may be linked to several conditions, such as Alzheimers disease. </li><li>A stu… [+7533 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-irish-times",
    //             "name": "The Irish Times"
    //         },
    //         "author": "Jennifer Bray",
    //         "title": "Abortion rules should be relaxed, review to recommend",
    //         "description": "Minister for Health Stephen Donnelly considering report by barrister Marie O’Shea which examined operation of the existing law",
    //         "url": "https://www.irishtimes.com/ireland/social-affairs/2023/03/29/review-calls-for-abortion-law-to-be-relaxed/",
    //         "urlToImage": "https://www.irishtimes.com/resizer/DycgF-s39PfaIVo4cOhhhNhDjqM=/1200x630/filters:format(jpg):quality(70):focal(1109x649:1119x659)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/YVVSZCLNN6CW4NWJKGEPUSEAPE.jpg",
    //         "publishedAt": "2023-03-29T04:15:00Z",
    //         "content": "A new review of the States abortion law is set to recommend a loosening of existing rules which could involve the removal of the three-day wait to access medication.\r\nMinister for Health Stephen Donn… [+2934 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-globe-and-mail",
    //             "name": "The Globe And Mail"
    //         },
    //         "author": "Wency Leung",
    //         "title": "‘COVID hasn’t gone away’: Five things health experts say we must do to end the pandemic",
    //         "description": "Boosting health care capacity, encouraging third doses and better understanding long COVID are among the issues health experts say need to be addressed",
    //         "url": "https://www.theglobeandmail.com/canada/article-covid-19-pandemic-not-over/",
    //         "urlToImage": "https://www.theglobeandmail.com/resizer/nYUYq7AN4xv1_6tgavE1CKi6OvQ=/1200x800/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/OSOQKLUMCZEDDPFOKUWLUFOLFY.png",
    //         "publishedAt": "2022-06-15T17:00:00Z",
    //         "content": "Restaurants are open. Festivals are back. Masks, for the most part, are optional. And starting Monday, June 20, proof of vaccination will no longer be required of Canadian air and train passengers.\r\n… [+7848 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "rte",
    //             "name": "RTE"
    //         },
    //         "author": "Will Goodbody",
    //         "title": "Efforts continue to assess extent of ransomware issue",
    //         "description": "Efforts will continue today to assess the impact of the ransomware attack on the Health Service Executive, healthcare facilities and services here.",
    //         "url": "https://www.rte.ie/news/coronavirus/2021/0515/1221735-hse-cyber-atack/",
    //         "urlToImage": "https://img.rasset.ie/0016bdc3-1600.jpg",
    //         "publishedAt": "2021-05-15T06:18:56Z",
    //         "content": "Efforts will continue today to assess the impact of the ransomware attack on the Health Service Executive, healthcare facilities and services.\r\nThe HSE has said it will take a number of days before i… [+1264 chars]"
    //     }
    // ]

    constructor(props) {
        super();

        document.title=this.capitalizeFirstLetter(props.category)+" :Daily Akhbar";

        this.state = {
            // articles: this.articles,
            articles: [],
            loading: false,
            page: 1,
            errorMessage: ""
        }

    }
 
     capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


     async UpDateNewsData(){
        console.log(this.state.page)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=64c969a073c94603bb4efc9e179b071e&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedata = await data.json();
        this.results = parsedata.totalResults;
        this.TotalPages =Math.ceil(this.results / this.props.pageSize)
        this.setState({
            articles: parsedata.articles,
            loading: false,
            errorMessage: parsedata.message
        });
        console.log(this.state.page)
    }

     componentDidMount() {

       this.UpDateNewsData();
        
        
    }

    handleNextClick = async () => {
       this.setState({page: this.state.page + 1})
       this.UpDateNewsData();
    }
    handlePrevClick = async () => {
        
        this.setState({page: this.state.page - 1})
        this.UpDateNewsData();     

    }

    render() {

        return (
            <>
                <div className="container my-3">

                    <div className="row">

                        <h2 className="text-center"><strong>Daily Akhbar:</strong>Top HeadLines in <CountryName code={this.props.country} /> on {this.props.category.toUpperCase()} </h2>
                        {/* {!this.state.loading && <  Spinner />} */}
                        {/* above component will only be shown when this.state.loading will be true */}
                        {
                            !this.state.loading && this.state.articles?.length > 0 ? (

                                this.state.articles?.map((element) => {

                                    return <div className="col-md-4 my-2" key={element.url}>
                                        <NewsItem title={element.title} authorName={element.author}
                                            imageUrl={element.urlToImage} description={element.description} newsUrl={element.url} PDate={element.publishedAt} newsSource={element.source.name} />
                                    </div>

                                })
                            ) : (
                                <div >
                                    {this.state.loading && <  Spinner />}
                                    <h2>{this.state.errorMessage}</h2>
                                </div>
                            )
                        }




                    </div>

                    <div className="container d-flex justify-content-between">

                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>  &larr; Previous</button>

                        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>&larr;{this.state.page} of {Math.ceil(this.TotalPages) || "(nth)"}  &rarr;</button>

                        <button disabled={this.state.page >= this.TotalPages} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>


                    </div>



                </div>
            </>
        )
    }
}

export default News